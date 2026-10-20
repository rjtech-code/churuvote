import { useEffect, useId, useRef, useState } from 'react'
import { ArrowRight, RotateCcw, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { useLanguage } from '../i18n/LanguageProvider'

interface Props {
  icon: LucideIcon
  /** Tailwind classes for the icon chip (background + colour). */
  tone: string
  title: string
  description: string
  meta?: string
  action: { label: string; to: string }
}

function useCanHover() {
  const query = '(hover: hover) and (pointer: fine)'
  const [can, setCan] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setCan(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return can
}

/**
 * Homepage category card with a 3D flip.
 * Front: icon + title + small hint. Back: description, count, one action.
 * Mouse: flips on hover. Touch: tap to flip, tap outside to flip back. Keyboard: the front
 * button flips it and focus moves to the action; Escape or “Back” returns. The hidden face is
 * `inert`, so screen readers and Tab only ever reach the visible side.
 */
export function FlipCard({ icon: Icon, tone, title, description, meta, action }: Props) {
  const { t } = useLanguage()
  const canHover = useCanHover()
  const [flipped, setFlipped] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const frontBtnRef = useRef<HTMLButtonElement>(null)
  const actionRef = useRef<HTMLAnchorElement>(null)
  const focusAfterFlip = useRef<'action' | 'front' | null>(null)
  const titleId = useId()
  const backId = useId()

  // Move focus to the newly visible side after a click/keyboard flip (never on hover).
  useEffect(() => {
    const target = focusAfterFlip.current
    focusAfterFlip.current = null
    if (target === 'action' && flipped) actionRef.current?.focus({ preventScroll: true })
    if (target === 'front' && !flipped) frontBtnRef.current?.focus({ preventScroll: true })
  }, [flipped])

  // Touch: a tap outside the card flips it back.
  useEffect(() => {
    if (!flipped || canHover) return
    const onDown = (e: PointerEvent) => !rootRef.current?.contains(e.target as Node) && setFlipped(false)
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [flipped, canHover])

  const flipToBack = () => {
    focusAfterFlip.current = 'action'
    setFlipped(true)
  }
  const flipToFront = () => {
    focusAfterFlip.current = 'front'
    setFlipped(false)
  }

  return (
    <div
      ref={rootRef}
      className={`flip group h-full ${flipped ? 'is-flipped' : ''}`}
      onMouseEnter={canHover ? () => setFlipped(true) : undefined}
      onMouseLeave={canHover ? () => setFlipped(false) : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && flipped) flipToFront()
      }}
    >
      <div className="flip-inner h-full">
        {/* front */}
        <div
          className="flip-face flip-front panel relative flex min-h-40 flex-col bg-gradient-to-br from-surface via-surface to-accent-tint p-5 group-hover:border-accent/35 group-hover:shadow-[0_18px_40px_-24px_var(--c-glow)]"
          inert={flipped}
        >
          <span aria-hidden className={`icon-chip grid h-11 w-11 place-items-center rounded-xl ${tone}`}>
            <Icon className="h-5 w-5" />
          </span>
          <h3 id={titleId} className="mt-4 flex-1 text-[1.05rem] leading-snug font-bold">
            {title}
          </h3>
          <span aria-hidden className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
            <RotateCcw className="h-3.5 w-3.5" />
            {t('flip.hint')}
          </span>
          {/* the whole front is one button that reveals the back */}
          <button
            ref={frontBtnRef}
            type="button"
            aria-expanded={flipped}
            aria-controls={backId}
            aria-label={t('flip.label', { title })}
            onClick={flipToBack}
            className="absolute inset-0 cursor-pointer rounded-2xl"
          />
        </div>

        {/* back */}
        <div
          id={backId}
          role="group"
          aria-labelledby={titleId}
          className="flip-face flip-back panel flex min-h-40 flex-col border-accent/30 bg-gradient-to-br from-accent-tint via-surface to-surface p-5 shadow-[0_18px_40px_-24px_var(--c-glow)]"
          inert={!flipped}
        >
          <p className="text-[0.95rem] font-bold leading-snug">{title}</p>
          <p className="mt-1.5 flex-1 text-sm text-muted">{description}</p>
          {meta && <p className="mt-2 text-xs font-semibold text-accent">{meta}</p>}
          <div className="mt-4 flex items-center justify-between gap-2">
            <Link ref={actionRef} to={action.to} className="btn-primary min-h-10 px-3.5 text-sm">
              {action.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={flipToFront}
              className="inline-flex min-h-10 items-center gap-1 rounded-lg px-2 text-xs font-semibold text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              {t('flip.back')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
