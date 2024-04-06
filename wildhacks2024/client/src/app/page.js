import Image from "next/image";
import styles from "./page.module.css";
import io from 'socket.io-client'


const socket = io.connect("http://localhost:3001")

function Home() {

  const sendMessage = () => {
    socket.emit('message', 'Hello from client');
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          WildHacks 2024 Timer Project
        </p>
      </div>
      <div className="buttonTest">
        <input placeholder="send message"/>
        <button onClick={sendMessage}> Send Message </button>
      </div>
      
    </main>
  );
}
export default Home;

