import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={() => setCount(count + 1)}>INCREMENT</button>
    <button onClick={() => setCount(count-1)}>DECREMENT</button>
    <h4>The count is updating here: {count}</h4>
    </>
  );
};

export default Counter;
