"use client";
import { createContext, useContext, ReactNode } from "react";
import en from "@/i18n/messages/en.json";
import vi from "@/i18n/messages/vi.json";
import ja from "@/i18n/messages/ja.json";

type Messages = typeof en;

const messagesMap: Record<string, Messages> = { en, vi, ja };

const I18nContext = createContext<{ locale: string; messages: Messages }>({
  locale: "vi",
  messages: vi,
});

export function I18nProvider({ locale, children }: { locale: string; children: ReactNode }) {
  const messages = messagesMap[locale] || vi;
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const { messages } = useContext(I18nContext);
  return (key: string) => {
    const ns = namespace ? (messages as any)[namespace] : messages;
    if (!ns) return key;
    return (ns as any)[key] || key;
  };
}

export function useLocale() {
  return useContext(I18nContext).locale;
}
