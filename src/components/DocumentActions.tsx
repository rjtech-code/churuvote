import { useEffect, useState } from 'react'
import { Check, Download, ExternalLink, Share2 } from 'lucide-react'
import type { DocItem } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'

function useShare(doc: DocItem) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  const share = async (title: string) => {
    if (!doc.fileUrl) return
    const url = new URL(doc.fileUrl, window.location.origin).href
    if (navigator.share) {
      try {
        await navigator.share({ title, text: t('reg.shareText', { title }), url })
      } catch {
        // dismissed
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      window.prompt(t('reg.sharePrompt'), url)
    }
  }
  return { copied, share }
}

const iconBtn =
  'grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent'

/** Compact actions: labelled Open, icon-only Download and Share (with accessible names and tooltips). */
export function DocumentActions({ doc, title, compact = false }: { doc: DocItem; title: string; compact?: boolean }) {
  const { t } = useLanguage()
  const { copied, share } = useShare(doc)
  if (!doc.available || !doc.fileUrl) return <span className="text-xs font-semibold text-warn">{t('reg.unavailable')}</span>

  return (
    <div className="flex items-center gap-0.5">
      {!compact && (
        <a
          href={doc.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-accent-soft px-3 text-sm font-semibold text-accent transition-colors duration-150 hover:bg-accent hover:text-accent-ink"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          {t('reg.open')}
          <span className="sr-only">
            : {title} {t('common.newTab')}
          </span>
        </a>
      )}
      <a href={doc.fileUrl} download={doc.originalFileName} className={`relative z-10 ${iconBtn}`} title={t('reg.download')}>
        <Download className="h-4 w-4" aria-hidden />
        <span className="sr-only">
          {t('reg.download')}: {title}
        </span>
      </a>
      <button type="button" onClick={() => share(title)} className={`relative z-10 ${iconBtn}`} title={copied ? t('reg.copied') : t('reg.share')}>
        {copied ? <Check className="h-4 w-4 text-ok" aria-hidden /> : <Share2 className="h-4 w-4" aria-hidden />}
        <span className="sr-only" aria-live="polite">
          {copied ? t('reg.copied') : `${t('reg.share')}: ${title}`}
        </span>
      </button>
    </div>
  )
}
