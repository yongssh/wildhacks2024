const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");

const cors = require("cors") 

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "https://bearly.study",

        //update to frontend domain name
        methods:["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
      });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});

//User Connected: 48BvFCeVv_uZN8YgAAAX

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});