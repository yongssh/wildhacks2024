"use client";

import Image from "next/image";
import styles from "./page.module.css";
import io from 'socket.io-client'
import {useEffect, useState} from 'react';

const socket = io.connect("http://localhost:3001")

function Home() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    //console.log('Message sent');
    socket.emit('send_message', {message });
  };

  
  useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageReceived(data.message);
  });
  }, [socket])
  return (
    <main>
      <div>
        <p>
         Bearly -- A Group Pomodoro Timer 
        </p>
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

