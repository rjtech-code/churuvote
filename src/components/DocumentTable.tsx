import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { FileText } from 'lucide-react'
import { BIG_FILE_BYTES } from '../data/documents.generated'
import type { DocItem } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { DOC_BY_ID, docTitle, electionName, formatSize, groupLabel, typeLabel } from '../lib/documents'
import { DocumentActions } from './DocumentActions'

export interface DocGroupView {
  key: string
  /** Anchor id of the group heading row (omit for an ungrouped table). */
  anchor?: string
  heading?: string
  sub?: string
  docs: DocItem[]
}

interface Props {
  groups: DocGroupView[]
  /** Show the election name in the category column (whole-collection view). */
  showElection?: boolean
  /** Mark files that are listed on both election pages (election-page view). */
  showBoth?: boolean
  /** Link duplicates to their other copies (whole-collection view). */
  showDuplicates?: boolean
  /** Display-title overrides by document id, already in the active language. */
  titles?: Record<string, string>
  anchors?: boolean
}

/**
 * Compact document table. On md+ a real table; below md each row becomes a two-line entry
 * (number | title, category, pages/size, actions) using the same markup.
 */
export function DocumentTable({ groups, showElection, showBoth, showDuplicates, titles, anchors = true }: Props) {
  const { t, lang } = useLanguage()
  let n = 0

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
      <table className="w-full text-sm">
        <thead className="hidden bg-gradient-to-r from-accent-tint to-surface-2 text-left text-xs text-muted md:table-header-group">
          <tr>
            <th scope="col" className="w-12 py-2.5 pr-2 pl-4 font-semibold">{t('reg.col.no')}</th>
            <th scope="col" className="py-2.5 pr-3 font-semibold">{t('reg.col.doc')}</th>
            <th scope="col" className="w-44 py-2.5 pr-3 font-semibold">{t('reg.col.category')}</th>
            <th scope="col" className="w-32 py-2.5 pr-3 font-semibold">{t('reg.col.pagesSize')}</th>
            <th scope="col" className="w-48 py-2.5 pr-4 text-right font-semibold">{t('reg.col.actions')}</th>
          </tr>
        </thead>
        {groups.map((g) => (
          <tbody key={g.key}>
            {g.heading && (
              <tr id={g.anchor} className="scroll-mt-24 border-t border-line bg-gradient-to-r from-accent-tint/80 to-surface outline-none first:border-t-0">
                <th colSpan={5} scope="colgroup" className="px-4 py-2 text-left">
                  <span className="font-bold text-ink">{g.heading}</span>
                  {g.sub && <span className="ml-2 text-xs font-medium text-muted">{g.sub}</span>}
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent tabular-nums">{g.docs.length}</span>
                </th>
              </tr>
            )}
            {g.docs.map((d) => {
              n++
              const title = titles?.[d.id] ?? docTitle(d, lang)
              const original = lang === 'en' && title !== d.title ? d.title : null
              const category = typeLabel(d.documentType, lang)
              const dups = showDuplicates ? d.duplicates.map((id) => DOC_BY_ID[id]).filter(Boolean) : []
              const big = d.fileSize >= BIG_FILE_BYTES
              return (
                <tr
                  key={d.id}
                  id={anchors ? `f-${d.id}` : undefined}
                  style={{ '--i': Math.min(n, 14) } as CSSProperties}
                  className="stagger-item group grid scroll-mt-24 grid-cols-[2rem_minmax(0,1fr)] gap-x-2 border-t border-line px-3 py-3 outline-none transition-[background-color,box-shadow] duration-200 hover:bg-accent-tint hover:shadow-[inset_3px_0_0_var(--c-accent)] md:table-row md:px-0 md:py-0"
                >
                  <td className="row-span-2 pt-0.5 text-xs text-muted tabular-nums md:table-cell md:py-3 md:pr-2 md:pl-4 md:align-top">{n}</td>
                  <td className="min-w-0 md:py-3 md:pr-3 md:align-top">
                    <span className="flex gap-2.5">
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-bad/80" aria-hidden />
                      <span className="min-w-0">
                        <span className="font-semibold leading-snug text-ink transition-colors group-hover:text-accent" title={original ?? undefined}>
                          {title}
                        </span>
                        {d.isNew && <span className="ml-1.5 rounded-full bg-accent px-1.5 py-px text-[0.7rem] font-semibold text-accent-ink">{t('reg.new')}</span>}
                        {showBoth && d.usefulForBoth && (
                          <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-teal align-middle" title={t('reg.both')}>
                            <span className="sr-only">{t('reg.both')}</span>
                          </span>
                        )}
                        {original && (
                          <span lang="hi" className="mt-0.5 block text-xs text-muted">
                            {original}
                          </span>
                        )}
                        {dups.length > 0 && (
                          <Link
                            to={{ pathname: '/', hash: `#f-${dups[0].id}` }}
                            title={t('reg.copiesTitle', { where: dups.map((x) => `${electionName(x.election, lang)} › ${groupLabel(x.group, lang)}`).join(', ') })}
                            className="mt-0.5 block text-xs text-muted underline decoration-dotted underline-offset-2 hover:text-accent"
                          >
                            {t('reg.copies', { n: dups.length })}
                          </Link>
                        )}
                        {/* phone: category and size under the title */}
                        <span className="mt-1 block text-xs text-muted md:hidden">
                          {category} · {d.pageCount} {t('common.pages')} · {formatSize(d.fileSize)}
                        </span>
                      </span>
                    </span>
                  </td>
                  <td className="hidden text-muted md:table-cell md:py-3 md:pr-3 md:align-top">
                    {category}
                    {showElection && <span className="block text-xs">{electionName(d.election, lang)}</span>}
                  </td>
                  <td className="hidden whitespace-nowrap tabular-nums md:table-cell md:py-3 md:pr-3 md:align-top">
                    <span className="text-ink">{d.pageCount}</span>
                    <span className="text-muted"> · </span>
                    <span className={big ? 'font-semibold text-warn' : 'text-muted'} title={big ? t('reg.big') : undefined}>
                      {formatSize(d.fileSize)}
                    </span>
                  </td>
                  <td className="col-start-2 mt-2 md:mt-0 md:table-cell md:py-2 md:pr-3 md:align-top">
                    <div className="flex md:justify-end">
                      <DocumentActions doc={d} title={title} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        ))}
      </table>
    </div>
  )
}
