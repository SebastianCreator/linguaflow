#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════
#  Fluenta — Web Deploy Script
#  Despliega el frontend y backend en la plataforma elegida.
#
#  Uso:
#    chmod +x deploy-web.sh
#    ./deploy-web.sh                    # menú interactivo
#    ./deploy-web.sh vercel+render      # Frontend en Vercel, Backend en Render
#    ./deploy-web.sh netlify+railway    # Frontend en Netlify, Backend en Railway
#    ./deploy-web.sh docker             # Docker Compose local / VPS
# ═══════════════════════════════════════════════════════════════════════
set -euo pipefail

# ── Colores ──────────────────────────────────────────────────────────
C_RESET='\033[0m'; C_RED='\033[0;31m'; C_GREEN='\033[0;32m'
C_YELLOW='\033[1;33m'; C_BLUE='\033[0;34m'; C_CYAN='\033[0;36m'
C_BOLD='\033[1m'

log()     { echo -e "${C_BLUE}▶${C_RESET} $*"; }
ok()      { echo -e "${C_GREEN}✔${C_RESET} $*"; }
warn()    { echo -e "${C_YELLOW}⚠${C_RESET} $*"; }
error()   { echo -e "${C_RED}✘ Error:${C_RESET} $*" >&2; exit 1; }
header()  { echo -e "\n${C_BOLD}${C_CYAN}━━━ $* ━━━${C_RESET}\n"; }

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# ── Banner ───────────────────────────────────────────────────────────
print_banner() {
clear
echo -e "${C_CYAN}${C_BOLD}"
cat << 'EOF'
  ██╗     ██╗███╗   ██╗ ██████╗ ██╗   ██╗ █████╗ ███████╗██╗      ██████╗ ██╗    ██╗
  ██║     ██║████╗  ██║██╔════╝ ██║   ██║██╔══██╗██╔════╝██║     ██╔═══██╗██║    ██║
  ██║     ██║██╔██╗ ██║██║  ███╗██║   ██║███████║█████╗  ██║     ██║   ██║██║ █╗ ██║
  ██║     ██║██║╚██╗██║██║   ██║██║   ██║██╔══██║██╔══╝  ██║     ██║   ██║██║███╗██║
  ███████╗██║██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║██║     ███████╗╚██████╔╝╚███╔███╔╝
  ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
EOF
echo -e "${C_RESET}"
echo -e "  ${C_BOLD}Despliegue Web${C_RESET} — Elige tu plataforma\n"
}

# ── Verificar herramientas ────────────────────────────────────────────
check_tool() {
  command -v "$1" >/dev/null 2>&1
}

require_tool() {
  check_tool "$1" || error "'$1' no está instalado. $2"
}

# ── Menú interactivo ──────────────────────────────────────────────────
show_menu() {
  print_banner
  echo "  Elige la combinación de plataformas:"
  echo ""
  echo "  ${C_GREEN}1)${C_RESET} ${C_BOLD}Vercel + Render${C_RESET}        (Recomendado — todo gratis)"
  echo "     Frontend: Vercel · Backend: Render · DB: MongoDB Atlas"
  echo ""
  echo "  ${C_GREEN}2)${C_RESET} ${C_BOLD}Netlify + Railway${C_RESET}      (Alternativa popular)"
  echo "     Frontend: Netlify · Backend: Railway · DB: Railway MongoDB"
  echo ""
  echo "  ${C_GREEN}3)${C_RESET} ${C_BOLD}Docker Compose (VPS)${C_RESET}   (Control total — tu propio servidor)"
  echo "     Requiere un VPS con Ubuntu 22.04+ (DigitalOcean, Hetzner, etc.)"
  echo ""
  echo "  ${C_GREEN}4)${C_RESET} ${C_BOLD}Solo Frontend${C_RESET} (Vercel)  (Si ya tienes el backend)"
  echo ""
  echo "  ${C_GREEN}5)${C_RESET} ${C_BOLD}Solo Frontend${C_RESET} (Netlify) (Si ya tienes el backend)"
  echo ""
  echo "  ${C_GREEN}6)${C_RESET} ${C_BOLD}Guía paso a paso${C_RESET}       (Instrucciones manuales)"
  echo ""
  read -p "  Selecciona [1-6]: " CHOICE
  case $CHOICE in
    1) MODE="vercel+render" ;;
    2) MODE="netlify+railway" ;;
    3) MODE="docker" ;;
    4) MODE="vercel-only" ;;
    5) MODE="netlify-only" ;;
    6) MODE="guide" ;;
    *) error "Opción inválida" ;;
  esac
}

