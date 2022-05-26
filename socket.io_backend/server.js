const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const Realtime = require('./src/config/realtime.js')
const config = require('./src/config')
const Routers = require('./src/routers')

const app = express();
const server = http.createServer(app);
app.use(cors())
app.use(cookieParser())
app.use(express.json())

const io = new Server(server,{
    cors:{
        origin: "*",
        methods: ["GET","POST"]
    }
});

Realtime(io)
Routers(app)

const PORT = config.port
const URI = config.DB.uri

mongoose.connect(URI)
  .then(()=>{
    console.log("Database is connecting !!!")
  })
  .catch((err)=>{
    console.log("err: ",err)
  })


server.listen(PORT, () => {
    console.log('listening on *: ',PORT);
});

