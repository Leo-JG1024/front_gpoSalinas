const { encryptText, decryptText } = require('../services/encryption.service');

/**
 * Controlador para encriptar un texto recibido en el cuerpo de la petición.
 */
const encryptData = (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Se requiere un texto para encriptar' });
        }

        const encryptedText = encryptText(text);
        return res.json({ encryptedText });
    } catch (error) {
        return res.status(500).json({ error: 'Error al encriptar el texto' });
    }
};

/**
 * Controlador para desencriptar un texto en base64 recibido en el cuerpo de la petición.
 */
const decryptData = (req, res) => {
    try {
        const { encryptedText } = req.body;
        if (!encryptedText) {
            return res.status(400).json({ error: 'Se requiere un texto encriptado para desencriptar' });
        }

        const decryptedText = decryptText(encryptedText);
        return res.json({ decryptedText });
    } catch (error) {
        return res.status(500).json({ error: 'Error al desencriptar el texto' });
    }
};

module.exports = { encryptData, decryptData };
