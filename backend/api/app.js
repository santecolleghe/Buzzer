
const express = require('express');
const path = require('path');
const gdriveService = require('../services/gdrive/listFiles');
const app = express();

// Serve Angular app dal base path
app.use(express.static(path.join(__dirname, '../public')));

// API per la lista dei file da Google Drive
app.get('/api/files', async (req, res) => {
  try {
    const files = await gdriveService();
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero dei file da Google Drive' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su port ${PORT}`);
});

module.exports = app;
