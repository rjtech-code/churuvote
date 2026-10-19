import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Check, Download, ExternalLink, FileText, Share2 } from 'lucide-react'
import { BIG_FILE_BYTES } from '../data/documents.generated'
import type { DocItem } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { DOC_BY_ID, docTitle, electionName, formatSize, groupLabel, typeLabel } from '../lib/documents'

interface Props {
  doc: DocItem
  /** Override title (Sarpanch-Panch highlight names), already in the active language. */
  title?: string
  showDuplicates?: boolean
  showBoth?: boolean
  showElection?: boolean
  anchor?: boolean
  as?: 'li' | 'div'
}

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

const actionBase = 'inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors duration-150'

/** Open / Download / Share for an available document; a plain notice otherwise. */
export function DocumentActions({ doc, title }: { doc: DocItem; title: string }) {
  const { t } = useLanguage()
  const { copied, share } = useShare(doc)
  if (!doc.available || !doc.fileUrl) return <span className="text-sm font-semibold text-warn">{t('reg.unavailable')}</span>
  return (
    <div className="flex flex-wrap gap-1.5">
      <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className={`${actionBase} bg-accent text-accent-ink hover:bg-accent-strong`}>
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        {t('reg.open')}
        <span className="sr-only">
          : {title} {t('common.newTab')}
        </span>
      </a>
      <a href={doc.fileUrl} download={doc.originalFileName} className={`${actionBase} bg-surface-2 text-ink hover:bg-accent-soft hover:text-accent`}>
        <Download className="h-3.5 w-3.5" aria-hidden />
        {t('reg.download')}
        <span className="sr-only">: {title}</span>
      </a>
      <button type="button" onClick={() => share(title)} className={`${actionBase} bg-surface-2 text-ink hover:bg-accent-soft hover:text-accent`}>
        {copied ? <Check className="h-3.5 w-3.5 text-ok" aria-hidden /> : <Share2 className="h-3.5 w-3.5" aria-hidden />}
        <span aria-live="polite">{copied ? t('reg.copied') : t('reg.share')}</span>
        <span className="sr-only">: {title}</span>
      </button>
    </div>
  )
}

/** A compact rounded document row: preview, title, small labels, size/pages, actions. */
export function DocumentRow({ doc, title, showDuplicates, showBoth, showElection, anchor, as: Tag = 'li' }: Props) {
  const { t, lang } = useLanguage()
  const shown = title ?? docTitle(doc, lang)
  const original = lang === 'en' && shown !== doc.title ? doc.title : null
  const dups = showDuplicates ? doc.duplicates.map((id) => DOC_BY_ID[id]).filter(Boolean) : []

  return (
    <Tag
      id={anchor ? `f-${doc.id}` : undefined}
      className="group flex scroll-mt-24 gap-3.5 rounded-2xl border border-line bg-surface p-3 outline-none transition-colors duration-150 hover:border-accent/40 hover:bg-accent-soft/40 sm:p-3.5"
    >
      {doc.available && doc.thumbnailUrl ? (
        <a
          href={doc.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className="block h-[4.25rem] w-[3.4rem] shrink-0 overflow-hidden rounded-lg border border-line bg-surface-2"
        >
          <img src={doc.thumbnailUrl} alt="" loading="lazy" width={54} height={68} className="h-full w-full object-cover object-top" />
        </a>
      ) : (
        <span aria-hidden className="grid h-[4.25rem] w-[3.4rem] shrink-0 place-items-center rounded-lg bg-surface-2 text-muted">
          <FileText className="h-5 w-5" />
        </span>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <div className="min-w-0 flex-1">
          <h4 className="leading-snug font-semibold break-words text-ink">
            {doc.number && !title && <span className="mr-1.5 rounded-md bg-surface-2 px-1.5 py-px font-mono text-xs text-muted">{doc.number}</span>}
            {shown}
          </h4>
          {original && (
            <p lang="hi" className="mt-0.5 text-sm text-muted">
              {original}
            </p>
          )}
          <p className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs">
            {showElection && <span className="rounded-full bg-surface-2 px-2 py-0.5 font-medium text-muted">{electionName(doc.election, lang)}</span>}
            <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent">{typeLabel(doc.documentType, lang)}</span>
            <span className="text-muted tabular-nums">
              {doc.pageCount} {t('common.pages')} · {formatSize(doc.fileSize)}
            </span>
            {showBoth && doc.usefulForBoth && <span className="rounded-full bg-teal-soft px-2 py-0.5 font-semibold text-teal-ink">{t('reg.both')}</span>}
            {doc.fileSize >= BIG_FILE_BYTES && <span className="rounded-full bg-warn-soft px-2 py-0.5 font-semibold text-warn">{t('reg.big')}</span>}
            {doc.isNew && <span className="rounded-full bg-accent px-2 py-0.5 font-semibold text-accent-ink">{t('reg.new')}</span>}
          </p>
          {dups.length > 0 && (
            <p className="mt-1.5 text-xs text-muted">
              {t('reg.dupBefore')}{' '}
              {dups.map((d, i) => (
                <span key={d.id}>
                  {i > 0 && ', '}
                  <Link to={{ pathname: '/', hash: `#f-${d.id}` }} className="text-accent underline underline-offset-2">
                    {electionName(d.election, lang)} › {groupLabel(d.group, lang)}
                  </Link>
                </span>
              ))}
              {t('reg.dupAfter') && ` ${t('reg.dupAfter')}`}
            </p>
          )}
        </div>
        <div className="shrink-0">
          <DocumentActions doc={doc} title={shown} />
        </div>
      </div>
    </Tag>
  )
}
