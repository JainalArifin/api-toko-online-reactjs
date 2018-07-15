const Model = require('../models/Product')

module.exports = {
    all: (req, res, next) =>{
        Model.find({})
        .then((result) => {
            res.send(result)
        })
        .catch(next)
        // res.send('hello')
    },
    findById: (req, res, next) => {
        Model.findOne({ _id:req.params.id})
        .then((result) => {
            res.send(result)
        })
        .catch(next)
    },
    findByTitle: (req, res, next) => {
        Model.find({ title:req.params.title})
        .then((result) => {
            res.send(result)
        })
        .catch(next)
    },
    create: (req, res, next) => {
        let newModel = new Model({
            image: req.body.image,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        })
        newModel.save()
        .then((dataProduct)=>{
            res.send(dataProduct)
        })
        .catch(next)
    },
    update: (req, res, next) =>{
        Model.findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(() =>{
            Model.findOne({ _id: req.params.id})
            .then((dataProduct) => {
                res.send(dataProduct)
            })
            .catch(next)
        })
        .catch(next)
    },
    delete: (req, res, next) => {
        Model.findOneAndDelete({ _id: req.params.id })
        .then(()=>{
            res.send(' delete successful')
        })
        .catch(next)
    }
}