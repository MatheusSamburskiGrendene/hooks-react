import { useState } from "react";

export function HookUseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useState</h1>
      <div>
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
}
