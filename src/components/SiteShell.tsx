import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { scrollToId } from '../lib/hooks'
import { DisclaimerText, SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

/** Scrolls to the URL hash target after navigation, or to the top for plain page changes. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let tries = 0
    const attempt = () => {
      if (!scrollToId(id) && tries++ < 30) frame = requestAnimationFrame(attempt)
    }
    frame = requestAnimationFrame(attempt)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}

export function SiteShell() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollManager />
      <SiteHeader />
      <div className="container-page pt-4">
        <DisclaimerText className="rounded-xl bg-warn-soft px-4 py-2 text-xs leading-relaxed text-ink sm:text-[0.8rem]" />
      </div>
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
