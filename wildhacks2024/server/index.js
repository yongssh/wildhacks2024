//! USING THIS FILE IN ORDER TO TRY TO MAKE TIMERS SHARED ACROSS ROOMS
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

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    let timers = {}; // apl ace tos tore timer state by room

    socket.on("join_room", (data) => {
        socket.join(data);
      });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    //! NEW CODE FROM CHAT
    socket.on("start_timer", ({ room, duration }) => {
        // If a timer for the room doesn't exist or has ended, create a new one
        if (!timers[room] || timers[room].remaining <= 0) {
          timers[room] = { duration: duration * 60, remaining: duration * 60 }; // Assuming duration is in minutes
        }
      
        // Emit the current state of the timer immediately
        io.to(room).emit("timer_update", { remaining: timers[room].remaining });
      
        // Start or resume the countdown
        if (!timers[room].interval) {
          timers[room].interval = setInterval(() => {
            if (timers[room].remaining > 0) {
              timers[room].remaining--;
              io.to(room).emit("timer_update", { remaining: timers[room].remaining });
            } else {
              clearInterval(timers[room].interval);
              timers[room].interval = null;
              io.to(room).emit("timer_done");
            }
          }, 1000); // Update every second
        }
      });
      
      // Pause a timer
      socket.on("pause_timer", ({ room }) => {
        if (timers[room] && timers[room].interval) {
          clearInterval(timers[room].interval);
          timers[room].interval = null;
          io.to(room).emit("timer_paused");
        }
      });
    //! END OF NEW CODE FROM CHAT
});

//User Connected: 48BvFCeVv_uZN8YgAAAX

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});