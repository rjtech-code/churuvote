import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeProvider'
import { useLanguage } from '../i18n/LanguageProvider'

/** Round icon switch; aria-checked reflects dark mode. The icon spins in when the theme changes. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLanguage()
  const dark = theme === 'dark'
  const label = dark ? t('util.themeTo.light') : t('util.themeTo.dark')

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={label}
      title={label}
      onClick={toggle}
      className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-muted transition-[background-color,color,box-shadow,transform] duration-200 hover:bg-accent-soft hover:text-accent hover:shadow-[0_6px_16px_-8px_var(--c-glow)] active:scale-90"
    >
      {/* keyed so the icon re-mounts and plays its spin-in on each change */}
      <span key={theme} className="spin-in grid place-items-center">
        {dark ? <Sun className="h-[1.15rem] w-[1.15rem]" aria-hidden /> : <Moon className="h-[1.15rem] w-[1.15rem]" aria-hidden />}
      </span>
    </button>
  )
}
