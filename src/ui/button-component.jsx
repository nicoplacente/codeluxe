"use client";
import Link from "next/link";

import { useRef } from "react";

export default function ButtonComponent({ txt }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <Link
      ref={btnRef}
      aria-label="Solicitá una propuesta"
      href="/propuesta"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-6 w-fit text-primary-txt py-3 rounded-xl bg-secondary cursor-pointer font-light transition-all duration-200 group"
    >
      <span className="relative z-10">
        {`${txt ?? "Solicitá una propuesta"}`}
      </span>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), #83cee577, transparent 40%)`,
        }}
      />
    </Link>
  );
}
