import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeProvider'
import { useLanguage } from '../i18n/LanguageProvider'

/** Round icon switch; aria-checked reflects dark mode. */
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
      className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
    >
      {dark ? <Sun className="h-[1.15rem] w-[1.15rem]" aria-hidden /> : <Moon className="h-[1.15rem] w-[1.15rem]" aria-hidden />}
    </button>
  )
}
