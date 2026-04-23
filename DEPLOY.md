# 🚀 Guía de Despliegue — LinguaFlow

## 1️⃣ MongoDB Atlas (Base de Datos)

1. Ve a https://cloud.mongodb.com y crea una cuenta
2. Crea un **Cluster Gratuito (M0)**
3. En **Database Access**, crea un usuario:
   - Username: `linguaflow_admin`
   - Password: genera uno seguro y guárdalo
4. En **Network Access**, añade IP: `0.0.0.0/0` (acceso desde cualquier lugar)
5. En **Clusters → Connect → Drivers → Node.js**, copia la URI:
   ```
   mongodb+srv://linguaflow_admin:<password>@cluster0.xxxxx.mongodb.net/linguaflow?retryWrites=true&w=majority
   ```
6. Reemplaza `<password>` con tu contraseña real

## 2️⃣ Render (Backend API)

### Opción A — Blueprint (recomendado)
1. Ve a https://dashboard.render.com/blueprints
2. Conecta tu repo de GitHub: `SebastianCreator/linguaflow`
3. Render detectará `render.yaml` automáticamente
4. Añade manualmente la variable de entorno:
   - `MONGO_URI`: tu URI de MongoDB Atlas

### Opción B — Manual
1. Ve a https://dashboard.render.com/web-services/new
2. Conecta tu repo GitHub
3. Configura:
   - **Name**: `linguaflow-api`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Health Check Path**: `/health`
4. Añade variables de entorno:
   ```env
   NODE_ENV=production
   MONGO_URI=tu_uri_de_atlas
   JWT_SECRET=genera_con_openssl_rand_base64_64
   JWT_REFRESH_SECRET=genera_otro_secreto
   CLIENT_URL=https://linguaflow.vercel.app
   ```

## 3️⃣ Vercel (Frontend)

### Opción A — Git Integration (recomendado)
1. Ve a https://vercel.com/new
2. Importa `SebastianCreator/linguaflow`
3. Vercel detectará automáticamente el framework Vite (gracias a `vercel.json` raíz)
4. Configura variable de entorno:
   - `VITE_API_URL`: URL de tu backend en Render (ej: `https://linguaflow-api.onrender.com/api`)

### Opción B — CLI (si funciona en tu entorno)
```bash
cd frontend
vercel --prod
```

## 4️⃣ Conectar Frontend ↔ Backend

1. Una vez deployado el backend en Render, copia su URL (ej: `https://linguaflow-api.onrender.com`)
2. En Vercel, ve a **Settings → Environment Variables**
3. Añade/actualiza:
   ```
   VITE_API_URL=https://linguaflow-api.onrender.com/api
   ```
4. Re-deploy el frontend para aplicar cambios

## 5️⃣ Verificación

- [ ] Backend health check: `https://linguaflow-api.onrender.com/health`
- [ ] Frontend carga correctamente
- [ ] Registro/login funcionan
- [ ] Lecciones se cargan desde MongoDB

## 🔧 Troubleshooting

### Error CORS
Asegúrate de que `CLIENT_URL` en Render coincida exactamente con la URL de Vercel (incluyendo `https://`)

### MongoDB no conecta
- Verifica que la IP `0.0.0.0/0` esté en Network Access de Atlas
- Verifica que la contraseña en MONGO_URI sea correcta (especialmente si tiene caracteres especiales, URL-encodéalos)

### Build falla en Vercel
- Verifica que `vercel.json` esté en la raíz del repo
- El build command debería ser: `cd frontend && npm install && npm run build`

