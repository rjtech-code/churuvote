/**
 * One small, purposeful visual per page hero — each built from the site's real data
 * (thumbnails, counts, section names), never stock imagery. Decorative parts are
 * aria-hidden; anything clickable is a real link with an accessible name.
 */
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import { FileText } from 'lucide-react'
import { DOC_SECTIONS, FEATURED_FORMS } from '../data/documents.generated'
import type { ElectionKey } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { DOC_BY_ID, docTitle, documentsForPage, sectionLabel } from '../lib/documents'
import { groupAnchor } from './DocumentBrowser'

/**
 * Home: the three filled-in form collections as a stacked fan of real previews, in their
 * original order. Hover / keyboard focus / press: the left card tilts further left, the
 * right card further right, the centre card lifts — side cards always stay beneath the
 * centre card (see .fan-card in index.css). Each card is the document's own link.
 * Touch: the first tap emphasises a card (same motion as hover), a second tap opens it;
 * tapping anywhere else clears the emphasis. Mouse clicks and keyboard open directly.
 */
export function DocumentFanVisual() {
  const { t, lang } = useLanguage()
  const docs = FEATURED_FORMS.map((id) => DOC_BY_ID[id]).filter((d) => d.available && d.thumbnailUrl)
  const positions = ['left', 'center', 'right'] as const
  const [active, setActive] = useState<string | null>(null)
  const pointer = useRef('mouse')
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const clear = (e: Event) => {
      if (!boxRef.current?.contains(e.target as Node)) setActive(null)
    }
    document.addEventListener('pointerdown', clear)
    return () => document.removeEventListener('pointerdown', clear)
  }, [active])

  const onPointerDown = (e: PointerEvent) => {
    pointer.current = e.pointerType
  }
  const onClick = (e: MouseEvent, id: string) => {
    if (pointer.current !== 'mouse' && active !== id) {
      e.preventDefault()
      setActive(id)
    }
    pointer.current = 'mouse'
  }

  return (
    <div ref={boxRef} role="group" aria-label={t('visual.docPreviews')} className="fan-box relative mx-auto h-60 w-full max-w-[25rem] sm:h-64 md:h-72">
      <span aria-hidden className="absolute top-1/2 left-1/2 h-56 w-56 sm:h-64 sm:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--c-accent-soft)_0%,transparent_70%)]" />
      <span aria-hidden className="absolute inset-x-10 bottom-2 h-6 rounded-full bg-accent/15 blur-xl" />
      <div className="fan float-y absolute inset-0 flex items-center justify-center">
      {docs.slice(0, 3).map((d, i) => {
        const title = docTitle(d, lang)
        return (
          <a
            key={d.id}
            href={d.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-pos={positions[i]}
            data-active={active === d.id ? '' : undefined}
            onPointerDown={onPointerDown}
            onClick={(e) => onClick(e, d.id)}
            style={{ animationDelay: `${i * 90}ms` }}
            className="fan-card w-28 overflow-hidden rounded-xl border border-line bg-surface outline-offset-4 [-webkit-tap-highlight-color:transparent] sm:w-36 md:w-40"
          >
            <img src={d.thumbnailUrl} alt="" className="h-36 w-full object-cover object-top sm:h-44 md:h-48" />
            <span className="line-clamp-2 border-t border-line px-2 py-1.5 text-[0.68rem] leading-snug font-semibold text-ink sm:px-2.5 sm:text-[0.72rem]">{title}</span>
            <span className="sr-only">{t('common.newTab')}</span>
          </a>
        )
      })}
      </div>
    </div>
  )
}

