import { ArrowRight, ChevronRight, Scale } from 'lucide-react'
import { Link } from 'react-router'
import { SectionNav } from '../components/SectionNav'
import { GuideHtml } from '../components/guide/GuideHtml'
import { Checklist, FAQSection, LegalTable, LettersTable, S19Table } from '../components/guide/Widgets'
import type { GuideWidget } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { usePageMeta } from '../i18n/usePageMeta'
import { faqCount, guideSections, sourceNote } from '../lib/guide'

const WIDGETS: Record<GuideWidget, () => React.JSX.Element> = {
  s19: S19Table,
  checklist: Checklist,
  faq: FAQSection,
  refs: LegalTable,
  letters: LettersTable,
}

export function RoGuide() {
  const { t, lang } = useLanguage()
  usePageMeta(t('guide.metaTitle'), t('guide.lede'))
  const sections = guideSections(lang)
  const items = sections.map((s) => ({ id: s.id, label: s.navLabel }))
  const translationNote = t('guide.translationNote')

  const jumps = [
    { id: 'process', label: t('guide.jump.process') },
    { id: 'checklist', label: t('guide.jump.checklist') },
    { id: 'letters', label: t('guide.jump.letters') },
    { id: 'faq', label: t('guide.jump.faq', { n: faqCount }) },
  ]

  return (
    <>
      <section className="container-page pt-8 sm:pt-10">
        <nav aria-label={t('el.crumb')} className="flex items-center gap-1 text-sm text-muted">
          <Link to="/" className="rounded-md transition-colors hover:text-accent">
            {t('nav.home')}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <span aria-current="page" className="font-semibold text-ink">
            {t('nav.guide')}
          </span>
        </nav>
        <span className="kicker mt-4">{t('guide.kicker')}</span>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">{t('guide.title')}</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">{t('guide.lede')}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {jumps.map((j, i) => (
            <a key={j.id} href={`#${j.id}`} className={i === 0 ? 'btn-primary' : 'btn-soft'}>
              {j.label}
              {i === 0 && <ArrowRight className="h-4 w-4" aria-hidden />}
            </a>
          ))}
        </div>

        {/* source and disclaimer */}
        <div className="mt-6 grid gap-3 md:grid-cols-[1fr_1.25fr]">
          <div className="rounded-2xl bg-surface-2 p-4 text-[0.93rem]">
            <p>
              <b>{t('guide.meta.guidance')}</b> {t('guide.meta.guidanceValue')}
            </p>
            <p className="mt-2 text-muted">
              <b className="text-ink">{t('guide.meta.basis')}</b> <span dangerouslySetInnerHTML={{ __html: t('guide.meta.basisValue') }} />
            </p>
          </div>
          <div className="flex gap-3 rounded-2xl bg-bad-soft p-4 text-[0.93rem]">
            <Scale className="mt-0.5 h-5 w-5 shrink-0 text-bad" aria-hidden />
            <p>
              <b className="text-bad">{t('guide.meta.status')}</b> <span dangerouslySetInnerHTML={{ __html: t('guide.meta.statusValue') }} />
            </p>
          </div>
        </div>
        {translationNote && <p className="mt-3 rounded-2xl bg-warn-soft p-4 text-sm">{translationNote}</p>}
      </section>

      <div className="container-page mt-6 lg:mt-10">
        <div className="lg:hidden">
          <SectionNav items={items} variant="dropdown" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <SectionNav items={items} variant="sidebar" />
          </div>

          <article className="min-w-0">
            {sections.map((s, idx) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-36 pb-10 outline-none lg:scroll-mt-24">
                <div className={`flex items-start gap-3 ${idx ? 'border-t border-line pt-8' : ''}`}>
                  <span aria-hidden className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-sm font-bold text-accent tabular-nums">
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 id={`${s.id}-h`} className="text-2xl font-bold leading-snug">
                      {s.title}
                    </h2>
                    {s.tags.length > 0 && (
                      <p className="mt-2 flex flex-wrap gap-1.5">
                        {s.tags.map((tag) => (
                          <span key={tag} className="rule-tag">
                            {tag}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  {s.parts.map((p, i) => {
                    if ('html' in p) return <GuideHtml key={`${lang}-${i}`} html={p.html} />
                    const Widget = WIDGETS[p.widget]
                    return <Widget key={i} />
                  })}
                </div>
              </section>
            ))}

            <div className="panel flex flex-wrap items-center justify-between gap-4 p-5">
              <p>
                <b className="block text-lg">{t('guide.back.title')}</b>
                <small className="text-muted">{t('guide.back.text')}</small>
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link to="/" className="btn-primary">
                  {t('guide.back.home')}
                </Link>
                <Link to="/#files" className="btn-soft">
                  {t('guide.back.files')}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <p className="mt-5 max-w-4xl text-sm text-muted" dangerouslySetInnerHTML={{ __html: sourceNote(lang) }} />
          </article>
        </div>
      </div>
    </>
  )
}
