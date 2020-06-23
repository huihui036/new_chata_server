const mongoose=require('mongoose');
const {filesDict} = require('../../config/dict')



const Filesmodel=mongoose.model('emjio',filesDict)
let  Files=new  Filesmodel({
    files_id:1,
    files_names:"string",
    files_url:"String",
    files_uploadUser:"String",
    files_uploadTime:"String",
    files_stateCode:1,
    files_hash:"String",
    files_thumbnailUrl:"String" // 缩略图
});
 
//用save保存
Files.save().then(()=>{
    console.log('success-save');
}).catch(()=>{
    console.log('error-save');
});