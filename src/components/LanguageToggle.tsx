import { useLanguage } from '../i18n/LanguageProvider'
import type { Lang } from '../i18n/translations'

const OPTIONS: { id: Lang; label: string; short: string }[] = [
  { id: 'hi', label: 'हिन्दी', short: 'हि' },
  { id: 'en', label: 'English', short: 'EN' },
]

/**
 * Pill-shaped हिन्दी / English switch with a sliding thumb. Two equal columns, so the thumb
 * simply slides by its own width. Labels are always written in their own language.
 */
export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage()
  const index = OPTIONS.findIndex((o) => o.id === lang)
  return (
    <div role="radiogroup" aria-label={t('util.language')} className="relative grid grid-cols-2 rounded-full bg-surface-2 p-1">
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-surface shadow-[0_2px_8px_-3px_var(--c-glow)] ring-1 ring-accent/15 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(${index * 100}%)` }}
      />
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
            className={`relative z-10 min-h-8 rounded-full text-center text-sm font-semibold transition-colors duration-200 active:scale-95 ${compact ? 'px-2.5' : 'px-3'} ${
              on ? 'text-accent' : 'text-muted hover:text-ink'
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
