const mongoose = require('mongoose');
const { ChatclassDict } = require('./schema')

const ChatClassmodel = mongoose.model('chatclass', ChatclassDict)
class Chatclassmodel {

    // 聊天室创建

    async classchatcreat(chatclassnames) {
        let Chatclass = new ChatClassmodel({
            chatclass_names: chatclassnames,
        });
        // 判断聊天室是否存在
        let chatclasscount = await this.classchatCount(chatclassnames)
        if (chatclasscount < 1) {
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

    // 删除聊天室

    classchatremove(chatclassnames) {
        ChatClassmodel.remove({ chatclass_names: chatclassnames }, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
        })
    }

    // 查询
    classchatFind(chatclassnames) {

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



module.exports = { Chatclassmodel }



