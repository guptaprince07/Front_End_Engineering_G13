import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;