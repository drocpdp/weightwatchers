let { weights } = require('../data');

const getWeights = (req, res) => {
    res.status(200).json({success:true, data:weights})
}

const addWeight = (req, res) => {
    const { newWeight } = req.body
    if (!newWeight){
        return res
            .status(400)
            .json({success:false, msg:'please provide newWeight value'})
    }
    res.status(201).json({success:true, data: [...weights, {weight: newWeight},]})
}

const modifyWeight = (req,res) => {
    const { oldWeight } = req.params
    const { newWeight } = req.body
    console.log(oldWeight, newWeight);

    const currWeight = weights.find((currWeight) => currWeight.weight === Number(oldWeight))

    if (!currWeight) {
        return res
            .status(404)
            .json({ success: false, msg: 'please provide weight value'})
    }    
    const newPeople = weights.map((currWeight)=>{
        if (currWeight.weight === Number(oldWeight)){
            currWeight.weight = newWeight
        }
        return currWeight
    })
    res.status(200).json({success:true, data: weights})
}


module.exports = {
    getWeights,
    addWeight,
    modifyWeight
}
