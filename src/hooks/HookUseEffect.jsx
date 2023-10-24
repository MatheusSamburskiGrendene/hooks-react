import { useEffect, useState } from "react";

export function HookUseEffect() {
  const [count, setCount] = useState(0);
  const [clicksOnTheCounter, setClicksOnTheCounter] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      setClicksOnTheCounter(clicksOnTheCounter + 1);
    }
  }, [count]);

  return (
    <>
      <h1>useEffect</h1>
      <div>
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <h3>Você clicou no contador {clicksOnTheCounter} vezes.</h3>
    </>
  );
}
