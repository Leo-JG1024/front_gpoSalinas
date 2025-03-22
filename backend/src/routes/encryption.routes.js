const express = require('express');
const { encryptData, decryptData } = require('../controllers/encryption.controller');

const router = express.Router();

router.post('/encrypt', encryptData);
router.post('/decrypt', decryptData);

module.exports = router;
