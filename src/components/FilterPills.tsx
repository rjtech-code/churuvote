export interface PillOption<T extends string = string> {
  id: T
  label: string
  count?: number
}

interface Props<T extends string> {
  options: PillOption<T>[]
  value: T
  onChange: (id: T) => void
  label: string
  /** 'segment' = compact segmented control (election), 'chips' = wrapping pills (types). */
  variant?: 'segment' | 'chips'
  disableEmpty?: boolean
}

/** Pill-shaped single-choice filter with counts. */
export function FilterPills<T extends string>({ options, value, onChange, label, variant = 'chips', disableEmpty }: Props<T>) {
  const segment = variant === 'segment'
  return (
    <div role="radiogroup" aria-label={label} className={segment ? 'inline-flex max-w-full flex-wrap gap-1 rounded-2xl bg-surface-2 p-1 sm:rounded-full' : 'flex flex-wrap gap-2'}>
      {options.map((o) => {
        const on = o.id === value
        const disabled = !!disableEmpty && !on && o.count === 0
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={on}
            disabled={disabled}
            onClick={() => onChange(o.id)}
            className={
              segment
                ? `inline-flex min-h-9 items-center gap-2 rounded-full px-3.5 text-sm font-semibold transition-colors duration-150 ${
                    on ? 'bg-surface text-accent shadow-sm' : 'text-muted hover:text-ink'
                  }`
                : `chip disabled:cursor-not-allowed disabled:opacity-40 ${on ? 'chip-on' : 'chip-off'}`
            }
          >
            {o.label}
            {o.count !== undefined && (
              <span
                className={`rounded-full px-1.5 text-xs font-semibold tabular-nums ${
                  on ? (segment ? 'bg-accent-soft text-accent' : 'bg-accent-ink/20 text-accent-ink') : 'bg-surface-2 text-muted'
                }`}
              >
                {o.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
