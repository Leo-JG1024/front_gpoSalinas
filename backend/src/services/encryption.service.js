const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const publicKeyPath = path.join(__dirname, '../keys/public.pem');
const privateKeyPath = path.join(__dirname, '../keys/private.pem');

// Cargar las llaves
const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

/**
 * Encripta un texto usando RSA y devuelve la cadena en base64.
 * @param {string} text - Texto a encriptar.
 * @returns {string} - Texto encriptado en base64.
 */
const encryptText = (text) => {
    const buffer = Buffer.from(text, 'utf8');
    const encrypted = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
        },
        buffer
    );
    return encrypted.toString('base64');
};

/**
 * Desencripta un texto en base64 usando RSA.
 * @param {string} encryptedText - Texto encriptado en base64.
 * @returns {string} - Texto desencriptado en UTF-8.
 */
const decryptText = (encryptedText) => {
    const buffer = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.privateDecrypt(
        {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
        },
        buffer
    );
    return decrypted.toString('utf8');
};

module.exports = { encryptText, decryptText };
