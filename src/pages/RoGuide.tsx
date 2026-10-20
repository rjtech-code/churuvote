import { useEffect, useRef } from 'react'
import { ArrowRight, Scale } from 'lucide-react'
import { Link } from 'react-router'
import { CompactHero } from '../components/CompactHero'
import { ProcedurePreviewVisual } from '../components/HeroVisuals'
import { SectionNav } from '../components/SectionNav'
import { GuideHtml } from '../components/guide/GuideHtml'
import { Checklist, FAQSection, LegalTable, LettersTable, S19Table } from '../components/guide/Widgets'
import type { GuideWidget } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { usePageMeta } from '../i18n/usePageMeta'
import { faqCount, guideSections, sourceNote } from '../lib/guide'
import { revealOnScroll } from '../lib/motion'

/** Sections shown in the hero's procedure preview (existing section ids, in procedure order). */
const PREVIEW_STEPS = ['nomination', 'scrutiny', 'final', 'symbol']

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
  const previewSteps = PREVIEW_STEPS.map((id) => items.find((i) => i.id === id)).filter((i): i is { id: string; label: string } => !!i)

  // section headings fade in once as they scroll into view
  const articleRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const root = articleRef.current
    if (!root) return
    return revealOnScroll(Array.from(root.querySelectorAll(':scope > section > div:first-child')))
  }, [lang])

  const jumps = [
    { id: 'process', label: t('guide.jump.process') },
    { id: 'checklist', label: t('guide.jump.checklist') },
    { id: 'letters', label: t('guide.jump.letters') },
    { id: 'faq', label: t('guide.jump.faq', { n: faqCount }) },
  ]

  return (
    <>
      <CompactHero
        crumb={t('nav.guide')}
        title={t('guide.title')}
        description={t('guide.lede')}
        visual={<ProcedurePreviewVisual steps={previewSteps} />}
        actions={jumps.map((j, i) => (
          <a key={j.id} href={`#${j.id}`} className={i === 0 ? 'btn-primary' : 'btn-soft'}>
            {j.label}
            {i === 0 && <ArrowRight className="h-4 w-4" aria-hidden />}
          </a>
        ))}
      />

      {/* source + official disclaimer: kept visible, as one compact callout */}
      <div className="container-page pt-6">
        <div className="flex gap-3 rounded-2xl bg-bad-soft p-4 text-sm">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-bad" aria-hidden />
          <div className="grid gap-1.5">
            <p>
              <b className="text-bad">{t('guide.meta.status')}</b> <span dangerouslySetInnerHTML={{ __html: t('guide.meta.statusValue') }} />
            </p>
            <p className="text-muted">
              <b className="text-ink">{t('guide.meta.basis')}</b> <span dangerouslySetInnerHTML={{ __html: t('guide.meta.basisValue') }} />{' '}
              <b className="text-ink">{t('guide.meta.guidance')}</b> {t('guide.meta.guidanceValue')}
            </p>
            {translationNote && <p className="text-muted">{translationNote}</p>}
          </div>
        </div>
      </div>

      <div className="container-page mt-6 lg:mt-10">
        <div className="lg:hidden">
          <SectionNav items={items} variant="dropdown" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <SectionNav items={items} variant="sidebar" />
          </div>

          <article ref={articleRef} className="min-w-0">
            {sections.map((s, idx) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-36 pb-10 outline-none lg:scroll-mt-24">
                <div className={`flex items-start gap-3 ${idx ? 'border-t border-line pt-8' : ''}`}>
                  <span aria-hidden className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-grad-from to-grad-to text-sm font-bold text-accent-ink tabular-nums shadow-[0_6px_14px_-8px_var(--c-glow)]">
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 id={`${s.id}-h`} className="text-xl font-bold leading-snug sm:text-2xl">
                      {s.title}
                    </h2>
                    {s.tags.length > 0 && (
                      <p className="mt-1.5 flex flex-wrap gap-1.5">
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

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4">
              <p className="font-semibold">{t('guide.back.title')}</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/" className="btn-primary min-h-10 text-sm">
                  {t('guide.back.home')}
                </Link>
                <Link to="/#files" className="btn-soft min-h-10 text-sm">
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
