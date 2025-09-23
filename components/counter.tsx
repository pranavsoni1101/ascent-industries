"use client";

import { animate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from,
  to,
  duration = 3,
  suffix = "",
  className,
}) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  // detect when visible
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    if (inView) {
      const controls = animate(count, to, { duration });
      return () => controls.stop();
    }

    return () => unsubscribe();
  }, [inView, count, to, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};
