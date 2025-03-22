require('dotenv').config();
const express = require('express');
const cors = require('cors');
const encryptionRoutes = require('./routes/encryption.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/encryption', encryptionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
