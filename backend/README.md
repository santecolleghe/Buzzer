# Buzzer Backend Node.js

Backend Node.js pronto per il deploy su Render.

## Struttura delle cartelle
- `api/` - Endpoints Express
- `models/` - Modelli Sequelize
- `services/` - Logica di business
- `config/` - Configurazioni
- `tests/` - Test automatici

## Avvio locale
1. Installa le dipendenze: `npm install`
2. Avvia il server: `npm start`
3. Esegui i test: `npm test`

## Deploy su Render
- Imposta il comando di avvio: `npm start`
- Assicurati che la variabile d'ambiente `PORT` sia gestita da Render
- Usa SQLite per sviluppo, puoi passare a PostgreSQL in produzione
