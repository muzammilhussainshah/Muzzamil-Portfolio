import { useEffect, useState } from "react";

export type iBreakpoints = "sm" | "md" | "lg";

export const Breakpoints: { [key in iBreakpoints]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<iBreakpoints>("md");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < Breakpoints.sm) {
        setBreakpoint("sm");
      } else if (
        window.innerWidth >= Breakpoints.sm &&
        window.innerWidth < Breakpoints.lg
      ) {
        setBreakpoint("md");
      } else {
        setBreakpoint("lg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
