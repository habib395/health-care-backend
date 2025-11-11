const express = require('express');
const router = express.Router();
const premiumCollection = require('../controllers/premiumController');

router.get('/premium', premiumCollection.getPremiumInfo);

module.exports = router;