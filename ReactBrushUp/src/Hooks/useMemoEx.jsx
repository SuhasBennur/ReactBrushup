import React, { useState, useMemo } from "react";
//Memoize expensive calculations.
function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return num * 2; // imagine this is expensive
  }, [num]);

  return <p>Result: {result}</p>;
}

export default function Appsz() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveCalculation num={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
