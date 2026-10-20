import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router'
import { BookOpenCheck, FolderOpen, Landmark, Menu, Users, X, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { scrollToId } from '../lib/hooks'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

export const SEC_URL = 'https://sec.rajasthan.gov.in/'

export const NAV_ITEMS: { key: TranslationKey; to: string; icon: LucideIcon }[] = [
  { key: 'nav.zpps', to: '/zp-ps', icon: Landmark },
  { key: 'nav.panch', to: '/sarpanch-panch', icon: Users },
  { key: 'nav.guide', to: '/ro-margdarshan', icon: BookOpenCheck },
  { key: 'nav.files', to: '/#files', icon: FolderOpen },
]

function isActive(to: string, pathname: string, hash: string) {
  const [path, anchor] = to.split('#')
  if (anchor) return pathname === path && hash === `#${anchor}`
  return pathname === path
}

export function LogoMark({ className = 'h-10 w-10 text-lg' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-grad-from to-grad-to font-bold text-accent-ink shadow-[0_6px_16px_-8px_var(--c-glow)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${className}`}
    >
      S
    </span>
  )
}

export function Identity() {
  const { t } = useLanguage()
  return (
    <Link to="/" aria-label={t('site.home', { title: t('site.logo') })} className="group flex min-w-0 items-center gap-3 rounded-xl">
      <LogoMark />
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-[0.95rem] font-bold tracking-tight text-ink sm:text-base">{t('site.logo')}</span>
        <span className="block truncate text-xs text-muted">{t('site.subtitle')}</span>
      </span>
    </Link>
  )
}

export function DisclaimerText({ className = '' }: { className?: string }) {
  const { t } = useLanguage()
  return (
    <p className={className}>
      <b className="font-semibold text-ink">{t('disc.title')}</b> {t('disc.text')}{' '}
      <a href={SEC_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline underline-offset-2">
        sec.rajasthan.gov.in
      </a>
    </p>
  )
}

export function SiteHeader() {
  const { t } = useLanguage()
  const { pathname, hash, key } = useLocation()
  const [open, setOpen] = useState(false)
  // the menu stays mounted while its closing animation plays, then unmounts
  const [rendered, setRendered] = useState(false)
  const [shown, setShown] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [key])

  useEffect(() => {
    if (open) {
      setRendered(true)
      // next frame, so the panel starts from its closed state and transitions in
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)))
      return () => cancelAnimationFrame(raf)
    }
    setShown(false)
    const done = window.setTimeout(() => setRendered(false), 340)
    return () => clearTimeout(done)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    // lock page scroll behind the overlay, keeping the scrollbar's space so nothing shifts
    const root = document.documentElement
    const gap = window.innerWidth - root.clientWidth
    const prev = { overflow: root.style.overflow, pad: root.style.paddingRight }
    root.style.overflow = 'hidden'
    if (gap > 0) root.style.paddingRight = `${gap}px`
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      root.style.overflow = prev.overflow
      root.style.paddingRight = prev.pad
    }
  }, [open])

  // Re-clicking "All files" while already at /#files doesn't change the route, so scroll directly.
  const onNav = (to: string) => {
    const [path, anchor] = to.split('#')
    if (anchor && pathname === path && hash === `#${anchor}`) scrollToId(anchor)
    setOpen(false)
  }

  return (
    <header className="header-glow sticky top-0 z-40 border-b border-line bg-surface/80 shadow-[0_8px_24px_-18px_var(--c-glow)] backdrop-blur-md backdrop-saturate-150">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {t('nav.skip')}
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Identity />

        <nav aria-label={t('nav.label')} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.to, pathname, hash)
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => onNav(item.to)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative inline-flex rounded-full px-3.5 py-2 text-[0.93rem] font-semibold transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[0.97] ${
                      active
                        ? 'bg-gradient-to-b from-accent-soft to-accent-tint text-accent shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--c-accent)_22%,transparent)]'
                        : 'text-muted hover:bg-surface-2 hover:text-ink'
                    }`}
                  >
                    {t(item.key)}
                    {/* small indicator under the active page */}
                    <span
                      aria-hidden
                      className={`absolute -bottom-[0.55rem] left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-2 to-accent transition-[opacity,transform] duration-300 ${
                        active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          {/* below 360px the language switch moves into the menu */}
          <div className="hidden min-[360px]:block sm:hidden">
            <LanguageToggle compact />
          </div>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
            className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-ink transition-[background-color,color,transform] duration-200 hover:bg-accent-soft hover:text-accent active:scale-95 lg:hidden"
          >
            <span key={open ? 'x' : 'menu'} className="spin-in grid place-items-center">
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </span>
          </button>
        </div>
      </div>

      {rendered && (
        <>
          {/* overlay below the bar: tapping it closes the menu (positioned inside the header,
              whose backdrop-filter makes it the containing block) */}
          <div aria-hidden data-state={shown ? 'open' : 'closed'} onClick={() => setOpen(false)} className="menu-backdrop absolute inset-x-0 top-full h-[100dvh] bg-ink/25 lg:hidden" />
          <div
            id="mobile-menu"
            data-state={shown ? 'open' : 'closed'}
            inert={!open}
            className="menu-panel absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-y border-line bg-surface shadow-[0_24px_40px_-24px_var(--c-glow)] lg:hidden"
          >
          <nav aria-label={t('nav.mobileLabel')} className="container-page py-3">
            <ul className="grid gap-1">
              {[{ key: 'nav.home' as TranslationKey, to: '/', icon: null }, ...NAV_ITEMS].map((item, i) => {
                const active = item.to === '/' ? pathname === '/' && hash !== '#files' : isActive(item.to, pathname, hash)
                const Icon = item.icon
                return (
                  <li key={item.to} className="menu-item" style={{ '--i': i } as CSSProperties}>
                    <Link
                      to={item.to}
                      onClick={() => onNav(item.to)}
                      aria-current={active ? 'page' : undefined}
                      className={`group flex min-h-12 items-center gap-3 rounded-xl px-3 font-semibold transition-colors duration-200 ${
                        active ? 'bg-gradient-to-r from-accent-soft to-accent-tint text-accent' : 'text-ink hover:bg-surface-2'
                      }`}
                    >
                      <span className="icon-chip grid h-8 w-8 place-items-center rounded-lg bg-surface-2 text-muted group-hover:text-accent">
                        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : <span className="text-sm font-bold">S</span>}
                      </span>
                      {t(item.key)}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {/* on the smallest screens the language and theme switches live here instead of the bar */}
            <div className="menu-item mt-2 flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-3 py-2 min-[360px]:hidden" style={{ '--i': 5 } as CSSProperties}>
              <span className="text-sm font-semibold text-muted">{t('util.language')}</span>
              <LanguageToggle compact />
            </div>
            <div className="menu-item mt-2 flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2 sm:hidden" style={{ '--i': 6 } as CSSProperties}>
              <span className="text-sm font-semibold text-muted">{t('util.theme')}</span>
              <ThemeToggle />
            </div>
          </nav>
          </div>
        </>
      )}
    </header>
  )
}
