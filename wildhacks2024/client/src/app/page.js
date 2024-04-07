"use client";
import Image from "next/image";
import styles from "./page.module.css";
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
import Timer from "../components/Timer original.js";
import Bear1 from "/src/components/bear1.png";
import Bear2 from "/src/components/bear2.png";

const socket = io.connect("https://bearlyserver.onrender.com");
//https://bearlyserver.onrender.com


function Home() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // State to store all messages

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    // Emit the message to the server
    socket.emit('send_message', { message, room });
    // Add the sent message to the messages state
    setMessages(prevMessages => [...prevMessages, { text: message, sent: true }]);
    // Clear the message input
    setMessage("");
  };

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      // Add the received message to the messages state
      setMessages(prevMessages => [...prevMessages, { text: data.message, sent: false }]);
    });
    
    // Clean up the event listener
    return () => {
      socket.off('receive_message');
    };
  }, []);

  return (
    <main>
      <div className="container">
        <div className="bearly-title">
          <h1>Bearly</h1>
          <Image src={Bear2} alt="Bear2" width={80} height={60} />

        </div>
        <div className="subtitle">
            <h2>Hanging in there with friends</h2>
        </div>
    
        <div className="join-room">
          <input
            placeholder="Room Number..."
            onChange={(event) => setRoom(event.target.value)}
          />
          <button onClick={joinRoom}> Join Room </button>
        </div>

        <div  className="send-message">
          <input 
            placeholder="Send message" 
            value={message} 
            onChange={(event) => setMessage(event.target.value)} 
          />
          <button onClick={sendMessage}> Send Message </button>
        </div>
        <div className="Timer">
          <Timer />
        </div>
      </div>
      <div className="MessageDisplay">
        <h3>Messages:</h3>
        {/* Display all the messages */}
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className={msg.sent ? 'sent' : 'received'}>
              {msg.text}
            </li>
          ))}
        </ul>
      </div>

      
    </main>
  );
}

export default Home;