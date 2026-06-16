"use client";

import { useEffect, useRef } from "react";

type Props = {
  onVisible: () => void;
};

export default function LoadMoreTrigger({ onVisible }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onVisible();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onVisible]);

  return <div ref={ref} className="h-10" />;
}
