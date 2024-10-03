"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme('light')} className="text-xl cursor-pointer hover:text-amber-500" />
      ) : (
        <MdDarkMode onClick={() => setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-500" />
      )}
    </div>
  );
}
