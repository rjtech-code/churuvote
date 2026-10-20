import { ArrowRight, ArrowUpRight, BookOpenCheck, FolderOpen, Landmark, Users } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { CompactHero, StatRow } from '../components/CompactHero'
import { DocumentBrowser } from '../components/DocumentBrowser'
import { FlipCard } from '../components/FlipCard'
import { DocumentFanVisual } from '../components/HeroVisuals'
import { DOCUMENTS, FEATURED_FORMS } from '../data/documents.generated'
import { GUIDE_SECTION_COUNT } from '../data/guideMeta'
import { useLanguage } from '../i18n/LanguageProvider'
import { usePageMeta } from '../i18n/usePageMeta'
import { DOC_BY_ID, docTitle, documentsForPage, formatNumber, statsFor } from '../lib/documents'

const total = statsFor(DOCUMENTS)
const zpps = statsFor(documentsForPage('zp-ps'))
const panch = statsFor(documentsForPage('sarpanch-panch'))

export function Home() {
  const { t, lang } = useLanguage()
  usePageMeta(null)
  const forms = FEATURED_FORMS.map((id) => DOC_BY_ID[id]).filter((f) => f.available)

  return (
    <>
      <CompactHero
        eyebrow={t('home.kicker')}
        title={t('home.title')}
        visual={<DocumentFanVisual />}
        description={t('home.lede')}
        meta={
          <StatRow
            items={[
              [formatNumber(total.files), t('home.stat.files')],
              [formatNumber(total.pages), t('home.stat.pages')],
              ['2', t('home.stat.elections')],
            ]}
          />
        }
        actions={
          <>
            <Link to="/ro-margdarshan" className="btn-primary">
              {t('home.ctaGuide')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/#files" className="btn-soft">
              {t('home.ctaFiles')}
            </Link>
          </>
        }
      />

      {/* four main categories — 3D flip cards */}
      <section aria-labelledby="panels-title" className="container-page pt-10">
        <h2 id="panels-title" className="sr-only">
          {t('home.panels.title')}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="stagger-item" style={{ '--i': 3 } as CSSProperties}>
            <FlipCard
              icon={Landmark}
              tone="bg-accent-soft text-accent"
              title={t('home.index.zpps')}
              description={t('home.index.zpps.topics')}
              meta={t('home.panel.files.count', { n: zpps.files })}
              action={{ label: t('common.openPage'), to: '/zp-ps' }}
            />
          </li>
          <li className="stagger-item" style={{ '--i': 4 } as CSSProperties}>
            <FlipCard
              icon={Users}
              tone="bg-teal-soft text-teal-ink"
              title={t('home.index.panch')}
              description={t('home.index.panch.topics')}
              meta={t('home.panel.files.count', { n: panch.files })}
              action={{ label: t('common.openPage'), to: '/sarpanch-panch' }}
            />
          </li>
          <li className="stagger-item" style={{ '--i': 5 } as CSSProperties}>
            <FlipCard
              icon={BookOpenCheck}
              tone="bg-warn-soft text-warn"
              title={t('home.res.guideTitle')}
              description={t('home.panel.guide.text')}
              meta={t('home.panel.guide.count', { n: GUIDE_SECTION_COUNT })}
              action={{ label: t('home.res.guideCta'), to: '/ro-margdarshan' }}
            />
          </li>
          <li className="stagger-item" style={{ '--i': 6 } as CSSProperties}>
            <FlipCard
              icon={FolderOpen}
              tone="bg-surface-2 text-ink"
              title={t('reg.titleHome')}
              description={t('home.panel.files.text', { n: total.files })}
              meta={t('home.panel.files.count', { n: total.files })}
              action={{ label: t('home.ctaFiles'), to: '/#files' }}
            />
          </li>
        </ul>
      </section>

      {/* filled-in forms: one compact strip */}
      <section aria-labelledby="forms-title" className="container-page pt-10">
        <h2 id="forms-title" className="text-sm font-semibold text-muted">
          {t('home.res.forms')}
        </h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {forms.map((f) => (
            <li key={f.id}>
              <a
                href={f.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-tint hover:text-accent hover:shadow-[0_10px_22px_-14px_var(--c-glow)] active:translate-y-0 motion-reduce:hover:translate-y-0"
              >
                {docTitle(f, lang)}
                <span className="text-xs text-muted tabular-nums">
                  {f.pageCount} {t('common.pages')}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                <span className="sr-only">{t('common.newTab')}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <DocumentBrowser heading={t('reg.titleHome')} intro={t('reg.introHome')} />
    </>
  )
}
