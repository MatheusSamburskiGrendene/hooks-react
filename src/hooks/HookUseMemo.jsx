import { useState, useMemo } from "react";

export function HookUseMemo() {
  const [value, setValue] = useState(2);

  const result = useMemo(() => {
    console.log("calculando...");
    return Math.pow(value, 2);
  }, [value]);

  return (
    <>
      <h1>useMemo</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <p>Resultado: {result}</p>
      </div>
    </>
  );
}
