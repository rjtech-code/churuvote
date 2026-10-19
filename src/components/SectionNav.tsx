import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ListOrdered } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { scrollToId } from '../lib/hooks'

interface Item {
  id: string
  label: string
}

/** Tracks which section is being read. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | undefined>()
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return [active, setActive] as const
}

/**
 * Section navigation for the RO guide.
 * lg+: a small sticky contents list beside the reading column.
 * Smaller screens: a sticky rounded selector that opens an overlay list.
 */
export function SectionNav({ items, variant }: { items: Item[]; variant: 'sidebar' | 'dropdown' }) {
  const { t } = useLanguage()
  const ids = items.map((i) => i.id)
  const [active, setActive] = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => !boxRef.current?.contains(e.target as Node) && setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const go = (id: string) => {
    if (scrollToId(id)) {
      history.replaceState(history.state, '', `${location.pathname}${location.search}#${id}`)
      setActive(id)
    }
  }

  const activeIdx = Math.max(0, items.findIndex((i) => i.id === active))

  const list = (onPick?: () => void) => (
    <ol className="grid gap-0.5">
      {items.map((item, i) => {
        const on = item.id === active
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={on ? 'location' : undefined}
              onClick={(e) => {
                e.preventDefault()
                onPick?.()
                go(item.id)
              }}
              className={`flex items-baseline gap-2.5 rounded-lg px-2.5 py-1.5 text-sm leading-snug transition-colors duration-150 ${
                on ? 'bg-accent-soft font-semibold text-accent' : 'text-muted hover:bg-surface-2 hover:text-ink'
              }`}
            >
              <span aria-hidden className="w-5 shrink-0 text-xs tabular-nums opacity-70">
                {i + 1}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )

  if (variant === 'sidebar') {
    return (
      <nav aria-label={t('guide.toc')} className="panel sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto p-3">
        <p className="mb-2 flex items-center gap-2 px-2.5 text-xs font-semibold text-muted">
          <ListOrdered className="h-4 w-4" aria-hidden />
          {t('guide.toc')}
        </p>
        {list()}
      </nav>
    )
  }

  return (
    <nav aria-label={t('guide.tocMobile')} ref={boxRef} className="sticky top-16 z-30 py-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="section-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl border border-line bg-surface/95 px-4 text-left shadow-soft backdrop-blur transition-colors hover:border-accent/40"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <ListOrdered className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          <span className="text-xs text-muted tabular-nums">
            {activeIdx + 1}/{items.length}
          </span>
          <span className="truncate font-semibold">{items[activeIdx]?.label}</span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>
      {open && (
        <div id="section-menu" className="panel fade-in absolute inset-x-0 top-full max-h-[60dvh] overflow-y-auto p-2">
          {list(() => setOpen(false))}
        </div>
      )}
    </nav>
  )
}
