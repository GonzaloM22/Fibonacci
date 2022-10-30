const express = require('express');
const router = express.Router();
const calculateFinonacci = require('./controllers/fibonacciController.js');

router.get('/', calculateFinonacci);

module.exports = router;
