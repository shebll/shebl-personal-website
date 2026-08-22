"use client";
import React, { useCallback, useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

type theme = "dark" | "light" | "";
function ThemeSwitch() {
  const [theme, setTheme] = useState<theme>("");
  const [open, setOpen] = useState<boolean>(false);

  const applyTheme = (theme: "dark" | "light") => {
    setTheme(theme);
    window.localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    applyTheme(e.matches ? "dark" : "light");
  }, []);

  useEffect(() => {
    const themeFromLocal = window.localStorage.getItem("theme") as theme | null;
    if (themeFromLocal) {
      applyTheme(themeFromLocal === "dark" ? "dark" : "light");
    } else {
      const matches = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(matches.matches ? "dark" : "light");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [handleSystemThemeChange]);

  const ThemeSwitchHandle = (theme: string) => {
    if (theme === "light") {
      applyTheme("light");
    } else if (theme === "system") {
      const matches = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(matches.matches ? "dark" : "light");
    } else {
      applyTheme("dark");
    }
    setOpen(false);
  };

  return (
    <div className="z-[60] fixed bottom-8 right-10 transition-all">
      <div
        className={`absolute ${
          open
            ? "bottom-[110%] right-[0%] visible opacity-100"
            : "bottom-[150%] right-[0%]  invisible opacity-0"
        }  right-[0%] transition-all border-[1.4px] border-black/40 
      p-2 rounded-xl dark:border-gray-200 flex flex-col gap-1 text-start `}
      >
        <p
          className="px-4 py-1 rounded-md cursor-pointer hover:bg-gray-300/10"
          onClick={() => ThemeSwitchHandle("light")}
        >
          Light
        </p>
        <p
          className="px-4 py-1 rounded-md cursor-pointer hover:bg-gray-300/10"
          onClick={() => ThemeSwitchHandle("dark")}
        >
          Dark
        </p>
        <p
          className="px-4 py-1 rounded-md cursor-pointer hover:bg-gray-300/10"
          onClick={() => ThemeSwitchHandle("system")}
        >
          System
        </p>
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="border-[1.4px] border-black/40 
      p-2 rounded-xl dark:border-gray-200"
      >
        {theme === "" ? (
          ""
        ) : theme === "light" ? (
          <CiLight size={23} />
        ) : (
          <MdDarkMode size={23} />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
