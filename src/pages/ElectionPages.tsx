import { ArrowRight, ArrowUpRight, BookOpenCheck, ChevronRight, Landmark, Users, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { DocumentRegister, groupAnchor } from '../components/DocumentRegister'
import { DocumentRow } from '../components/DocumentRow'
import { DOC_SECTIONS, FEATURED_FORMS, SARPANCH_HIGHLIGHTS } from '../data/documents.generated'
import type { ElectionKey } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { usePageMeta } from '../i18n/usePageMeta'
import { DOC_BY_ID, docTitle, documentsForPage, formatNumber, highlightTitle, sectionLabel, statsFor } from '../lib/documents'

const CONFIG: Record<ElectionKey, { title: TranslationKey; crumb: TranslationKey; other: { to: string; label: TranslationKey }; icon: LucideIcon; tone: string }> = {
  'zp-ps': { title: 'el.zpps.title', crumb: 'nav.zpps', other: { to: '/sarpanch-panch', label: 'el.toPanch' }, icon: Landmark, tone: 'bg-accent-soft text-accent' },
  'sarpanch-panch': { title: 'el.panch.title', crumb: 'nav.panch', other: { to: '/zp-ps', label: 'el.toZpps' }, icon: Users, tone: 'bg-teal-soft text-teal-ink' },
}

/** Shared page intro: breadcrumb, title, description, stat chips, link to the other election. */
function ElectionIntro({ election }: { election: ElectionKey }) {
  const { t } = useLanguage()
  const cfg = CONFIG[election]
  const stats = statsFor(documentsForPage(election))
  const title = t(cfg.title)
  usePageMeta(`${title} 2026`, t('el.lede'))
  const Icon = cfg.icon

  return (
    <section className="container-page pt-8 sm:pt-10">
      <nav aria-label={t('el.crumb')} className="flex items-center gap-1 text-sm text-muted">
        <Link to="/" className="rounded-md transition-colors hover:text-accent">
          {t('nav.home')}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        <span aria-current="page" className="font-semibold text-ink">
          {t(cfg.crumb)}
        </span>
      </nav>
      <div className="mt-4 flex items-start gap-4">
        <span aria-hidden className={`hidden h-12 w-12 shrink-0 place-items-center rounded-2xl sm:grid ${cfg.tone}`}>
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {title} <span className="text-accent">2026</span>
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted">{t('el.lede')}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        {[
          [formatNumber(stats.files), t('el.stat.files')],
          [formatNumber(stats.pages), t('el.stat.pages')],
          [formatNumber(stats.both), t('el.stat.both')],
        ].map(([v, l]) => (
          <div key={l} className="flex items-baseline gap-2 rounded-full border border-line bg-surface px-4 py-1.5 shadow-soft">
            <span className="font-bold tabular-nums">{v}</span>
            <span className="text-sm text-muted">{l}</span>
          </div>
        ))}
        <Link to={cfg.other.to} className="btn-soft min-h-10 rounded-full px-4 text-sm">
          {t(cfg.other.label)}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  )
}

function RegisterIntro() {
  const { t } = useLanguage()
  return (
    <>
      {t('reg.introPage')}{' '}
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
  const docs = documentsForPage('zp-ps')
  const sections = DOC_SECTIONS.map((s) => ({ key: s.key, count: docs.filter((d) => d.section === s.key).length })).filter((s) => s.count)
  const forms = FEATURED_FORMS.map((id) => DOC_BY_ID[id]).filter((d) => d.pages.includes('zp-ps'))

  return (
    <>
      <ElectionIntro election="zp-ps" />

      <section className="container-page pt-10">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <nav aria-labelledby="by-type" className="panel p-5">
            <h2 id="by-type" className="font-bold">
              {t('el.sections')}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sections.map((s) => (
                <li key={s.key}>
                  <a href={`#${groupAnchor(s.key)}`} className="chip chip-off">
                    {sectionLabel(s.key, lang)}
                    <span className="rounded-full bg-surface-2 px-1.5 text-xs font-semibold text-muted tabular-nums">{s.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <aside aria-labelledby="start-title" className="panel p-5">
            <h2 id="start-title" className="font-bold">
              {t('el.start')}
            </h2>
            <ul className="mt-3 grid gap-2">
              <li>
                <Link to="/ro-margdarshan" className="group flex items-center gap-3 rounded-xl bg-accent-soft p-3 transition-colors hover:bg-accent hover:text-accent-ink">
                  <BookOpenCheck className="h-5 w-5 shrink-0 text-accent group-hover:text-accent-ink" aria-hidden />
                  <span className="flex-1 font-semibold">{t('home.res.guideTitle')}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
              {forms.map((f) => (
                <li key={f.id}>
                  <a href={f.fileUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl bg-surface-2 p-3 transition-colors hover:bg-accent-soft">
                    <span className="flex-1 font-semibold group-hover:text-accent">{docTitle(f, lang)}</span>
                    <span className="text-xs text-muted tabular-nums">
                      {f.pageCount} {t('common.pages')}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
                    <span className="sr-only">{t('common.newTab')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <DocumentRegister page="zp-ps" heading={t('reg.titlePage')} intro={<RegisterIntro />} />
    </>
  )
}

/* ============================== Sarpanch-Panch ============================== */

export function SarpanchPage() {
  const { t, lang } = useLanguage()

  return (
    <>
      <ElectionIntro election="sarpanch-panch" />

      <section aria-labelledby="sp-title" className="container-page pt-10">
        <div className="rounded-3xl bg-teal-soft p-4 sm:p-6">
          <h2 id="sp-title" className="text-xl font-bold sm:text-2xl">
            {t('el.sp.title')}
          </h2>
          <p className="mt-1.5 max-w-3xl text-muted">{t('el.sp.intro')}</p>
          <ol className="mt-5 grid gap-2.5">
            {SARPANCH_HIGHLIGHTS.map((h) => (
              <DocumentRow key={h.id} doc={DOC_BY_ID[h.id]} title={highlightTitle(h.id, lang)} />
            ))}
          </ol>
        </div>
      </section>

      <DocumentRegister page="sarpanch-panch" heading={t('reg.titlePage')} intro={<RegisterIntro />} />
    </>
  )
}
