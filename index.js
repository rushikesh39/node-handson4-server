const express=require("express")
const cors=require("cors")
const bodyParser = require('body-parser');
const  route  = require("./routes/routes")


const app=express()
app.use(cors())

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({ 
    extended: true 
 }));

app.use('/user',route)

app.listen('5000',()=>{
    console.log("server is running at 5000")
})
// --------------------------------------

// const express=require("express")
// const socket=require("socket.io")
// // const cors=require("cors")
// const app =express();

// const server=app.listen(5000,()=>{
//     console.log("server started at port 5000")
// })

// const io=socket(server,{
//     cors:{
//         origin:"*",
//     }
// })
// io.on("connection",(socketClient)=>{
//     console.log(socketClient.id)
//     socketClient.on("MESSAGE",(clientdata)=>{
//         console.log(clientdata)
//         socketClient.emit("MESSAGE","server in sending message")
//     })
//     socketClient.on('BROADCAST',(clientBroadcast)=>{
//         console.log(clientBroadcast)
//         io.emit("sendBroadcastmsg","player 1 has won the match")
//     })
//     socketClient.on("room",(ClientRoom)=>{
//         console.log(ClientRoom)
//         socketClient.join(ClientRoom)
//         socketClient.emit("JoinSuccess",`member${ClientRoom}`)
//         socketClient.on("room",(clientdata)=>{
//             io.to(ClientRoom).emit("room","room msg")
//         })
//         socketClient.on("groupChat",(data)=>{
//             io.to(ClientRoom).emit("groupChat","hello everyon")
//         })
//     })
// })
// app.get("/",(req,res)=>{
//     res.send("Home page")
// })