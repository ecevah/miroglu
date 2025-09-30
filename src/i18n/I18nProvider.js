"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/i18n/translations";

const I18nContext = createContext({
  lang: "tr",
  t: translations.tr,
  setLang: () => {},
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored && (stored === "tr" || stored === "en")) {
      setLang(stored);
      if (typeof document !== "undefined")
        document.documentElement.lang = stored;
    } else if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang, mounted]);

  const value = useMemo(
    () => ({ lang, t: translations[lang], setLang }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
