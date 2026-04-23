// routes/languages.js
const router = require('express').Router();
const { Language } = require('../models/index');
const { SUPPORTED_LANGUAGES } = require('../config/cefr');

router.get('/', async (req, res) => {
  try {
    const languages = await Language.find({ active: true }).sort({ sortOrder: 1 });
    res.json({ languages: languages.length ? languages : SUPPORTED_LANGUAGES.filter(l => l.active) });
  } catch (err) {
    res.json({ languages: SUPPORTED_LANGUAGES.filter(l => l.active) });
  }
});

module.exports = router;
