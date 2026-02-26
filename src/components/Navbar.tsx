import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          DON MANUEL
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-border-main pl-8">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              {language === "en" ? "ES" : "EN"}
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="p-2 text-muted hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              {language === "en" ? "ES" : "EN"}
            </span>
          </button>
          <ThemeToggle />
          <button
            className="text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass overflow-hidden md:hidden shadow-xl"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold tracking-tight hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
