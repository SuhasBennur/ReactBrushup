import { useState } from "react";

function useStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h2>State Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} >Increment</button>
      <button onClick={() => setCount(count - 1)}style={{marginLeft:'10px'}}>Decrement</button>
      <button onClick={() => setCount(0)} style={{marginLeft:'10px'}}>Reset</button>
      
      </>
    )
}
export default useStateCounter;