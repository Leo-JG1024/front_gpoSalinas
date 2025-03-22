const { encryptText, decryptText } = require('./services/encryption.service');

const text = "Fer 12";
const encryptedText = encryptText(text);
console.log("Encriptado:", encryptedText);

const decryptedText = decryptText(encryptedText);
console.log("Desencriptado:", decryptedText);
