import { Link } from 'react-router'
import { DOCUMENTS } from '../data/documents.generated'
import { useLanguage } from '../i18n/LanguageProvider'
import { formatSize, statsFor } from '../lib/documents'
import { DisclaimerText, Identity, NAV_ITEMS } from './SiteHeader'

const total = statsFor(DOCUMENTS)

export function SiteFooter() {
  const { t } = useLanguage()
  const langNote = t('foot.langNote')
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-10 md:grid-cols-[1.3fr_0.8fr_1.4fr]">
        <div>
          <Identity />
          <p className="mt-4 max-w-sm text-sm text-muted">{t('site.description')}</p>
        </div>
        <nav aria-label={t('foot.pages')}>
          <h2 className="text-sm font-semibold text-ink">{t('foot.pages')}</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {[{ key: 'nav.home' as const, to: '/' }, ...NAV_ITEMS].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted transition-colors hover:text-accent">
                  {t(n.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid content-start gap-3 text-sm text-muted">
          <h2 className="text-sm font-semibold text-ink">{t('foot.about')}</h2>
          <p>{t('foot.pdfNote')}</p>
          {langNote && <p>{langNote}</p>}
          <DisclaimerText />
          <p className="font-mono text-xs">{t('foot.collection', { files: total.files, size: formatSize(total.bytes) })}</p>
        </div>
      </div>
    </footer>
  )
}
