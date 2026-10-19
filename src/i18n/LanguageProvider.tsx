import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DICTIONARIES, type Lang, type TranslationKey } from './translations'

const STORAGE_KEY = 'chunav-lang'

type Vars = Record<string, string | number>

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Interface string for the active language, with {placeholders} filled from vars. */
  t: (key: TranslationKey, vars?: Vars) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStored(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'hi'
  } catch {
    return 'hi'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable; the choice still applies for this visit
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const value = useMemo<LanguageContextValue>(() => {
    const dict = DICTIONARIES[lang]
    return {
      lang,
      setLang,
      t: (key, vars) => {
        const s = dict[key]
        return vars ? s.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`)) : s
      },
    }
  }, [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
