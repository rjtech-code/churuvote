import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { prefersReducedMotion } from '../lib/hooks'

/**
 * Global floating "Go to Top" / "ऊपर जाएँ" button. Appears once the page's first section
 * (its hero) has scrolled out of view, hides again at the top. Scrolls the current page only:
 * route, query string, filters, search text and the chosen view are untouched.
 */
export function BackToTop() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Visible once the current page's first block (its hero) is above the viewport. The hero
    // is looked up live on each frame because lazily loaded pages replace it after mount.
    let frame = 0
    const check = () => {
      frame = 0
      const hero = document.querySelector('#main > *')
      setVisible(hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 600)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
        // keyboard / screen-reader users continue from the top of the page content
        document.getElementById('main')?.focus({ preventScroll: true })
      }}
      className="fade-in btn-primary fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 min-h-11 rounded-full px-4 text-sm shadow-lg"
    >
      <ArrowUp className="h-4 w-4" aria-hidden />
      {t('top.label')}
    </button>
  )
}
