const express =require('express');
const router = express.Router();
const buyOnlineInfoController = require('../controllers/buyOnlineController');

router.get('/buyOnline', buyOnlineInfoController.getBuyOnlineInfo)

module.exports = router; 