# ════════════════════════════════════════════════════════════════════════
#  PASO COMÚN: build del frontend
# ════════════════════════════════════════════════════════════════════════
build_frontend() {
  local api_url="$1"
  header "Build del Frontend"

  cd "$SCRIPT_DIR/frontend"
  log "Instalando dependencias..."
  npm ci --silent

  log "Generando build de producción (VITE_API_URL=$api_url)..."
  VITE_API_URL="$api_url" npm run build

  ok "Build completado → frontend/dist/"
  echo "  Tamaño: $(du -sh dist | cut -f1)"
  cd "$SCRIPT_DIR"
}

# ════════════════════════════════════════════════════════════════════════
#  OPCIÓN 1: VERCEL + RENDER
# ════════════════════════════════════════════════════════════════════════
deploy_vercel_render() {
  header "🚀 Desplegando en Vercel + Render"

  # ── Verificar CLIs ────────────────────────────────────────────────
  if ! check_tool vercel; then
    log "Instalando Vercel CLI..."
    npm install -g vercel
  fi

  echo ""
  echo -e "${C_YELLOW}Paso 1/3 — Configura el Backend en Render${C_RESET}"
  echo "  1. Ve a https://render.com y crea una cuenta (gratis)"
  echo "  2. New → Web Service → Connect GitHub repo"
  echo "  3. Root directory: backend"
  echo "  4. Build: npm install | Start: node server.js"
  echo "  5. Agrega las variables de entorno del archivo backend/.env.example"
  echo "  6. Crea también un MongoDB (New → PostgreSQL → elige MongoDB)"
  echo "     O usa MongoDB Atlas (atlas.mongodb.com — gratis)"
  echo ""
  read -p "  ¿Cuál es la URL de tu backend en Render? (ej: https://Fluenta-api.onrender.com): " BACKEND_URL
  [[ -z "$BACKEND_URL" ]] && error "Debes ingresar la URL del backend"
  BACKEND_URL="${BACKEND_URL%/}"    # quitar trailing slash

  echo ""
  echo -e "${C_YELLOW}Paso 2/3 — Build del Frontend${C_RESET}"
  # Escribir .env para el build
  echo "VITE_API_URL=${BACKEND_URL}/api" > frontend/.env.production
  build_frontend "${BACKEND_URL}/api"

  echo ""
  echo -e "${C_YELLOW}Paso 3/3 — Deploy en Vercel${C_RESET}"
  cd "$SCRIPT_DIR/frontend"

  # Configurar vercel.json con la URL del backend
  cat > vercel.json << VERCEL
{
  "version": 2,
  "name": "Fluenta",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    { "source": "/sw.js", "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }] },
    { "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] }
  ]
}
VERCEL

  log "Iniciando deploy en Vercel..."
  vercel deploy --prod --yes \
    --env VITE_API_URL="${BACKEND_URL}/api" \
    2>&1 | tee /tmp/vercel-output.txt

  FRONTEND_URL=$(grep -oP 'https://[^\s]+\.vercel\.app' /tmp/vercel-output.txt | tail -1)
  cd "$SCRIPT_DIR"

  echo ""
  ok "═══════════════════════════════════════════════════"
  ok " ¡Despliegue completado! 🎉"
  ok "═══════════════════════════════════════════════════"
  echo ""
  echo "  🌐 Frontend:  ${C_CYAN}${FRONTEND_URL:-https://tu-app.vercel.app}${C_RESET}"
  echo "  🔧 Backend:   ${C_CYAN}${BACKEND_URL}${C_RESET}"
  echo ""
  warn "Recuerda actualizar CLIENT_URL=${FRONTEND_URL} en las variables de Render"
}

# ════════════════════════════════════════════════════════════════════════
#  OPCIÓN 2: NETLIFY + RAILWAY
# ════════════════════════════════════════════════════════════════════════
deploy_netlify_railway() {
  header "🚀 Desplegando en Netlify + Railway"

  if ! check_tool netlify; then
    log "Instalando Netlify CLI..."
    npm install -g netlify-cli
  fi

  echo ""
  echo -e "${C_YELLOW}Paso 1/3 — Configura el Backend en Railway${C_RESET}"
  echo "  1. Ve a https://railway.app → New Project → Deploy from GitHub"
  echo "  2. Selecciona el repo y elige la carpeta 'backend'"
  echo "  3. Agrega un servicio MongoDB: + New → Database → MongoDB"
  echo "  4. Configura las variables de entorno (ver backend/.env.example)"
  echo "  5. En Settings → Networking → Generate Domain"
  echo ""
  read -p "  ¿Cuál es la URL de tu backend en Railway? (ej: https://Fluenta-api.up.railway.app): " BACKEND_URL
  [[ -z "$BACKEND_URL" ]] && error "Debes ingresar la URL del backend"
  BACKEND_URL="${BACKEND_URL%/}"

  echo ""
  echo -e "${C_YELLOW}Paso 2/3 — Build del Frontend${C_RESET}"
  echo "VITE_API_URL=${BACKEND_URL}/api" > frontend/.env.production
  build_frontend "${BACKEND_URL}/api"

  echo ""
  echo -e "${C_YELLOW}Paso 3/3 — Deploy en Netlify${C_RESET}"
  cd "$SCRIPT_DIR"

  log "Iniciando deploy en Netlify..."
  netlify deploy \
    --dir frontend/dist \
    --prod \
    --message "Fluenta v1.0 deploy" \
    2>&1 | tee /tmp/netlify-output.txt

  FRONTEND_URL=$(grep -oP 'https://[^\s]+\.netlify\.app' /tmp/netlify-output.txt | head -1)

  echo ""
  ok "═══════════════════════════════════════════════════"
  ok " ¡Despliegue completado! 🎉"
  ok "═══════════════════════════════════════════════════"
  echo ""
  echo "  🌐 Frontend:  ${C_CYAN}${FRONTEND_URL:-https://tu-app.netlify.app}${C_RESET}"
  echo "  🔧 Backend:   ${C_CYAN}${BACKEND_URL}${C_RESET}"
  echo ""
  warn "Recuerda actualizar CLIENT_URL=${FRONTEND_URL} en las variables de Railway"
}

# ════════════════════════════════════════════════════════════════════════
#  OPCIÓN 3: DOCKER COMPOSE (VPS)
# ════════════════════════════════════════════════════════════════════════
deploy_docker() {
  header "🐳 Desplegando con Docker Compose"

  require_tool docker "Instala Docker: https://docs.docker.com/engine/install/"
  require_tool "docker" "docker compose plugin requerido"

  # Generar secretos
  JWT_SECRET=$(openssl rand -base64 48 | tr -d '\n')
  JWT_REFRESH=$(openssl rand -base64 48 | tr -d '\n')
  MONGO_PASS=$(openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c20)

  log "Generando archivo .env de producción..."
  cat > "$SCRIPT_DIR/.env.production" << ENV
# ── Fluenta Production Environment ──
# Generado automáticamente el $(date)
NODE_ENV=production
MONGO_USER=admin
MONGO_PASSWORD=${MONGO_PASS}
JWT_SECRET=${JWT_SECRET}
JWT_REFRESH_SECRET=${JWT_REFRESH}
CLIENT_URL=http://localhost

# ── Configura estos manualmente ──
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
FROM_EMAIL=noreply@Fluenta.app
VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_EMAIL=admin@Fluenta.app
ENV

  read -p "  ¿Cuál será el dominio/IP de tu servidor? (ej: Fluenta.app o 45.123.45.67): " SERVER_DOMAIN
  SERVER_DOMAIN="${SERVER_DOMAIN:-localhost}"
  echo "CLIENT_URL=https://${SERVER_DOMAIN}" >> "$SCRIPT_DIR/.env.production"

  log "Construyendo imágenes Docker..."
  docker compose --env-file .env.production build --no-cache

  log "Iniciando servicios..."
  docker compose --env-file .env.production up -d

  log "Esperando que los servicios arranquen..."
  sleep 10

  log "Ejecutando seed de datos..."
  docker compose exec backend node utils/seedData.js || warn "Seed falló (puede que ya existan datos)"

  echo ""
  ok "═══════════════════════════════════════════════════"
  ok " ¡Stack desplegado con Docker! 🎉"
  ok "═══════════════════════════════════════════════════"
  echo ""
  echo "  🌐 App:      ${C_CYAN}http://${SERVER_DOMAIN}${C_RESET}"
  echo "  🔧 API:      ${C_CYAN}http://${SERVER_DOMAIN}:5000/health${C_RESET}"
  echo "  🗄  MongoDB:  puerto 27017 (solo interno)"
  echo ""
  echo "  Comandos útiles:"
  echo "  docker compose logs -f backend    # ver logs del API"
  echo "  docker compose ps                 # estado de servicios"
  echo "  docker compose down               # detener todo"
  echo ""
  echo -e "  ${C_YELLOW}Credenciales MongoDB guardadas en: .env.production${C_RESET}"
}

# ════════════════════════════════════════════════════════════════════════
#  OPCIÓN 4: SOLO FRONTEND EN VERCEL
# ════════════════════════════════════════════════════════════════════════
deploy_vercel_only() {
  header "🚀 Deploy Frontend → Vercel"

  if ! check_tool vercel; then
    npm install -g vercel
  fi

  read -p "  URL de tu backend (ej: https://api.tudominio.com): " BACKEND_URL
  BACKEND_URL="${BACKEND_URL%/}"
  echo "VITE_API_URL=${BACKEND_URL}/api" > frontend/.env.production
  build_frontend "${BACKEND_URL}/api"

  cd "$SCRIPT_DIR/frontend"
  log "Desplegando en Vercel..."
  vercel deploy --prod --yes

  ok "Frontend desplegado en Vercel ✅"
}

# ════════════════════════════════════════════════════════════════════════
#  OPCIÓN 5: SOLO FRONTEND EN NETLIFY
# ════════════════════════════════════════════════════════════════════════
deploy_netlify_only() {
  header "🚀 Deploy Frontend → Netlify"

  if ! check_tool netlify; then
    npm install -g netlify-cli
  fi

  read -p "  URL de tu backend (ej: https://api.tudominio.com): " BACKEND_URL
  BACKEND_URL="${BACKEND_URL%/}"
  echo "VITE_API_URL=${BACKEND_URL}/api" > frontend/.env.production
  build_frontend "${BACKEND_URL}/api"

  log "Desplegando en Netlify..."
  netlify deploy --dir frontend/dist --prod

  ok "Frontend desplegado en Netlify ✅"
}

# ════════════════════════════════════════════════════════════════════════
#  OPCIÓN 6: GUÍA PASO A PASO
# ════════════════════════════════════════════════════════════════════════
show_guide() {
  header "📖 Guía de despliegue manual"

  echo -e "${C_BOLD}OPCIÓN RECOMENDADA: Vercel (Frontend) + Render (Backend) + MongoDB Atlas (DB)${C_RESET}"
  echo "Todo gratuito, sin tarjeta de crédito."
  echo ""

  echo -e "${C_CYAN}━━ 1. BASE DE DATOS (MongoDB Atlas) ━━${C_RESET}"
  echo "  a) Ve a https://cloud.mongodb.com → Create Free Cluster"
  echo "  b) Elige M0 Sandbox (gratis para siempre)"
  echo "  c) Database Access → Add User: Fluenta_user / [contraseña fuerte]"
  echo "  d) Network Access → Add IP: 0.0.0.0/0 (permite todo)"
  echo "  e) Clusters → Connect → Drivers → copia la cadena:"
  echo "     mongodb+srv://Fluenta_user:<password>@cluster0.xxxxx.mongodb.net/Fluenta"
  echo ""

  echo -e "${C_CYAN}━━ 2. BACKEND (Render.com) ━━${C_RESET}"
  echo "  a) Ve a https://render.com → New → Web Service"
  echo "  b) Conecta tu repo de GitHub"
  echo "  c) Configura:"
  echo "     Root Directory: backend"
  echo "     Build Command:  npm install"
  echo "     Start Command:  node server.js"
  echo "  d) Variables de entorno (copiar de backend/.env.example):"
  echo "     NODE_ENV=production"
  echo "     MONGO_URI=<cadena de Atlas>"
  echo "     JWT_SECRET=<genera con: openssl rand -base64 48>"
  echo "     JWT_REFRESH_SECRET=<genera con: openssl rand -base64 48>"
  echo "     CLIENT_URL=https://tu-app.vercel.app  ← actualizar después"
  echo "  e) Deploy → copia la URL: https://Fluenta-api.onrender.com"
  echo ""

  echo -e "${C_CYAN}━━ 3. FRONTEND (Vercel) ━━${C_RESET}"
  echo "  Opción A (recomendada — sin CLI):"
  echo "  a) Ve a https://vercel.com → New Project → Import from GitHub"
  echo "  b) Root Directory: frontend"
  echo "  c) Framework: Vite"
  echo "  d) Environment Variables:"
  echo "     VITE_API_URL = https://Fluenta-api.onrender.com/api"
  echo "  e) Deploy → copia la URL: https://Fluenta.vercel.app"
  echo ""
  echo "  Opción B (con CLI):"
  echo "  cd frontend"
  echo "  VITE_API_URL=https://Fluenta-api.onrender.com/api npm run build"
  echo "  npx vercel deploy --prod"
  echo ""

  echo -e "${C_CYAN}━━ 4. SEED DE DATOS ━━${C_RESET}"
  echo "  Una vez que el backend esté corriendo:"
  echo "  a) En Render → tu servicio → Shell"
  echo "  b) Ejecuta: node utils/seedData.js"
  echo "  Esto crea idiomas, lecciones y evaluaciones de ejemplo."
  echo ""

  echo -e "${C_CYAN}━━ 5. ACTUALIZAR CLIENT_URL ━━${C_RESET}"
  echo "  En Render → Environment → CLIENT_URL = https://Fluenta.vercel.app"
  echo "  Redeploy el backend."
  echo ""

  echo -e "${C_BOLD}${C_GREEN}URLs finales:${C_RESET}"
  echo "  🌐 App:    https://Fluenta.vercel.app"
  echo "  🔧 API:    https://Fluenta-api.onrender.com"
  echo "  🗄  DB:    MongoDB Atlas (gestionado)"
  echo ""
  echo "  ¡Tiempo estimado total: ~20 minutos la primera vez!"
}

# ════════════════════════════════════════════════════════════════════════
#  MAIN
# ════════════════════════════════════════════════════════════════════════
MODE="${1:-}"

if [[ -z "$MODE" ]]; then
  show_menu
fi

case "$MODE" in
  "vercel+render")   deploy_vercel_render ;;
  "netlify+railway") deploy_netlify_railway ;;
  "docker")          deploy_docker ;;
  "vercel-only")     deploy_vercel_only ;;
  "netlify-only")    deploy_netlify_only ;;
  "guide")           show_guide ;;
  *)
    warn "Modo desconocido: $MODE"
    show_menu
    ;;
esac
