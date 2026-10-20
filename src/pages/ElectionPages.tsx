import { ArrowRight, ArrowUpRight, BookOpenCheck } from 'lucide-react'
import { Link } from 'react-router'
import { CompactHero, StatRow } from '../components/CompactHero'
import { DocumentBrowser } from '../components/DocumentBrowser'
import { DocumentTable } from '../components/DocumentTable'
import { CategoryIndexVisual, DocumentStackVisual } from '../components/HeroVisuals'
import { FEATURED_FORMS, SARPANCH_HIGHLIGHTS } from '../data/documents.generated'
import type { ElectionKey } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { usePageMeta } from '../i18n/usePageMeta'
import { DOC_BY_ID, docTitle, documentsForPage, formatNumber, highlightTitle, statsFor } from '../lib/documents'

const CONFIG: Record<ElectionKey, { title: TranslationKey; short: TranslationKey; crumb: TranslationKey; other: { to: string; label: TranslationKey } }> = {
  'zp-ps': { title: 'el.zpps.title', short: 'el.zpps.short', crumb: 'nav.zpps', other: { to: '/sarpanch-panch', label: 'el.toPanch' } },
  'sarpanch-panch': { title: 'el.panch.title', short: 'el.panch.short', crumb: 'nav.panch', other: { to: '/zp-ps', label: 'el.toZpps' } },
}

function ElectionHero({ election }: { election: ElectionKey }) {
  const { t } = useLanguage()
  const cfg = CONFIG[election]
  const stats = statsFor(documentsForPage(election))
  const title = t(cfg.title)
  usePageMeta(`${title} 2026`, t(cfg.short))

  return (
    <CompactHero
      crumb={t(cfg.crumb)}
      title={
        <>
          {title} <span className="text-accent">2026</span>
        </>
      }
      description={t(cfg.short)}
      visual={election === 'zp-ps' ? <CategoryIndexVisual page="zp-ps" /> : <DocumentStackVisual files={stats.files} />}
      meta={
        <StatRow
          items={[
            [formatNumber(stats.files), t('el.stat.files')],
            [formatNumber(stats.pages), t('el.stat.pages')],
            [formatNumber(stats.both), t('el.stat.both')],
          ]}
        />
      }
      actions={
        <>
          <a href="#files" className="btn-primary">
            {t('reg.titlePage')}
          </a>
          <Link to={cfg.other.to} className="btn-soft">
            {t(cfg.other.label)}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </>
      }
    />
  )
}

function BrowserIntro() {
  const { t } = useLanguage()
  return (
    <>
      {t('el.bothNote')} {t('reg.introPage')}{' '}
      <Link to="/#files" className="font-semibold text-accent underline underline-offset-2">
        {t('reg.introPageLink')}
      </Link>{' '}
      {t('reg.introPageEnd')}
    </>
  )
}

/* ============================== ZP-PS ============================== */

export function ZpPsPage() {
  const { t, lang } = useLanguage()
  const forms = FEATURED_FORMS.map((id) => DOC_BY_ID[id]).filter((d) => d.pages.includes('zp-ps') && d.available)

  return (
    <>
      <ElectionHero election="zp-ps" />

      {/* one compact "start here" strip: the guide + this election's filled-in forms */}
      <section aria-labelledby="start-title" className="container-page pt-8">
        <h2 id="start-title" className="text-sm font-semibold text-muted">
          {t('el.start')}
        </h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          <li>
            <Link to="/ro-margdarshan" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent-soft px-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-ink">
              <BookOpenCheck className="h-4 w-4" aria-hidden />
              {t('home.res.guideTitle')}
            </Link>
          </li>
          {forms.map((f) => (
            <li key={f.id}>
              <a
                href={f.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm font-medium transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
              >
                {docTitle(f, lang)}
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                <span className="sr-only">{t('common.newTab')}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <DocumentBrowser page="zp-ps" heading={t('reg.titlePage')} intro={<BrowserIntro />} />
    </>
  )
}

/* ============================== Sarpanch-Panch ============================== */

export function SarpanchPage() {
  const { t, lang } = useLanguage()
  const highlightDocs = SARPANCH_HIGHLIGHTS.map((h) => DOC_BY_ID[h.id])
  const titles = Object.fromEntries(SARPANCH_HIGHLIGHTS.map((h) => [h.id, highlightTitle(h.id, lang)]))

  return (
    <>
      <ElectionHero election="sarpanch-panch" />

      <section aria-labelledby="sp-title" className="container-page pt-8">
        <h2 id="sp-title" className="text-xl font-bold sm:text-2xl">
          {t('el.sp.title')}
        </h2>
        <div className="mt-4">
          <DocumentTable groups={[{ key: 'highlights', docs: highlightDocs }]} titles={titles} anchors={false} />
        </div>
      </section>

      <DocumentBrowser page="sarpanch-panch" heading={t('reg.titlePage')} intro={<BrowserIntro />} />
    </>
  )
}
