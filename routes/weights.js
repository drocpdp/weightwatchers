const express = require('express');
const router = express.Router();

const {
    getWeights
} = require('../controllers/weights')

//either this way or...
router.get('/', getWeights)

module.exports = router
