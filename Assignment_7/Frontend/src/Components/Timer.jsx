import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default Timer;
