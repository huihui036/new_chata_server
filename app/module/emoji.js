const mongoose=require('mongoose');
const {emjioDict} = require('../../config/dict')


const Emjiomodel=mongoose.model('emjio',emjioDict)
let emjios=new Emjiomodel({

    emjio_id:1,
    emjio_content:"String",
    emjio_fielsId:1,
 
});
 
//用save保存
emjios.save().then(()=>{
    console.log('success-save');
}).catch(()=>{
    console.log('error-save');
});