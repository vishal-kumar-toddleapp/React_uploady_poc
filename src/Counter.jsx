import React, { useState, useImperativeHandle } from "react";

const Counter = (props, ref) => {
  const [count, setCount] = useState(0);
  console.log("ref", ref);
  const reset = () => {
    setCount(0);
  };
  useImperativeHandle(ref, () => ({ reset }));
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default React.forwardRef(Counter);
