import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const CountdownTimer = ({inSeconds, handleStopTimer}) => {
  const [seconds, setSeconds] = useState(inSeconds);
  if (seconds === 0) {
    handleStopTimer();
  }

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds}`;
    // return `${hours}:${minutes}:${remainingSeconds}`;
  };

  return <Text>{formatTime(seconds)}</Text>;
};

export default CountdownTimer;
