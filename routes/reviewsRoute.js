const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewsController');

router.get("/reviews", reviewController.getReviewsInfo);

module.exports = router;