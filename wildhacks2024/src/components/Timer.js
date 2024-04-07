import React, {useState, useEffect} from "react";
//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/

export default function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [pauseTimer, setPauseTimer] = useState(false);
    const [displayResume, setDisplayResume] = useState(false);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const startCountdown = () => {
        let inputMinutes = parseInt(userInput, 10);

        if (pauseTimer) {
            setPauseTimer(false);
            setDisplayResume(false);

        }

        if (inputMinutes <= 0 || inputMinutes > 120) {
            setDisplayMessage(true);

        } else {
            setDisplayMessage(false);

            setMinutes(inputMinutes); 
            setSeconds(0);
        }
        

    };

    const stopCountdown = () => {
        setPauseTimer(true);
        setDisplayResume(true);
        
    }

    const resumeCountdown = () => {
        setPauseTimer(false);
        setDisplayResume(false);
        
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (!pauseTimer) {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } 
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds, minutes, displayMessage, pauseTimer]); 

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="timer">
            <input type="number" value={userInput} onChange={handleInputChange} />
            <button className="startBtn" onClick={startCountdown}>Set Time</button>
            {displayResume && <button className="resumeBtn" onClick={resumeCountdown}>Resume</button>}
            <button className="pauseBtn" onClick={stopCountdown}>Stop</button>
            <div className="message">
                {displayMessage && <div>please input a whole number between 1 and 120 </div> }
            </div>

            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>

        </div>
    );
    
}
