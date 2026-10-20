import { useEffect, useRef, type MouseEvent } from 'react'
import { useLanguage } from '../../i18n/LanguageProvider'
import { enhanceTimelines, revealOnScroll } from '../../lib/motion'
import { toggleDetails } from '../../lib/accordion'

/**
 * Renders a verbatim HTML fragment of the RO guide (bundled at build time from the source
 * and its translation, never user input). Adds the scroll-synced timeline and gentle
 * reveal effects on top of the static markup, and handles the "copy" buttons.
 */
export function GuideHtml({ html }: { html: string }) {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const stopTimelines = enhanceTimelines(root)
    const blocks = Array.from(root.querySelectorAll(':scope > .tw, :scope > .note, :scope > .order, :scope > .grid > .card, :scope > .ladder > .rung, :scope > details'))
    const stopReveal = revealOnScroll(blocks)
    return () => {
      stopTimelines()
      stopReveal()
    }
  }, [html])

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    // expandable blocks inside the guide get the same smooth accordion as the FAQ
    const summary = (e.target as HTMLElement).closest('summary')
    if (summary && summary.parentElement instanceof HTMLDetailsElement && ref.current?.contains(summary)) {
      e.preventDefault()
      toggleDetails(summary.parentElement)
      return
    }
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button.copy')
    if (!btn) return
    const el = document.getElementById(btn.dataset.t ?? '')
    if (!el) return
    const old = btn.textContent
    const show = (msg: string, ms: number) => {
      btn.textContent = msg
      setTimeout(() => (btn.textContent = old), ms)
    }
    const select = () => {
      const r = document.createRange()
      r.selectNodeContents(el)
      const s = getSelection()
      s?.removeAllRanges()
      s?.addRange(r)
      show(t('guide.selected'), 2500)
    }
    if (navigator.clipboard) navigator.clipboard.writeText(el.innerText).then(() => show(t('guide.copied'), 1500), select)
    else select()
  }

  return <div ref={ref} className="ref" onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