/** ZP-PS: a compact visual index of the largest document categories, linking to each group. */
export function CategoryIndexVisual({ page }: { page: ElectionKey }) {
  const { t, lang } = useLanguage()
  const docs = documentsForPage(page)
  const rows = DOC_SECTIONS.map((s) => ({ key: s.key, n: docs.filter((d) => d.section === s.key).length }))
    .filter((r) => r.n)
    .sort((a, b) => b.n - a.n)
    .slice(0, 5)
  const max = rows[0]?.n ?? 1
  return (
    <nav aria-label={t('visual.byType')} className="panel bg-gradient-to-br from-accent-tint to-surface p-4 hover:shadow-lg">
      <p className="mb-3 text-xs font-semibold text-muted">{t('visual.byType')}</p>
      <ul className="grid gap-2.5">
        {rows.map((r, i) => (
          <li key={r.key}>
            <a href={`#${groupAnchor(r.key)}`} className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 rounded-lg">
              <span className="truncate text-sm font-medium group-hover:text-accent">{sectionLabel(r.key, lang)}</span>
              <span className="text-xs font-semibold text-muted tabular-nums">{r.n}</span>
              <span aria-hidden className="col-span-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                <span
                  className="anim-grow-x block h-full rounded-full bg-gradient-to-r from-accent-2 to-accent opacity-80 transition-opacity group-hover:opacity-100"
                  style={{ width: `${(100 * r.n) / max}%`, animationDelay: `${i * 80}ms` }}
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Sarpanch-Panch: a miniature document stack — icon and "40 PDF" only. */
export function DocumentStackVisual({ files }: { files: number }) {
  return (
    <div aria-hidden className="float-y relative mx-auto h-40 w-36 sm:h-48 sm:w-44">
      <span className="absolute inset-0 translate-x-6 -translate-y-3 rotate-6 rounded-2xl border border-line bg-teal-soft" />
      <span className="absolute inset-0 translate-x-3 -translate-y-1.5 rotate-3 rounded-2xl border border-line bg-surface-2" />
      <span className="anim-pop-in absolute inset-0 flex flex-col rounded-2xl border border-line bg-gradient-to-br from-surface to-accent-tint p-4 shadow-[0_18px_40px_-20px_var(--c-glow)]">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-bad-soft text-bad">
          <FileText className="h-5 w-5" />
        </span>
        <span className="stack-figure mt-4 flex items-baseline gap-1.5">
          <span className="text-gradient text-3xl font-bold tabular-nums sm:text-4xl">{files}</span>
          <span className="text-lg font-bold text-muted">PDF</span>
        </span>
        <span className="mt-auto grid gap-1.5">
          <span className="h-1.5 w-full rounded-full bg-surface-2" />
          <span className="h-1.5 w-4/5 rounded-full bg-surface-2" />
          <span className="h-1.5 w-3/5 rounded-full bg-surface-2" />
        </span>
      </span>
    </div>
  )
}

/** RO guide: a procedure preview (nomination → scrutiny → withdrawal & list → symbols) whose line draws in; each node jumps to its section. */
export function ProcedurePreviewVisual({ steps }: { steps: { id: string; label: string }[] }) {
  const { t } = useLanguage()
  return (
    <nav aria-label={t('visual.guideSteps')} className="panel float-y bg-gradient-to-br from-accent-tint via-surface to-surface p-5 shadow-[0_24px_48px_-28px_var(--c-glow)] sm:p-6">
      <p className="mb-5 text-xs font-semibold text-muted">{t('visual.guideSteps')}</p>
      <ol className="relative grid gap-5">
        <span aria-hidden className="absolute top-4 bottom-4 left-[calc(1.125rem-1px)] w-0.5 rounded-full bg-line-strong" />
        <span aria-hidden className="anim-grow-y absolute top-4 bottom-4 left-[calc(1.125rem-1px)] w-0.5 rounded-full bg-gradient-to-b from-accent to-accent-2" />
        {steps.map((s, i) => (
          <li key={s.id} className="relative">
            <a href={`#${s.id}`} className="group flex items-center gap-3.5 rounded-lg">
              <span
                className="anim-pop-in relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-grad-from to-grad-to text-sm font-bold text-accent-ink shadow-[0_6px_14px_-6px_var(--c-glow)] ring-4 ring-surface transition-transform duration-300 group-hover:scale-110"
                style={{ animationDelay: `${200 + i * 160}ms` }}
              >
                {i + 1}
              </span>
              <span className="text-[0.95rem] font-semibold transition-colors group-hover:text-accent">{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
