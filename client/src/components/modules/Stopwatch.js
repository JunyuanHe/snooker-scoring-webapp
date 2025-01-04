import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [ms, setMs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("tick");
      setTime((oldTime) => oldTime + 1);
    }, 1000);
    // const timer = setInterval(() => {
    //   setMs((oldMs) => oldMs + 1)
    // }, 1);
    return () => clearInterval(timer);
  }, []);
  return <>Time: {time}</>;
};

export default Stopwatch;
