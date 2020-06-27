const mongoose = require('mongoose');
const { ChatClass } = require('../../config/schema')

const ChatClassmodel = mongoose.model('chatclass', ChatClass)
class Chatclassmodel {
    //  let chatclass_names;
    // constructor(chatclassnames) {
    //     this.chatclassnames = chatclassnames
    // }
    async classchatcreat(chatclassnames) {
        let Chatclass = new ChatClassmodel({
            chatclass_names: chatclassnames,
        });
        let a = await this.classchatCount(chatclassnames)
        console.log(a)
        if (a < 1) {
            Chatclass.save().then(() => {
                console.log('success-save');
            }).catch(() => {
                console.log('error-save');
            });
        }
    }

    classchatCount(chatclassnames) {
        return new Promise((resolve, reject) => {
            ChatClassmodel.countDocuments({ chatclass_names: chatclassnames }, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    resolve(res)
                }
            })
        })

    }

    classchatremove(chatclassnames) {
        ChatClassmodel.remove({ chatclass_names: chatclassnames }, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
        })
    }

    classchatFind(chatclassnames) {
        console.log(chatclassnames)
        return new Promise((resolve, reject) => {
            ChatClassmodel.find({ chatclass_names: chatclassnames }, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                   
                    resolve(res)
                }
            })
        })

    }

}

//var a = new Chatclassmodel()
// async function ac() {
//     let c = await a.classchatCount(["12", "3"])
//     console.log(await a.classchatCount(["12", "3"]) + await a.classchatCount(["3", "12"]))
// }
// ac()

// a.classchatcreat(["12", "3"])
//a.classchatremove(["1", "2"])

module.exports = { Chatclassmodel }



