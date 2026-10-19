import { ArrowRight, SearchX } from 'lucide-react'
import { Link } from 'react-router'
import { useLanguage } from '../i18n/LanguageProvider'
import { usePageMeta } from '../i18n/usePageMeta'

export function NotFound() {
  const { t } = useLanguage()
  usePageMeta(t('nf.title'), t('nf.text'))

  return (
    <section className="container-page py-16 sm:py-24">
      <div className="panel mx-auto grid max-w-xl place-items-center p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
          <SearchX className="h-7 w-7" aria-hidden />
        </span>
        <p className="mt-4 font-mono text-sm text-muted">404</p>
        <h1 className="mt-1 text-3xl font-bold">{t('nf.title')}</h1>
        <p className="mt-2 text-muted">{t('nf.text')}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <Link to="/" className="btn-primary">
            {t('nav.home')}
          </Link>
          <Link to="/#files" className="btn-soft">
            {t('nav.files')}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
