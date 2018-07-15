const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var productSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product