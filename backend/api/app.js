const { google } = require('googleapis');
const API_KEY = process.env.GDRIVE_API_KEY || 'INSERISCI_LA_TUA_API_KEY';

// Endpoint per stream diretto da Google Drive
app.get('/api/file/:id', async (req, res) => {
  const fileId = req.params.id;
  try {
    const drive = google.drive({ version: 'v3', auth: API_KEY });
    const fileRes = await drive.files.get({
      fileId,
      alt: 'media',
      key: API_KEY
    }, { responseType: 'stream' });
    res.setHeader('Content-Type', 'audio/mpeg');
    fileRes.data.pipe(res);
  } catch (err) {
    res.status(500).json({ error: 'Impossibile scaricare il file da Google Drive' });
  }
});

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
