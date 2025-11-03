const express = require('express');
const router = express.Router();
const partnarController = require('../controllers/partnarController');

router.get('/partnars', partnarController.getPartnarsInfo);

module.exports = router;