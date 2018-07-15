const Model = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = {
    register: (req, res) => {
        let bcrypt = require('bcryptjs');
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(`req.body.password`, salt);
        let adminNew = new Model({
            ussername: req.body.ussername,
            password: hash,
            rule: req.body.rule
        })
        adminNew.save()
        .then((dataAdmin)=>{
            res.send(dataAdmin)
        })
        .catch((err)=>{
            res.send(err)
        })
    },
    login: (req, res) => {
        Model.findOne({
            ussername: req.body.ussername
        })
        .then((dataUsername) => {
            if(dataUsername == null){
                res.send('usser belum terdaftar')
            } else {
                let token = jwt.sign({
                    id: dataUsername._id,
                    ussername: dataUsername.ussername,
                    password: dataUsername.password,
                    rule: dataUsername.rule
                }, process.env.SECRET)

                var test = {...dataUsername}
                delete test._doc.password
                delete test._doc.__v
                // console.log(test, ' <---- userData')
                res.send({
                    token:token,
                    userData: test._doc
                })
            }
        })
        .catch((err)=> {
            res.send(err)
        })
    },
    all: (req, res) => {
        Model.find()
        .then((dataAdmin) => {
            res.send(dataAdmin)
        })
        .catch((err) => {
            res.send(err)
        })
    }
}