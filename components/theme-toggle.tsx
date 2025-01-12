// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400" />
      ) : (
        <FiMoon className="text-blue-500" />
      )}
    </button>
  );
}
