const WebSocket = require('ws');
const { NewsModel } = require("../app/module/news")
const { Chatclassmodel } = require("../app/module/chatclass")

const { Groupmodels } = require("../app/module/groups")

const wss = new WebSocket.Server({ port: 3003, });
var Gropudata = {}
//const chatclassmodel = new Chatclassmodel()
const groupmodel = new Groupmodels()

const newsModel = new NewsModel()

wss.on('connection', function connection(ws) {

    console.log("进入")
    // console.log(scokets)
    ws.onopen = function () {
        console.log("开启")
    }
    ///   groupmodel.groupcreatcs()
    // 消息的接收与返回

    ws.on('message', async function incoming(message) {
        console.log('received: %s', message);
        let messagedata = JSON.parse(message)
        //  groupmodel.groupcreatcs()
        // chatclassmodel.classchatcreat(messagedata.news_receiveId)

        if (messagedata.name) {
            ws['uid'] = messagedata.news_receiveId
        }

        boardcast(messagedata.news_receiveId, wss.clients, message)
    });

    // 用户主动关闭聊天
    ws.onclose = async function (e) {
        let removeclass = e.reason.split(',')
        console.log(removeclass)


        let groupdelete = await groupmodel.groupfind(removeclass)
        console.log(groupdelete)
        groupmodel.grouponLineremove(groupdelete[0]._id, 2)

    }
    // ws.on('close', function close() {
    //     console.log('disconnected');
    // });

});

// 消息放回 ASYNC 
async function boardcast(receiveId, clients, message) {
    let messagedata = JSON.parse(message)


    let group = await groupmodel.groupfind(messagedata.news_receiveId)
    if (group && group.length > 0) {
        console.log(group)
        messagedata.news_belongGroupId = group[0]._id
        console.log("messagedata.news_belongGroupId", messagedata)

        let onlinuser = group[0].group_onlineuser.includes(messagedata.news_senderId)

        if (!onlinuser) {
            groupmodel.grouponlieAdd(group[0]._id, messagedata.news_senderId)
        }
        if (messagedata.news_content != null) {
            newsModel.newscreat(messagedata)
        }

    }
    let coutid = await groupmodel.getconte()

    Gropudata.group_creatUserId = messagedata.news_senderId
    Gropudata.group_memberListID = messagedata.news_receiveId
    Gropudata.group_onlineuser = [messagedata.news_senderId]
    Gropudata.group_id = coutid

    let groudata = await groupmodel.groupfind(messagedata.news_receiveId)
    if (groudata && groudata.length < 1) {
        groupmodel.groupcreat(Gropudata)
    }

    clients.forEach(element => {
        let chatonly = ArrayIsEqual(element["uid"], receiveId)
        console.log(chatonly)
        if (chatonly) {
            element.send(message)
        } else {
            console.log('接收方不存在')
        }

    });
}

function ArrayIsEqual(arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    } else {
        console.log(arr1, arr2,)
        if (arr1.length != arr2.length) {
            return false;
        } else {
            for (let i in arr1) {
                //循环遍历对比每个位置的元素
                if (arr1[i] != arr2[i]) {
                    //只要出现一次不相等，那么2个数组就不相等
                    return false;
                }
            }
            return true;
        }
    }
}


