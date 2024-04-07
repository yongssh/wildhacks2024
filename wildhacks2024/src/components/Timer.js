import React, {useState, useEffect} from "react";
//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/

export default function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const startCountdown = () => {
        let inputMinutes = parseInt(userInput, 10);

        if (inputMinutes <= 0 || inputMinutes > 120) {
            setDisplayMessage(true);

        } else {
            setDisplayMessage(false);
            setMinutes(inputMinutes); 
            setSeconds(0);
        }
        

    };

    useEffect(() => {
        let interval = setInterval(() => {

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } 
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds, minutes, displayMessage]); 

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="timer">
            <input type="number" value={userInput} onChange={handleInputChange} />
            <button className="startBtn" onClick={startCountdown}>Start Countdown</button>
            <div className="message">
                {displayMessage && <div>please input a whole number between 1 and 120 </div> }
            </div>

            <div className="timer">
                {timerMinutes}:{timerSeconds}
            </div>

        </div>
    );
    
}
