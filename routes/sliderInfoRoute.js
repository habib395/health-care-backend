const express = require('express');
const router = express.Router();
const sliderInfoController = require('../controllers/sliderInfoController');

router.get('/sliderInfo', sliderInfoController.getAllSliderInfo);

module.exports = router;