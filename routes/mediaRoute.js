const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/massMediaController');

router.get('/media', mediaController.getMassMediaInfo);

module.exports = router;