import { useLanguage } from '../i18n/LanguageProvider'
import type { Lang } from '../i18n/translations'

const OPTIONS: { id: Lang; label: string; short: string }[] = [
  { id: 'hi', label: 'हिन्दी', short: 'हि' },
  { id: 'en', label: 'English', short: 'EN' },
]

/** Pill-shaped हिन्दी / English switch. Labels are always written in their own language. */
export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div role="radiogroup" aria-label={t('util.language')} className="inline-flex rounded-full bg-surface-2 p-1">
      {OPTIONS.map((o) => {
        const on = o.id === lang
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={on}
            lang={o.id}
            onClick={() => setLang(o.id)}
            className={`min-h-8 rounded-full text-sm font-semibold transition-colors duration-150 ${compact ? 'px-2.5' : 'px-3'} ${
              on ? 'bg-surface text-accent shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            {compact ? o.short : o.label}
            {compact && <span className="sr-only"> ({o.label})</span>}
          </button>
        )
      })}
    </div>
  )
}
