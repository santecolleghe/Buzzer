


const { google } = require('googleapis');

const API_KEY = process.env.GDRIVE_API_KEY || 'INSERISCI_LA_TUA_API_KEY';
const FOLDER_ID = process.env.GDRIVE_FOLDER_ID || 'INSERISCI_LA_TUA_FOLDER_ID';

async function listFiles() {
  const drive = google.drive({ version: 'v3', auth: undefined });
  const res = await drive.files.list({
    q: `'${FOLDER_ID}' in parents and trashed=false`,
    fields: 'files(id, name)',
    key: API_KEY
  });
  return res.data.files;
}

module.exports = listFiles;
