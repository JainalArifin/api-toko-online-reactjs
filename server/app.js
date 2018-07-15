const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// routes
const product = require('./routes/Product')
const user = require('./routes/User')

//conection to mongoose
mongoose.connect('mongodb://jainal3:pakuhaji@cluster0-shard-00-00-1w09b.mongodb.net:27017,cluster0-shard-00-01-1w09b.mongodb.net:27017,cluster0-shard-00-02-1w09b.mongodb.net:27017/toko-online-reactjs?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

// test connection database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('running database')
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// use midleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// midleware for connection to route
app.use('/product', product)
app.use('/user', user)

app.listen(3030, ()=>{
    console.log('listening port: 3001 oke');
})