const express = require('express');
const router = express.Router();
const partnarController = require('../controllers/partnarAllController');

router.get('/partnerAll', partnarController.getPartnarsInfo);

module.exports = router;