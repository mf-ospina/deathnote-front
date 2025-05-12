import React, { useState, useEffect } from 'react';

interface TimerProps {
  time: number;
  onTimeEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ time, onTimeEnd }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    if (seconds === 0) {
      onTimeEnd();
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, onTimeEnd]);

  return <div>Tiempo restante: {seconds} segundos</div>;
};

export default Timer;
