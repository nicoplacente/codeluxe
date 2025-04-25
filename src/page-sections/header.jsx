"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavButton from "@/ui/nav-button";
import { navOptions } from "@/utils/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const headerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (headerRef.current && !headerRef.current.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <header className="z-10 sticky top-0 bg-background">
      <nav className="flex mx-auto justify-between px-8 py-2 items-center text-primary-txt max-w-4xl relative">
        <Link href="/" aria-label="Inicio">
          <img
            src="/logo-codeluxe.webp"
            alt="Logo Codeluxe"
            className="size-12 object-cover min-w-12 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
          />
        </Link>

        <NavButton isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />

        {isOpen && (
          <div className="flex flex-col gap-4 w-full left-0 absolute top-[65px] bg-secondary p-6 rounded-b-xl shadow-lg z-20 sm:hidden">
            {navOptions.map((option) => (
              <a
                key={option.title}
                href={option.href}
                aria-label={option.title}
                title={option.title}
                className="text-primary-txt hover:bg-primary/10 px-4 py-2 flex items-center gap-2 rounded-xl transition"
                onClick={() => setIsOpen(false)}
              >
                <option.icon /> {option.title}
              </a>
            ))}
          </div>
        )}

        <div className="hidden gap-2 sm:flex">
          {navOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              aria-label={option.title}
              title={option.title}
              className="text-primary-txt hover:shadow-inner hover:shadow-primary/50 hover:scale-110 p-2 rounded-xl transition"
            >
              <option.icon />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
