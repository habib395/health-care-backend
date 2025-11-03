const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnarController');

router.get('/partner', partnerController.getPartnarsInfo);

module.exports = router;