import React, { useState } from "react";
//Manage local component state.
export default function Counter() {
  const [count, setCount] = useState(0); // local state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
