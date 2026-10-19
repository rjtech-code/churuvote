import { Search, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageProvider'

interface Props {
  id: string
  value: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
  /** Focus this field when “/” is pressed outside another input. */
  slashShortcut?: boolean
}

/** Rounded search input with icon, clear button and optional “/” shortcut. */
export function SearchField({ id, value, onChange, label, placeholder, slashShortcut }: Props) {
  const { t } = useLanguage()
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!slashShortcut) return
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement | null)?.tagName ?? ''
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) {
        e.preventDefault()
        ref.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slashShortcut])

  return (
    <div role="search" className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
      <input
        ref={ref}
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        className="h-12 w-full rounded-full border border-line bg-surface-2 pr-12 pl-12 text-base text-ink transition-colors duration-150 placeholder:text-muted/80 hover:border-line-strong focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/15 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value ? (
        <button
          type="button"
          onClick={() => {
            onChange('')
            ref.current?.focus()
          }}
          className="absolute top-1/2 right-2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
          aria-label={t('reg.clear')}
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      ) : (
        slashShortcut && (
          <kbd aria-hidden className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-md border border-line-strong px-1.5 font-mono text-xs text-muted sm:block">
            /
          </kbd>
        )
      )}
    </div>
  )
}
