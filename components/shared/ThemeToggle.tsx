"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="relative w-9 h-9 rounded-lg border border-border hover:border-primary/40 bg-surface hover:bg-surface-light flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-300"
      aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
}
