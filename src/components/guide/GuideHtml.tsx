import type { MouseEvent } from 'react'
import { useLanguage } from '../../i18n/LanguageProvider'

/**
 * Renders a verbatim HTML fragment of the RO guide (bundled at build time from the source
 * and its translation, never user input). Handles the "copy" buttons, which copy the text
 * of the template whose id is in data-t.
 */
export function GuideHtml({ html }: { html: string }) {
  const { t } = useLanguage()

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
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

  return <div className="ref" onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
