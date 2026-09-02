import { useEffect, useState } from "react";

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsTouch(query.matches);
    const listener = (event: MediaQueryListEvent) => setIsTouch(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return isTouch;
}
