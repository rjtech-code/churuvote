import { useEffect } from 'react'
import { useLanguage } from './LanguageProvider'

/** Sets the document title and meta description in the active language. */
export function usePageMeta(title: string | null, description?: string) {
  const { t } = useLanguage()
  const site = t('site.title')
  const subtitle = t('site.subtitle')
  const fallback = t('site.description')
  useEffect(() => {
    document.title = title ? `${title} | ${site}` : `${site} — ${subtitle}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description ?? fallback)
  }, [title, description, site, subtitle, fallback])
}
