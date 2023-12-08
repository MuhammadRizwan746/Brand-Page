import React, { useRef, useState } from 'react';

const CountdownTimer = () => {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(10);

  const startTimer = () => {
    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          // Stop the timer when it reaches 0
          clearInterval(timerRef.current);
          // timerRef.current = null;
          return 0;
        } else {
          // Decrement the seconds
          return prevSeconds - 1;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    // Check if the timer is running before trying to stop it
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    // Stop the timer and reset the seconds
    stopTimer();
    setSeconds(10);
  };

  return (
    <div>
      <h2>Countdown Timer: {seconds} seconds</h2>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default CountdownTimer;
