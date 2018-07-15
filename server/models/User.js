const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    ussername: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rule: String
})

const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin
