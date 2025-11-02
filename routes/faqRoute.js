const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

router.get('/faq', faqController.getFaqInfo);

module.exports = router;