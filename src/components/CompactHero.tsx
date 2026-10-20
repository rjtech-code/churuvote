import type { CSSProperties, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { useLanguage } from '../i18n/LanguageProvider'

interface Props {
  eyebrow?: string
  /** Breadcrumb: current page label (Home is added automatically). */
  crumb?: string
  title: ReactNode
  description: ReactNode
  /** One compact metadata / statistics row. */
  meta?: ReactNode
  /** One primary action, optionally a few secondary ones. */
  actions?: ReactNode
  /** One small visual tied to the page's purpose (each page supplies its own). */
  visual?: ReactNode
  /** Where the visual sits on phones/tablets: right after the heading, or after everything (default). Beside the text from lg. */
  visualPlacement?: 'afterTitle' | 'end'
}

/** Entrance order for the staggered hero animation (see .enter in index.css). */
const order = (d: number) => ({ '--d': d }) as CSSProperties

/**
 * Small page introduction: title, short description, one meta row, a few actions and an
 * optional visual. Content enters with a short coordinated stagger; soft, slowly drifting
 * blue light sits behind the visual (decorative, very low contrast, off with reduced motion).
 */
export function CompactHero({ eyebrow, crumb, title, description, meta, actions, visual, visualPlacement = 'end' }: Props) {
  const { t } = useLanguage()
  return (
    <section className="relative isolate pt-8 pb-2 sm:pt-12">
      {/* ambient light — faded in and out with a mask (no hard edges), never over content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_70%,transparent)]"
      >
        <span className="ambient top-[-6rem] right-[8%] h-80 w-80 bg-accent/20 dark:bg-accent/15" />
        <span className="ambient top-24 right-[28%] h-56 w-56 bg-accent-2/20 [animation-delay:-6s] dark:bg-accent-2/10" />
        <span className="ambient top-[-4rem] left-[-6rem] h-64 w-64 bg-teal/15 [animation-delay:-11s] dark:bg-teal/10" />
      </div>

      <div className="container-page">
        {crumb && (
          <nav aria-label={t('el.crumb')} className="enter mb-4 flex items-center gap-1 text-sm text-muted" style={order(0)}>
            <Link to="/" className="rounded-md transition-colors hover:text-accent">
              {t('nav.home')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span aria-current="page" className="font-semibold text-ink">
              {crumb}
            </span>
          </nav>
        )}
        {/* one grid, three areas: below lg the visual is placed after the heading or at the end;
            from lg it sits beside the text block, vertically centred */}
        <div
          className={
            visual
              ? `grid gap-x-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:[grid-template-areas:'head_visual'_'body_visual'] ${
                  visualPlacement === 'afterTitle' ? "[grid-template-areas:'head'_'visual'_'body']" : "[grid-template-areas:'head'_'body'_'visual']"
                }`
              : ''
          }
        >
          <div className="min-w-0 self-end [grid-area:head]">
            {eyebrow && (
              <span className="kicker enter mb-3" style={order(0)}>
                {eyebrow}
              </span>
            )}
            <h1 className="enter max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl" style={order(1)}>
              {title}
            </h1>
          </div>
          <div className="min-w-0 self-start [grid-area:body]">
            <p className={`enter mt-3 text-base text-muted sm:text-lg ${visual ? 'max-w-2xl' : 'max-w-[56rem]'}`} style={order(2)}>
              {description}
            </p>
            {meta && (
              <div className="enter mt-5" style={order(3)}>
                {meta}
              </div>
            )}
            {actions && (
              <div className="enter mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap" style={order(4)}>
                {actions}
              </div>
            )}
          </div>
          {visual && (
            <div
              className={`enter min-w-0 self-center [grid-area:visual] lg:my-0 ${visualPlacement === 'afterTitle' ? 'my-6' : 'mt-8'}`}
              style={order(visualPlacement === 'afterTitle' ? 2 : 3)}
            >
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/** Inline “87 PDF फ़ाइलें · 1,568 पेज” statistics; the numbers carry a soft blue gradient. */
export function StatRow({ items }: { items: [string, string][] }) {
  return (
    <dl className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
      {items.map(([v, l]) => (
        <div key={l} className="flex items-baseline gap-1.5">
          <dd className="text-gradient text-lg font-bold tabular-nums">{v}</dd>
          <dt className="text-muted">{l}</dt>
        </div>
      ))}
    </dl>
  )
}
