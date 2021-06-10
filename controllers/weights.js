let { weights } = require('../data');

const getWeights = (req, res) => {
    res.status(200).json({success:true, data:weights})
}


module.exports = {
    getWeights
}
