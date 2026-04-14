import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  ReactNode,
} from "react";
import { en } from "../locales/en";
import { es } from "../locales/es";
import type { TranslationKey } from "../locales/types";

type Language = "en" | "es";

const LANGUAGES: Language[] = ["en", "es"];

function isLanguage(value: string | null): value is Language {
  return value !== null && LANGUAGES.includes(value as Language);
}

function getStoredLanguage(): Language {
  const saved = localStorage.getItem("language");
  return isLanguage(saved) ? saved : "en";
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);

  useLayoutEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: TranslationKey) => {
    const table = translations[language];
    return table[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
