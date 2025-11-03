const express = require('express');
const router = express.Router();
const starInfoController = require('../controllers/starController');

router.get('/star', starInfoController.getAllStarInfo);

module.exports = router;