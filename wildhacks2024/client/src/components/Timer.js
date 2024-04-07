import React, {useState, useEffect} from "react";
//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/

export default function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [userInput, setUserInput] = useState(''); 
    const [pauseTimer, setPauseTimer] = useState(false);
    const [displayResume, setDisplayResume] = useState(false);

    const handleStartTimer = (duration) => {
        // Emit an event to start the timer with the specified duration
        socket.emit("start_timer", { room: yourRoomId, duration });
      };
      
    const handlePauseTimer = () => {
        // Emit an event to pause the timer
        socket.emit("pause_timer", { room: yourRoomId });
    };

    useEffect(() => {
        socket.on("timer_update", (data) => {
          // Assuming data contains the remaining time in seconds
          const minutes = Math.floor(data.remaining / 60);
          const seconds = data.remaining % 60;
          setMinutes(minutes);
          setSeconds(seconds);
        });
      
        // Cleanup this effect on component unmount
        return () => socket.off("timer_update");
      }, []); // Empty dependency array means this runs once on mount
      

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="timer">
            <input type="number" value={userInput} onChange={handleStartTimer} />
            <button className="startBtn" onClick={startCountdown}>Set Time</button>
            {displayResume && <button className="resumeBtn" onClick={resumeCountdown}>Resume</button>}
            <button className="pauseBtn" onClick={handlePauseTimer}>Stop</button>
            <div className="message">
                {displayMessage && <div>please input a whole number between 1 and 120 </div> }
            </div>

            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>

        </div>
    );
    
}