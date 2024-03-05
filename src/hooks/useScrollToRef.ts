import { useEffect } from "react";

export function useScrollToRef(ref: any) {
  useEffect(() => {
    const scrollToRef = (ref: any) => ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

    scrollToRef(ref);
  }, [ref]);
}
