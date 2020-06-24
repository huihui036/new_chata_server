const WebSocket = require('ws');
const { News } = require("../app/module/news")

const wss = new WebSocket.Server({ port: 3003, });

wss.on('connection', function connection(ws) {

    console.log("进入")
    // console.log(scokets)
    ws.on('message', function incoming(message) {

        console.log('received: %s', message);

        let messagedata = JSON.parse(message)
        if (messagedata.name) {
            ws['uid'] = messagedata.id
        }
    
        boardcast(messagedata.news_receiveId, wss.clients,message)
    });

});

function boardcast(receiveId, clients,message){
    clients.forEach(element => {
        // var newsdata = new News(messagedata);
// conns['' + 1 + ''] = ws;

// newsdata.save().then(() => {
//     console.log('success-save');
// }).catch(() => {
//     console.log('error-save');
// });
        if(receiveId.includes(`${element["uid"]}`)){
            eement.send(message)
        }else{
           console.log('接收方不存在')
        }

    });
}


