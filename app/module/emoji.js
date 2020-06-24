const mongoose = require('mongoose');
const { emjioDict } = require('../../config/schema')
const fs = require('fs')

const Emjiomodel = mongoose.model('emjio', emjioDict)

async function getdatas() {
    var file = 'static/format.json'
    let jsonData = {}
    await new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                ctx.throw(err)
            } else {
                jsonData = data
                resolve()
            }
        });
    })
    //let jsonDatas = JSON.parse(jsonData)
    return jsonData
}
async function uplouada() {
    var data = await getdatas()
   // console.log(data)
    let emojis = JSON.parse(data)
    Emjiomodel.countDocuments({}, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res)
            if (res < 10) {
                emojis.data.forEach(element => {
                    Emjiomodel.create({
                        emjio_id: element.id,
                        emjio_content: element.emoji,
                        emjio_fielsUrl: element.icon,
                    }, (err, res) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(res)
                        }
                    })
                })
            }
        }
    })
}

function findemoji(){
    return new Promise((resolve, reject)=>{
        Emjiomodel.find({},(err,res)=>{
            if(err)
            {console.log(err)}else{
               resolve(res)
            }
        })
    })

}


uplouada()

module.exports = { Emjiomodel ,findemoji }
