const express = require('express');
const router = express.Router();

const {
    getWeights,
    modifyWeight,
    addWeight
} = require('../controllers/weights')

router.get('/', getWeights)
router.post('/', addWeight)
router.put('/:oldWeight', modifyWeight)

module.exports = router
