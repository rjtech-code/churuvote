export interface FilterOption<T extends string = string> {
  id: T
  label: string
  count?: number
}

interface Props<T extends string> {
  options: FilterOption<T>[]
  value: T
  onChange: (id: T) => void
  label: string
  /** 'segment' = compact segmented control; 'pills' = one scrollable row of pills. */
  variant?: 'segment' | 'pills'
  disableEmpty?: boolean
}

/** Single-choice filter with counts. Pills scroll horizontally instead of wrapping, keeping the toolbar compact. */
export function CategoryFilter<T extends string>({ options, value, onChange, label, variant = 'pills', disableEmpty }: Props<T>) {
  const segment = variant === 'segment'
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={
        segment
          ? 'inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-surface-2 p-1 no-scrollbar'
          : 'no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 py-0.5 [mask-image:linear-gradient(90deg,#000_calc(100%-24px),transparent)]'
      }
    >
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
                ? `inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
                    on ? 'bg-surface text-accent shadow-[0_2px_8px_-3px_var(--c-glow)] ring-1 ring-accent/15' : 'text-muted hover:text-ink'
                  }`
                : `chip shrink-0 whitespace-nowrap active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 ${on ? 'chip-on' : 'chip-off'}`
            }
          >
            {o.label}
            {o.count !== undefined && (
              <span className={`text-xs tabular-nums ${on ? (segment ? 'text-accent' : 'text-accent-ink/80') : 'text-muted'}`}>{o.count}</span>
            )}
          </button>
        )
      })}
      {!segment && <span aria-hidden className="w-4 shrink-0" />}
    </div>
  )
}
