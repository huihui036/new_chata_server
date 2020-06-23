const mongoose=require('mongoose');
const {newsDict} = require('../../config/dict')

const News=mongoose.model('news',newsDict)


module.exports = {News}