import { LayoutGrid, Rows3 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'

export type DocView = 'table' | 'grid'

/** Table / Grid switch. Changes the actual layout of the document browser. */
export function ViewSwitcher({ value, onChange }: { value: DocView; onChange: (v: DocView) => void }) {
  const { t } = useLanguage()
  const opts = [
    { id: 'table' as const, label: t('view.table'), icon: Rows3 },
    { id: 'grid' as const, label: t('view.grid'), icon: LayoutGrid },
  ]
  return (
    <div role="radiogroup" aria-label={t('view.label')} className="inline-flex shrink-0 rounded-full bg-surface-2 p-1">
      {opts.map(({ id, label, icon: Icon }) => {
        const on = id === value
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(id)}
            title={label}
            className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold transition-[background-color,color,box-shadow] duration-200 active:scale-95 ${
              on ? 'bg-surface text-accent shadow-[0_2px_8px_-3px_var(--c-glow)] ring-1 ring-accent/15' : 'text-muted hover:text-ink'
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{label}</span>
            <span className="sr-only sm:hidden">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
