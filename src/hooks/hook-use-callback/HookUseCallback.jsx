import { useState, useCallback } from "react";
import { MemoizedButton } from "./components/MemoizedButton";

export function HookUseCallback() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
    <h1>useCallback</h1>
    <div>
      <p>Count: {count}</p>
      <MemoizedButton handleClick={handleClick} />
    </div>
    </>
  );
}
