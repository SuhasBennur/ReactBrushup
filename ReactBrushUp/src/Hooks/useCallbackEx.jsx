import React, { useState, useCallback } from "react";
//
function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []); // memoized function

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child onClick={handleClick} />
    </div>
  );
}
