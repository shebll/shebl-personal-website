"use client";

import { useEffect, useRef, useState } from "react";

function useScrollingUp() {
  const [scrollingUp, setScrollingUp] = useState(true); // Set the initial value to true
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY.current) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollingUp, setScrollingUp };
}

export default useScrollingUp;
