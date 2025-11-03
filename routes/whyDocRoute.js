const express = require('express');
const router = express.Router();
const whyDocController = require('../controllers/whyDocController');

router.get('/whyDoc', whyDocController.getWhyDocController);

module.exports = router;