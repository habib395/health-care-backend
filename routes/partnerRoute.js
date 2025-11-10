const express = require('express');
const router = express.Router();
const partnerCollection = require('../controllers/partnerController')

router.get('/partner', partnerCollection.getPartnerInfo);

module.exports = router;