"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavButton from "@/ui/nav-button";
import { navOptions } from "@/utils/constants";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      if (target.closest("nav") || target.closest("#nav-button")) return;

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="z-10 sticky top-0 bg-background">
      <nav className="flex mx-auto justify-between px-4 lg:px-0 py-2 items-center text-primary-txt relative">
        <Link href="/" aria-label="Inicio">
          <Image
            src="/logo-codeluxe.webp"
            alt="Logo Codeluxe"
            className="size-12 object-cover min-w-12 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:[box-shadow:0_0_50px_#83cee555]"
            fetchPriority="high"
            width={48}
            height={48}
            loading="eager"
          />
        </Link>

        <div id="nav-button">
          <NavButton
            isOpen={isOpen}
            toggle={() => setIsOpen((prev) => !prev)}
          />
        </div>

        <aside
          className={`flex flex-col gap-4 w-full left-0 absolute ${
            isOpen ? "top-[65px]" : "-top-[500px]"
          } bg-secondary p-6 rounded-b-xl shadow-lg z-20 lg:hidden transition-all duration-500`}
        >
          {navOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              aria-label={option.title}
              title={option.title}
              className="text-primary-txt hover:bg-primary/10 px-4 py-2 flex items-center gap-2 rounded-xl transition"
              onClick={() => setIsOpen(false)}
            >
              <option.icon /> {option.title}
            </Link>
          ))}
        </aside>

        <div className="hidden gap-2 lg:flex">
          {navOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              aria-label={option.title}
              className="
                text-primary-txt 
                relative 
                p-2 
                transition-colors 
                duration-300
                hover:text-primary 
                after:content-[''] 
                after:absolute 
                after:bottom-0 
                after:left-0 
                after:w-full 
                after:h-[2px] 
                after:bg-primary 
                after:scale-x-0 
                hover:after:scale-x-100 
                after:transition-transform 
                after:duration-300 
                after:ease-in-out
              "
            >
              {option.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
