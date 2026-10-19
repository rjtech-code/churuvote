import { ArrowRight, ArrowUpRight, BookOpenCheck, FileText, FolderOpen, Landmark, Users, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { DocumentRegister } from '../components/DocumentRegister'
import { DOCUMENTS, FEATURED_FORMS } from '../data/documents.generated'
import { GUIDE_SECTION_COUNT } from '../data/guideMeta'
import { useLanguage } from '../i18n/LanguageProvider'
import { usePageMeta } from '../i18n/usePageMeta'
import { DOC_BY_ID, docTitle, documentsForPage, electionName, formatNumber, formatSize, statsFor } from '../lib/documents'

const total = statsFor(DOCUMENTS)
const zpps = statsFor(documentsForPage('zp-ps'))
const panch = statsFor(documentsForPage('sarpanch-panch'))

interface Panel {
  to: string
  icon: LucideIcon
  title: string
  text: string
  badge: string
  action: string
  tone: string
}

export function Home() {
  const { t, lang } = useLanguage()
  usePageMeta(null)
  const forms = FEATURED_FORMS.map((id) => DOC_BY_ID[id])

  const panels: Panel[] = [
    {
      to: '/zp-ps',
      icon: Landmark,
      title: t('home.index.zpps'),
      text: t('home.index.zpps.topics'),
      badge: t('home.panel.files.count', { n: zpps.files }),
      action: t('common.openPage'),
      tone: 'bg-accent-soft text-accent',
    },
    {
      to: '/sarpanch-panch',
      icon: Users,
      title: t('home.index.panch'),
      text: t('home.index.panch.topics'),
      badge: t('home.panel.files.count', { n: panch.files }),
      action: t('common.openPage'),
      tone: 'bg-teal-soft text-teal-ink',
    },
    {
      to: '/ro-margdarshan',
      icon: BookOpenCheck,
      title: t('home.res.guideTitle'),
      text: t('home.panel.guide.text'),
      badge: t('home.panel.guide.count', { n: GUIDE_SECTION_COUNT }),
      action: t('home.res.guideCta'),
      tone: 'bg-warn-soft text-warn',
    },
    {
      to: '/#files',
      icon: FolderOpen,
      title: t('reg.titleHome'),
      text: t('home.panel.files.text', { n: total.files }),
      badge: t('home.panel.files.count', { n: total.files }),
      action: t('home.ctaFiles'),
      tone: 'bg-surface-2 text-ink',
    },
  ]

  return (
    <>
      {/* compact introduction */}
      <section className="container-page pt-8 sm:pt-12">
        <span className="kicker">{t('home.kicker')}</span>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">{t('home.title')}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{t('home.lede')}</p>

        <dl aria-label={t('home.statsLabel')} className="mt-6 flex flex-wrap gap-2.5">
          {[
            [formatNumber(total.files), t('home.stat.files')],
            [formatNumber(total.pages), t('home.stat.pages')],
            ['2', t('home.stat.elections')],
          ].map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-2 rounded-full border border-line bg-surface px-4 py-1.5 shadow-soft">
              <dd className="font-bold tabular-nums">{v}</dd>
              <dt className="text-sm text-muted">{l}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Link to="/ro-margdarshan" className="btn-primary">
            {t('home.ctaGuide')}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/#files" className="btn-soft">
            {t('home.ctaFiles')}
          </Link>
        </div>
      </section>

      {/* category panels */}
      <section aria-labelledby="panels-title" className="container-page pt-12">
        <h2 id="panels-title" className="sr-only">
          {t('home.panels.title')}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {panels.map((p) => {
            const Icon = p.icon
            return (
              <li key={p.to}>
                <Link
                  to={p.to}
                  className="panel group flex h-full flex-col p-5 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${p.tone}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-semibold text-muted">{p.badge}</span>
                  </div>
                  <h3 className="mt-4 font-bold leading-snug">{p.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {p.action}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      {/* important resources */}
      <section aria-labelledby="res-title" className="container-page pt-14">
        <h2 id="res-title" className="text-2xl font-bold">
          {t('home.res.title')}
        </h2>
        <p className="mt-1 text-muted">{t('home.res.intro')}</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <Link to="/ro-margdarshan" className="group flex flex-col rounded-2xl bg-accent p-6 text-accent-ink shadow-soft transition-colors hover:bg-accent-strong">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent-ink/15 px-3 py-1 text-xs font-semibold">
              <BookOpenCheck className="h-3.5 w-3.5" aria-hidden />
              {t('home.res.guideTag')}
            </span>
            <span className="mt-4 text-xl font-bold">{t('home.res.guideTitle')}</span>
            <span className="mt-2 opacity-90">{t('home.res.guideText')}</span>
            <span className="mt-5 inline-flex items-center gap-1.5 self-start rounded-xl bg-accent-ink px-4 py-2 text-sm font-semibold text-accent">
              {t('home.res.guideCta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>

          <div className="panel p-4">
            <h3 className="flex items-center gap-2 px-1 text-sm font-semibold text-muted">
              <FileText className="h-4 w-4" aria-hidden />
              {t('home.res.forms')}
            </h3>
            <ul className="mt-3 grid gap-2">
              {forms.map((f) => {
                const title = docTitle(f, lang)
                return (
                  <li key={f.id}>
                    {f.available ? (
                      <a
                        href={f.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl bg-surface-2 p-2.5 transition-colors hover:bg-accent-soft"
                      >
                        {f.thumbnailUrl && <img src={f.thumbnailUrl} alt="" loading="lazy" width={40} height={50} className="h-12 w-10 shrink-0 rounded-md border border-line object-cover object-top" />}
                        <span className="min-w-0 flex-1">
                          <b className="block leading-snug group-hover:text-accent">{title}</b>
                          <small className="text-muted">
                            {electionName(f.election, lang)} · {f.pageCount} {t('common.pages')} · {formatSize(f.fileSize)}
                          </small>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                        <span className="sr-only">{t('common.newTab')}</span>
                      </a>
                    ) : (
                      <p className="rounded-xl bg-surface-2 p-3">
                        <b>{title}</b> <small className="text-warn">{t('reg.unavailable')}</small>
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <DocumentRegister heading={t('reg.titleHome')} intro={t('reg.introHome')} />
    </>
  )
}
