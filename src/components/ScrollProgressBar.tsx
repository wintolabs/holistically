"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let requestId: number;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      if (requestId) return;
      requestId = requestAnimationFrame(() => {
        updateProgress();
        requestId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-pink-600 z-50 transition-transform duration-75 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
