import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

const Timer = ({ room }) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [userInput, setUserInput] = useState(''); 
    const [pauseTimer, setPauseTimer] = useState(false);
    const [displayResume, setDisplayResume] = useState(false);

    const socket = io.connect("http://localhost:3001");

    const handleStartTimer = () => {
        if (userInput > 0 && userInput <= 120) {
            socket.emit("start_timer", { room, duration: userInput * 60 }); // Convert minutes to seconds
            setUserInput('');
            setDisplayMessage(false);
        } else {
            setDisplayMessage(true);
        }
    };
    
    const handlePauseTimer = () => {
        socket.emit("pause_timer", { room });
    };

    useEffect(() => {
        socket.on("timer_update", (data) => {
            const minutes = Math.floor(data.remaining / 60);
            const seconds = data.remaining % 60;
            setMinutes(minutes);
            setSeconds(seconds);
        });

        return () => socket.off("timer_update");
    }, [room]); // Include room in the dependency array to re-subscribe when room changes

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="timer">
            <input type="number" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button className="startBtn" onClick={handleStartTimer}>Set Time</button>
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
};

export default Timer;
