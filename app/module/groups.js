const mongoose=require('mongoose');

const {Groupdict} = require('../../config/schema')

const Groupmodel=mongoose.model('group',Groupdict)
let Group=new Groupmodel({
    group_name:"mingchen",
    creat_time: "Date.now",
    creat_userId:2,
    administrator_Id:2,
    company:"String",
    member_ID:3,
    introduction:"String",
    notice:"String",
    headportrait:"String",
    type:"String",
    statecode:1001,
});
 
//用save保存
Group.save().then(()=>{
    console.log('success-save');
}).catch(()=>{
    console.log('error-save');
});