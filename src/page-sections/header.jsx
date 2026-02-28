"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NavButton from "@/ui/nav-button";
import { navOptions } from "@/utils/constants";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      if (target.closest("nav") || target.closest("#nav-button")) return;

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Touch handlers para swipe gesture
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && isOpen) {
      setIsOpen(false);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="z-10 sticky top-0 bg-background">
        <nav className="flex mx-auto justify-between px-4 lg:px-0 py-2 items-center text-primary-txt relative">
          <Link href="/" aria-label="Inicio">
            <Image
              src="/logo-cd-header.webp"
              alt="Logo Codeluxe"
              className="size-12 object-cover min-w-12 rounded-full active:scale-90 hover:saturate-200 transition-all duration-300 cursor-pointer hover:[filter:drop-shadow(0_0_50px_#83cee555)]"
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

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay active lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <aside
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full pointer-events-none"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between p-4 border-b border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary-txt font-medium">Menú</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
              aria-label="Cerrar menú"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contenido del menú */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="max-w-sm mx-auto">
              {navOptions.map((option, index) => (
                <Link
                  key={option.title}
                  href={option.href}
                  aria-label={option.title}
                  title={option.title}
                  className={`group flex items-center gap-4 px-4 py-4 mx-2 mb-2 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 hover:from-primary/10 hover:to-transparent transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 mobile-nav-item ${
                    index === 0 ? "mt-0" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <option.icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-primary-txt font-medium transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                      {option.title}
                    </span>
                    <span className="block text-secondary-txt text-sm mt-1 opacity-70">
                      Navegar a {option.title.toLowerCase()}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer del menú móvil */}
          <div className="p-4 border-t border-primary/20 bg-gradient-to-t from-black/50 to-transparent">
            <div className="flex items-center justify-center gap-3 text-xs text-secondary-txt swipe-hint">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span>Desliza para cerrar</span>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
