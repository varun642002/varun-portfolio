import { useEffect, useState } from "react";

function getInitial() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(getInitial);

  useEffect(() => {
    const query = window.matchMedia("(hover: none), (pointer: coarse)");
    const listener = (event: MediaQueryListEvent) => setIsTouch(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return isTouch;
}
