import { HookUseEffect } from "./hooks/HookUseEffect";
import { HookUseMemo } from "./hooks/HookUseMemo";
import { HookUseState } from "./hooks/HookUseState";
import { HookUseCallback } from "./hooks/hook-use-callback/HookUseCallback";

export function App() {
  return (
    <>
      <HookUseState />
      <HookUseEffect />
      <HookUseCallback />
      <HookUseMemo />
    </>
  );
}
