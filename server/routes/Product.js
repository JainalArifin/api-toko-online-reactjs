const express = require('express')
const route = express.Router()
const productController = require('../controller/productController')

route.get('/', productController.all)
route.get('/:id', productController.findById)
route.get('/title/:title', productController.findByTitle)
route.post('/', productController.create)
route.put('/:id', productController.update)
route.delete('/:id', productController.delete)

module.exports = route