import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { ArrowUp, RotateCcw, SearchX } from 'lucide-react'
import { DOCUMENTS, DOC_SECTIONS, DOC_TYPES, GROUPS } from '../data/documents.generated'
import type { DocItem, ElectionKey } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { documentsForPage, electionName, groupLabel, matchesQuery, sectionLabel, typeLabel } from '../lib/documents'
import { scrollIntoViewSafe } from '../lib/hooks'
import { CategoryFilter } from './CategoryFilter'
import { DocumentGrid } from './DocumentGrid'
import { DocumentTable, type DocGroupView } from './DocumentTable'
import { SearchField } from './SearchField'
import { ViewSwitcher, type DocView } from './ViewSwitcher'

type Zone = 'all' | ElectionKey
const ELECTION_KEYS: ElectionKey[] = ['zp-ps', 'sarpanch-panch']

/** Stable anchor id for a group (group keys contain slashes). */
export const groupAnchor = (key: string) => `grp-${key.replace(/\//g, '-')}`

function readParams(page?: ElectionKey) {
  const p = new URLSearchParams(window.location.search)
  const z = p.get('z')
  return {
    q: p.get('q') ?? '',
    z: (!page && (z === 'zp-ps' || z === 'sarpanch-panch') ? z : 'all') as Zone,
    c: p.get('c') ?? 'all',
  }
}

interface Props {
  /** Restrict to one election page's files, grouped by section; otherwise the whole collection grouped by source folder. */
  page?: ElectionKey
  heading: ReactNode
  intro?: ReactNode
}

