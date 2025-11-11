const express = require('express');
const router = express.Router();
const clinicCollection = require('../controllers/clinicController');

router.get('/clinic', clinicCollection.getClinicInfo);

module.exports = router;