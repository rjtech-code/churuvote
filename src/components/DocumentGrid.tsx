import type { CSSProperties } from 'react'
import { FileText } from 'lucide-react'
import type { DocItem } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { docTitle, formatSize, typeLabel } from '../lib/documents'
import { DocumentActions } from './DocumentActions'
import type { DocGroupView } from './DocumentTable'

/**
 * One document card: real preview (or a PDF icon), the title (opens the PDF), one quiet
 * meta line, a small type label, and small actions. Horizontal on phones, vertical from sm.
 */
export function DocumentGridItem({ doc, title, index = 0 }: { doc: DocItem; title: string; index?: number }) {
  const { t, lang } = useLanguage()
  return (
    <li
      id={`f-${doc.id}`}
      style={{ '--i': Math.min(index, 12) } as CSSProperties}
      className="stagger-item group relative flex scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-surface outline-none transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-24px_var(--c-glow)] motion-reduce:hover:translate-y-0 sm:flex-col"
    >
      <div className="relative w-24 shrink-0 overflow-hidden border-r border-line bg-gradient-to-br from-accent-tint to-surface-2 sm:aspect-[16/9] sm:w-full sm:border-r-0 sm:border-b">
        {/* soft blue sheen that rises on hover */}
        <span aria-hidden className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-accent/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {doc.thumbnailUrl ? (
          <img
            src={doc.thumbnailUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
          />
        ) : (
          <span aria-hidden className="grid h-full min-h-24 place-items-center text-muted">
            <FileText className="h-7 w-7" />
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-3.5 sm:p-4">
        <span className="self-start rounded-full bg-accent-soft px-2 py-0.5 text-[0.7rem] font-semibold text-accent">{typeLabel(doc.documentType, lang)}</span>
        {doc.available && doc.fileUrl ? (
          <a
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="mt-1.5 line-clamp-2 leading-snug font-semibold break-words text-ink transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
          >
            {title}
            <span className="sr-only"> {t('common.newTab')}</span>
          </a>
        ) : (
          <p className="mt-1 line-clamp-2 font-semibold" title={title}>
            {title}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-xs text-muted tabular-nums">
            {doc.pageCount} {t('common.pages')} · {formatSize(doc.fileSize)}
          </span>
          <DocumentActions doc={doc} title={title} compact />
        </div>
      </div>
    </li>
  )
}

/** Responsive card grid: 1 column on phones, 2 on tablets, at most 3 on desktop. */
export function DocumentGrid({ groups, titles }: { groups: DocGroupView[]; titles?: Record<string, string> }) {
  const { lang } = useLanguage()
  return (
    <div className="grid gap-8">
      {groups.map((g) => (
        <section key={g.key} id={g.anchor} aria-label={g.heading} className="scroll-mt-24 outline-none">
          {g.heading && (
            <h3 className="mb-3 flex items-center gap-2">
              <span className="font-bold">{g.heading}</span>
              {g.sub && <span className="text-xs text-muted">{g.sub}</span>}
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent tabular-nums">{g.docs.length}</span>
            </h3>
          )}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.docs.map((d, i) => (
              <DocumentGridItem key={d.id} doc={d} index={i} title={titles?.[d.id] ?? docTitle(d, lang)} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
