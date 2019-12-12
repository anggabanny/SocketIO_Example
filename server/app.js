process.env.NODE_ENV == 'development' ? require('dotenv').config() : ''
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000

io.on('connection',(socket=>{
    console.log(`a user connected!`);
    socket.on("slideChange", (slide=>{
        console.log(`slide change`);
        io.emit("slide", slide)
    }))
}))

server.listen(PORT, (_=>{ console.log(`listening to port`, PORT) }))