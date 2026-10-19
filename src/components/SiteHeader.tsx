import { useEffect, useRef, useState } from 'react'
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
    <span aria-hidden className={`grid shrink-0 place-items-center rounded-xl bg-accent font-bold text-accent-ink shadow-sm ${className}`}>
      S
    </span>
  )
}

export function Identity() {
  const { t } = useLanguage()
  return (
    <Link to="/" aria-label={t('site.home', { title: t('site.logo') })} className="flex min-w-0 items-center gap-3 rounded-xl">
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
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => setOpen(false), [key])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  // Re-clicking "All files" while already at /#files doesn't change the route, so scroll directly.
  const onNav = (to: string) => {
    const [path, anchor] = to.split('#')
    if (anchor && pathname === path && hash === `#${anchor}`) scrollToId(anchor)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/85 shadow-[0_1px_12px_-6px_rgb(0_0_0/0.12)] backdrop-blur-md">
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
                    className={`rounded-full px-3.5 py-2 text-[0.93rem] font-semibold transition-colors duration-150 ${
                      active ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface-2 hover:text-ink'
                    }`}
                  >
                    {t(item.key)}
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
          <div className="sm:hidden">
            <LanguageToggle compact />
          </div>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
            className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-ink transition-colors hover:bg-accent-soft hover:text-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div ref={panelRef} id="mobile-menu" className="fade-in border-t border-line bg-surface lg:hidden">
          <nav aria-label={t('nav.mobileLabel')} className="container-page py-3">
            <ul className="grid gap-1">
              {[{ key: 'nav.home' as TranslationKey, to: '/', icon: null }, ...NAV_ITEMS].map((item) => {
                const active = item.to === '/' ? pathname === '/' && hash !== '#files' : isActive(item.to, pathname, hash)
                const Icon = item.icon
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => onNav(item.to)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-12 items-center gap-3 rounded-xl px-3 font-semibold transition-colors ${
                        active ? 'bg-accent-soft text-accent' : 'text-ink hover:bg-surface-2'
                      }`}
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface-2 text-muted">
                        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : <span className="text-sm font-bold">S</span>}
                      </span>
                      {t(item.key)}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {/* on the smallest screens the theme switch lives here instead of the bar */}
            <div className="mt-2 flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2 sm:hidden">
              <span className="text-sm font-semibold text-muted">{t('util.theme')}</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
