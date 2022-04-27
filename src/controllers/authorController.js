const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    try {
        let data = req.body
        
        if ( Object.keys(data).length != 0) {
            let savedData = await authorModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST"})
    }
    catch (err) {
        
        res.status(500).send({ msg: "Error", error: err.message })
    }

}



module.exports.createAuthor= createAuthor
