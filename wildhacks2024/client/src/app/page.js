"use client";

import Image from "next/image";
import styles from "./page.module.css";
import io from 'socket.io-client'
import {useEffect, useState} from 'react';

const socket = io.connect("http://localhost:3001")

function Home() {
  //* FEATURE: allow clients to join rooms with unique timers
  const [room, setRoom] = useState("");
  
  //* FEATURE: send messages between clients
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  }

  const sendMessage = () => {
    //console.log('Message sent');
    socket.emit('send_message', {message, room });
  };

  //* PUTTING FEATURES IN ACTION
  useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageReceived(data.message);
  });
  }, [socket])
  return (
    <main>
      
      <div className="bearly-title">
        <p>
         Bearly -- A Group Pomodoro Timer 
        </p>
      </div>
      
      <div>
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />

        <button onClick={joinRoom}> Join Room </button>
      </div>

      <div>
        <input placeholder="send message" onChange={(event) =>{
          setMessage(event.target.value);
        }}
          />
        <button onClick={sendMessage}> Send Message </button>
        <h1> Message:</h1>
        {messageReceived}
      </div>
      
    </main>
  );
}
export default Home;