/** Searchable document browser with a compact toolbar and Table (default) / Grid views. */
export function DocumentBrowser({ page, heading, intro }: Props) {
  const { t, lang } = useLanguage()
  const all: DocItem[] = useMemo(() => (page ? documentsForPage(page) : DOCUMENTS), [page])
  const categoryOf = (d: DocItem) => (page ? d.section : d.documentType)
  const categories = useMemo(() => (page ? DOC_SECTIONS.filter((s) => all.some((d) => d.section === s.key)) : DOC_TYPES), [page, all])
  const catLabel = (key: string) => (page ? sectionLabel(key, lang) : typeLabel(key, lang))

  const initial = useMemo(() => readParams(page), [page])
  const [q, setQ] = useState(initial.q)
  const [zone, setZone] = useState<Zone>(initial.z)
  const [cat, setCat] = useState(categories.some((c) => c.key === initial.c) ? initial.c : 'all')
  // Table is the default when the library opens; switching keeps the search and filters.
  const [view, setView] = useState<DocView>('table')

  const byQuery = all.filter((d) => matchesQuery(d, q))
  const byZone = byQuery.filter((d) => zone === 'all' || d.election === zone)
  const visible = byZone.filter((d) => cat === 'all' || categoryOf(d) === cat)

  const reset = () => {
    setQ('')
    setZone('all')
    setCat('all')
  }

  // Keep q/z/c in the address bar so a filtered view can be shared (replaceState: no router/scroll side effects).
  useEffect(() => {
    const p = new URLSearchParams()
    if (q) p.set('q', q)
    if (zone !== 'all') p.set('z', zone)
    if (cat !== 'all') p.set('c', cat)
    const s = p.toString()
    history.replaceState(history.state, '', `${window.location.pathname}${s ? `?${s}` : ''}${window.location.hash}`)
  }, [q, zone, cat])

  // #f-<id> jumps to a file, #grp-<key> to a group: clear filters if they hide the target, then highlight.
  const { hash, key } = useLocation()
  useEffect(() => {
    const id = decodeURIComponent(hash.slice(1))
    const isFile = id.startsWith('f-') && all.some((d) => `f-${d.id}` === id)
    const isGroup = id.startsWith('grp-')
    if (!isFile && !isGroup) return
    if (!document.getElementById(id)) reset()
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      scrollIntoViewSafe(el)
      if (isFile) {
        el.classList.remove('flash')
        void (el as HTMLElement).offsetWidth
        el.classList.add('flash')
      }
    }, 60)
    return () => clearTimeout(timer)
  }, [hash, key])

  const zoneOptions = [
    { id: 'all' as Zone, label: t('reg.all'), count: byQuery.length },
    ...ELECTION_KEYS.map((k) => ({ id: k as Zone, label: electionName(k, lang), count: byQuery.filter((d) => d.election === k).length })),
  ]
  const catOptions = [
    { id: 'all', label: t('reg.allTypes'), count: byZone.length },
    ...categories.map((c) => ({ id: c.key, label: catLabel(c.key), count: byZone.filter((d) => categoryOf(d) === c.key).length })),
  ]

  const groups: DocGroupView[] = (
    page
      ? DOC_SECTIONS.map((s) => ({ key: s.key, anchor: groupAnchor(s.key), heading: sectionLabel(s.key, lang), docs: visible.filter((d) => d.section === s.key) }))
      : GROUPS.map((g) => ({
          key: g.key,
          anchor: groupAnchor(g.key),
          heading: groupLabel(g.key, lang),
          sub: electionName(g.election, lang),
          docs: visible.filter((d) => d.group === g.key),
        }))
  ).filter((g) => g.docs.length)

  const searchId = page ? `q-${page}` : 'q'

  // floating "back to search" once the toolbar has scrolled away while inside the list
  const toolbarRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  // Checked once per frame while scrolling (not IntersectionObserver): an instant jump can carry
  // the toolbar from below the viewport to above it without it ever intersecting.
  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      const c = toolbarRef.current?.getBoundingClientRect()
      const l = listRef.current?.getBoundingClientRect()
      setShowTop(!!c && !!l && c.bottom < 0 && l.top < window.innerHeight && l.bottom > 0)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="files" aria-labelledby="files-title" className="container-page scroll-mt-20 pt-12 outline-none">
      <h2 id="files-title" className="text-xl font-bold sm:text-2xl">
        {heading}
      </h2>
      {intro && <p className="mt-1 max-w-3xl text-sm text-muted">{intro}</p>}

      {/* compact toolbar */}
      <div ref={toolbarRef} className="mt-4 grid grid-cols-1 gap-3 rounded-2xl border border-line bg-surface p-3">
        <div className="flex items-center gap-2">
          <div className="min-w-0 flex-1">
            <SearchField id={searchId} value={q} onChange={setQ} label={t('reg.search')} placeholder={t('reg.searchPlaceholder')} slashShortcut />
          </div>
          <ViewSwitcher value={view} onChange={setView} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {!page && <CategoryFilter variant="segment" options={zoneOptions} value={zone} onChange={setZone} label={t('reg.election')} />}
          <p className="ml-auto text-sm font-semibold text-muted tabular-nums" aria-live="polite">
            {t('reg.countOf', { n: visible.length, total: all.length })}
          </p>
        </div>
        <CategoryFilter options={catOptions} value={cat} onChange={setCat} label={page ? t('reg.section') : t('reg.filterLabel')} disableEmpty />
      </div>

      {(q || zone !== 'all' || cat !== 'all') && visible.length > 0 && (
        <div className="mt-2 flex justify-end">
          <button type="button" onClick={reset} className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            {t('reg.reset')}
          </button>
        </div>
      )}

      <div ref={listRef} className="mt-4">
        {/* the observed container stays mounted; only this inner wrapper re-keys to fade on view/filter changes */}
        <div key={`${view}-${zone}-${cat}`} className="list-fade">
        {visible.length === 0 ? (
          <div className="fade-in grid place-items-center rounded-2xl border border-dashed border-line-strong px-6 py-12 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-surface-2 text-muted">
              <SearchX className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-3 font-bold">{t('reg.emptyTitle')}</p>
            <p className="mt-1 text-sm text-muted">{t('reg.emptyText')}</p>
            <button type="button" onClick={reset} className="btn-primary mt-4 min-h-10 text-sm">
              <RotateCcw className="h-4 w-4" aria-hidden />
              {t('reg.reset')}
            </button>
          </div>
        ) : view === 'table' ? (
          <DocumentTable groups={groups} showElection={!page} showBoth={!!page} showDuplicates={!page} />
        ) : (
          <DocumentGrid groups={groups} />
        )}
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => {
            scrollIntoViewSafe(document.getElementById('files')!)
            setTimeout(() => document.getElementById(searchId)?.focus({ preventScroll: true }), 350)
          }}
          className="fade-in fixed right-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold text-accent shadow-lg transition-colors hover:bg-accent-soft"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
          {t('reg.toTop')}
        </button>
      )}
    </section>
  )
}
