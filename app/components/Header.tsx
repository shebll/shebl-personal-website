"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/context/active-section-context";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/src/data/navigation";
import useScrollingUp from "@/utils/hooks/ScrollingUp";

function Header() {
  const { activeSection, setActiveSection } = useActiveSection();
  const { scrollingUp, setScrollingUp } = useScrollingUp();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu when the Escape key is pressed.
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSelect = (name: (typeof navigationLinks)[number]["name"]) => {
    setActiveSection(name);
    setMenuOpen(false);
  };

  return (
    <header>
      <LazyMotion features={domAnimation}>
        <div
          className={`fixed w-full z-50 flex justify-center transition-all ${
            scrollingUp ? "sm:top-[30px]" : "sm:top-[-100px]"
          }`}
        >
          <m.section
            className="px-1 md:px-7 py-3 flex justify-center items-center rounded-none sm:rounded-full border-white
          bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] overflow-hidden
          dark:border-gray-900 dark:bg-[#0a0a13ba] dark:bg-opacity-80"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            {/* Desktop navigation */}
            <nav className="hidden md:flex gap-4 gap-y-[0.1rem] justify-center flex-wrap">
              {navigationLinks.map((link, index) => (
                <m.div
                  key={link.name}
                  initial={{ y: -100, filter: "blur(3px)" }}
                  animate={{ y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    stiffness: 50,
                    delay: 0.4 + 0.09 * index,
                  }}
                >
                  <Link
                    href={link.hash}
                    onClick={() => handleSelect(link.name)}
                    className={`relative z-10 px-4 py-2 flex justify-center items-center 
                  text-gray-600 hover:text-[#0b0a1d] transition-all font-medium
                    dark:text-gray-200 dark:hover:text-gray-50 rounded-full 
                    ${
                      link.name === activeSection &&
                      "!text-gray-50 hover:!text-gray-50 dark:!text-[#0b0a1d] dark:!hover:text-[#0b0a1d] bg-[#0b0a1d] dark:bg-[#e0e0e0]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </m.div>
              ))}
            </nav>

            {/* Mobile hamburger button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center gap-[5px] p-3 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
            >
              <span
                className={`block h-[2px] w-6 bg-[#0b0a1d] dark:bg-gray-100 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-[#0b0a1d] dark:bg-gray-100 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-[#0b0a1d] dark:bg-gray-100 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </m.section>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-[#090c13]/95 backdrop-blur-md flex flex-col items-center justify-center gap-2"
            >
              <nav className="flex flex-col items-center gap-2 w-full px-8">
                {navigationLinks.map((link, index) => (
                  <m.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.25 }}
                    className="w-full flex justify-center"
                  >
                    <Link
                      href={link.hash}
                      onClick={() => handleSelect(link.name)}
                      className={`w-full max-w-xs text-center px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                        link.name === activeSection
                          ? "bg-[#0b0a1d] text-gray-50 dark:bg-[#e0e0e0] dark:text-[#0b0a1d]"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </m.div>
                ))}
              </nav>
            </m.div>
          )}
        </AnimatePresence>

        {!scrollingUp && (
          <div
            onClick={() => setScrollingUp(true)}
            className={`fixed w-[300px] z-50 left-[50%] translate-x-[-50%] rounded-sm cursor-pointer h-2 dark:bg-gray-300 bg-gray-800 top-[-10px] sm:top-[0px] transition-all`}
          />
        )}
      </LazyMotion>
    </header>
  );
}
export default Header;
