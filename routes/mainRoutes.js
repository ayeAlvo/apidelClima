const express = require('express');
const router = express.Router();

const apiController = require('../controller/apiController');

router.get('/', apiController.home);
router.post('/', apiController.processData);

module.exports = router;