const express = require('express')
const route = express.Router()
const UserController = require('../controller/UserController')

route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.get('/', UserController.all)

module.exports = route