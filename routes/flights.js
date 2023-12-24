const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/all', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

module.exports = router