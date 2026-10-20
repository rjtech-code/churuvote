import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown, ListOrdered } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { prefersReducedMotion, scrollToId } from '../lib/hooks'

interface Item {
  id: string
  label: string
}

/**
 * How much of the viewport top is covered by sticky bars once they are stuck (header, and
 * on small screens the section selector). Uses each bar's CSS `top` + height, so it is
 * correct even before the bars have actually stuck. Tall sticky panels (the desktop
 * contents list) sit beside the content, not over it, and are ignored.
 */
function stickyOffset() {
  let bottom = 0
  document.querySelectorAll<HTMLElement>('header, nav').forEach((el) => {
    const cs = getComputedStyle(el)
    if (cs.position !== 'sticky' || !el.offsetHeight || el.offsetHeight > window.innerHeight / 3) return
    bottom = Math.max(bottom, (parseFloat(cs.top) || 0) + el.offsetHeight)
  })
  return bottom
}

/**
 * Which section is being read. An IntersectionObserver whose root is a 1px "reading line"
 * just below the sticky bars: the sections are contiguous, so exactly one of them crosses
 * that line at any time — no flicker at boundaries, correct in both scroll directions, and
 * it adapts by itself when accordions change a section's height. At the very bottom of the
 * page the last section wins. While a click-triggered smooth scroll runs, tracking pauses
 * so the indicator doesn't race through the sections in between.
 */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | undefined>(ids[0])
  const lockUntil = useRef(0)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    if (!els.length) return
    let io: IntersectionObserver | null = null

    const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

    const build = () => {
      io?.disconnect()
      const vh = window.innerHeight
      const top = stickyOffset()
      const line = Math.round(top + (vh - top) * 0.2)
      io = new IntersectionObserver(
        (entries) => {
          if (Date.now() < lockUntil.current) return
          const hit = entries.filter((e) => e.isIntersecting).map((e) => e.target.id)
          if (hit.length) setActive(hit[hit.length - 1])
        },
        { rootMargin: `-${line}px 0px -${Math.max(0, vh - line - 1)}px 0px` },
      )
      els.forEach((el) => io!.observe(el))
    }

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (Date.now() >= lockUntil.current && atBottom()) setActive(ids[ids.length - 1])
      })
    }
    let resizeTimer = 0
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(build, 150)
    }

    build()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      io?.disconnect()
      cancelAnimationFrame(frame)
      clearTimeout(resizeTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [ids])

  /** Mark a section active right away and hold it until the smooth scroll settles. */
  const pin = useCallback((id: string) => {
    setActive(id)
    lockUntil.current = Date.now() + (prefersReducedMotion() ? 100 : 1200)
    const release = () => {
      lockUntil.current = Date.now() + 80
      window.removeEventListener('scrollend', release)
    }
    window.addEventListener('scrollend', release, { once: true })
  }, [])

  return [active, pin] as const
}

/**
 * Section navigation for the RO guide.
 * lg+: a small sticky contents list beside the reading column.
 * Smaller screens: a sticky rounded selector that opens an overlay list.
 */
export function SectionNav({ items, variant }: { items: Item[]; variant: 'sidebar' | 'dropdown' }) {
  const { t } = useLanguage()
  const [ids] = useState(() => items.map((i) => i.id))
  const [active, pin] = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const originRef = useRef<HTMLLIElement>(null)
  const [slider, setSlider] = useState<{ top: number; height: number } | null>(null)

  // sidebar: one indicator that slides to the active item instead of per-item bars
  useLayoutEffect(() => {
    if (variant !== 'sidebar') return
    // measured from the indicator's own origin, so it lines up exactly whatever the list's box model
    const measure = () => {
      const origin = originRef.current
      const el = listRef.current?.querySelector<HTMLElement>(`a[href="#${active}"]`)
      if (origin && el) setSlider({ top: el.getBoundingClientRect().top - origin.getBoundingClientRect().top, height: el.offsetHeight })
    }
    measure()
    // re-measure when the list's layout changes (web fonts finishing, language switch, resize)
    const ro = typeof ResizeObserver !== 'undefined' && listRef.current ? new ResizeObserver(measure) : null
    if (ro && listRef.current) ro.observe(listRef.current)
    document.fonts?.ready.then(measure).catch(() => {})
    return () => ro?.disconnect()
  }, [active, variant, items])

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
    pin(id)
    if (scrollToId(id)) history.replaceState(history.state, '', `${location.pathname}${location.search}#${id}`)
  }

  const activeIdx = Math.max(0, items.findIndex((i) => i.id === active))

  const list = (onPick?: () => void) => (
    <ol ref={variant === 'sidebar' ? listRef : undefined} className="relative grid gap-0.5">
      {variant === 'sidebar' && (
        <li ref={originRef} aria-hidden className="pointer-events-none absolute inset-x-0 top-0 list-none">
          {slider && (
            <span
              className="absolute inset-x-0 top-0 rounded-lg bg-gradient-to-r from-accent-soft to-accent-tint transition-[transform,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ transform: `translateY(${slider.top}px)`, height: slider.height }}
            >
              <span className="absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-full bg-gradient-to-b from-accent-2 to-accent" />
            </span>
          )}
        </li>
      )}
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
              className={`relative flex items-baseline gap-2.5 rounded-lg py-1.5 pr-2.5 pl-3.5 text-sm leading-snug transition-colors duration-300 ${
                on ? 'font-semibold text-accent' : 'text-muted hover:bg-surface-2/70 hover:text-ink'
              }`}
            >
              {variant === 'dropdown' && (
                <span
                  aria-hidden
                  className={`absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-full bg-accent transition-transform duration-200 ${on ? 'scale-y-100' : 'scale-y-0'}`}
                />
              )}
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
