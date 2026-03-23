"use client";

import { useLayoutEffect, useRef } from "react";
import { annotate } from "rough-notation";

export function DualHighlight({ first = "Build", second = "beautiful" }) {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useLayoutEffect(() => {
    if (!firstRef.current || !secondRef.current) return;

    const underline = annotate(firstRef.current, {
      type: "underline",
      color: "#60a5fa",
      strokeWidth: 2,
      animationDuration: 600,
    });

    const highlight = annotate(secondRef.current, {
      type: "highlight",
      color: "#fde68a",
      animationDuration: 600,
    });

    // Step 1 → underline first word
    underline.show();

    // Step 2 → after delay, highlight second word
    const timer = setTimeout(() => {
      highlight.show();
    }, 700);

    return () => {
      underline.remove();
      highlight.remove();
      clearTimeout(timer);
    };
  }, []);

  return (
    // <span className="inline-flex gap-2">
    <span className="inline-flex flex-col gap-4">
      <span ref={firstRef}>{first}</span>
      <span
        ref={secondRef}
        className="bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent"
      >
        {second}
      </span>
    </span>
  );
}
