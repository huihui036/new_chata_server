const WebSocket = require('ws');
const { News } = require("../app/module/news")

const wss = new WebSocket.Server({ port: 3003 ,});


var scokets={}
var all =[]
let user={};
wss.on('connection', function connection(ws) {
    console.log("进入")
    all.push(ws)
   
    console.log(scokets)
  //提取我是谁,这部分代码只有第一次连接的时候运行,如果后面连接的m值相同,前面的连接会被覆盖身份
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        let messagedata = JSON.parse(message)
        console.log(messagedata.news_receiveId)
        let newsdata = new News(messagedata);
        
        newsdata.save().then(() => {
            console.log('success-save');
        }).catch(() => {
            console.log('error-save');
        });

        messagedata.news_receiveId.forEach(element => {
            scokets[`${element}`] = ws
         

});

all.push(scokets)
all.forEach(element => {
    try {
        element.send(message)
    } catch (error) {
        console.log("不在线")
    }
    
});

console.log(scokets)

       
    });


});