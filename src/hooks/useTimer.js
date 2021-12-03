import { useState, useRef } from "react";
import moment from "moment";

const useTracking = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const countRef = useRef(null);

  const play = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const stop = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatDuration = (timer) => {
    return moment
      .utc(moment.duration(timer, "s").asMilliseconds())
      .format("HH:mm:ss");
  };

  return {
    play,
    pause,
    stop,
    isActive,
    isPaused,
    cronometro: formatDuration(timer),
    timer,
  };
};

export default useTracking;
