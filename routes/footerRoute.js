const express = require('express');
const router = express.Router();
const footerController = require('../controllers/footerController');

router.get('/footer', footerController.getFooterInfo);

module.exports = router;