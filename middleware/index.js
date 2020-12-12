var express = require('express');
var auth = require('./auth');
var verifikasi = require('./verifikasi');
var router = express.Router();

// daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// alamat yang perlu authorisasi

router.get('/api/v1/rahasia', verifikasi(), auth.secretpage);

module.exports = router;