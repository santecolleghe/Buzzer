# Integrazione Google Drive

Per integrare la chiamata reale a Google Drive, è necessario:

1. Creare un progetto su Google Cloud Platform
2. Abilitare l'API Google Drive
3. Creare credenziali OAuth 2.0 o Service Account
4. Salvare il file di credenziali in `config/credentials.json`
5. Installare la libreria `googleapis` con `npm install googleapis`
6. Usare la funzione qui sotto per leggere la lista dei file
