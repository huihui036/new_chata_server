const mongoose=require('mongoose');
const {newsDict} = require('../../config/schema')

var News=mongoose.model('news',newsDict)



module.exports = {News}