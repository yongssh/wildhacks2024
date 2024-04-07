// Server-side logic for room-specific timers
const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");

const cors = require("cors") 

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods:["GET", "POST"],
    },
});

const roomTimers = {};

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (room) => {
        socket.join(room);
        // Initialize timer for the room if it doesn't exist
        if (!roomTimers[room]) {
            roomTimers[room] = {
                duration: 0,
                intervalId: null,
            };
        }
        // Send current timer state to the joining user
        socket.emit("timer_update", { remaining: roomTimers[room].duration });
    });

    socket.on("start_timer", ({ room, duration }) => {
        // Start or update timer for the room
        roomTimers[room].duration = duration;
        clearInterval(roomTimers[room].intervalId);
        roomTimers[room].intervalId = setInterval(() => {
            roomTimers[room].duration--;
            if (roomTimers[room].duration <= 0) {
                clearInterval(roomTimers[room].intervalId);
            }
            // Broadcast timer updates to all users in the room
            io.to(room).emit("timer_update", { remaining: roomTimers[room].duration });
        }, 1000);
    });

    socket.on("pause_timer", (room) => {
        // Stop the timer for the room
        clearInterval(roomTimers[room].intervalId);
    });

    socket.on("disconnect", () => {
        console.log(`User Disconnected: ${socket.id}`);
    });
    
    
    socket.on("clear_chat", () => {
          io.emit("chat_cleared");
        });


      
});
