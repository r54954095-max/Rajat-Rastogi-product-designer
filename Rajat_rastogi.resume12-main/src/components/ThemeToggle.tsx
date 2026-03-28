"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return <div className="w-20 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-20 h-10 rounded-full p-1 overflow-hidden"
      style={{
        backgroundColor: isDark ? "#4A4A4A" : "#5BA0E8",
        transition: "background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      aria-label="Toggle theme"
    >
      <div
        className="absolute top-1 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateX(${isDark ? "44px" : "0px"})`,
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          className="relative w-8 h-8"
          style={{
            transform: `rotate(${isDark ? "360deg" : "0deg"})`,
            transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/Ellipse-119-1768739823636.png?width=8000&height=8000&resize=contain"
            alt="Light mode"
            width={32}
            height={32}
            className="absolute inset-0 w-8 h-8 object-cover"
            style={{
              opacity: isDark ? 0 : 1,
              transform: `scale(${isDark ? 0.5 : 1})`,
              transition: "opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/Group-5190-1768739823636.png?width=8000&height=8000&resize=contain"
            alt="Dark mode"
            width={32}
            height={32}
            className="absolute inset-0 w-8 h-8 object-cover"
            style={{
              opacity: isDark ? 1 : 0,
              transform: `scale(${isDark ? 1 : 0.5})`,
              transition: "opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        </div>
      </div>
    </button>
  );
}
