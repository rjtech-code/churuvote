import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { ArrowUp, FolderOpen, RotateCcw, SearchX } from 'lucide-react'
import { DOCUMENTS, DOC_SECTIONS, DOC_TYPES, GROUPS } from '../data/documents.generated'
import type { DocItem, ElectionKey } from '../data/types'
import { useLanguage } from '../i18n/LanguageProvider'
import { documentsForPage, electionName, groupLabel, matchesQuery, sectionLabel, typeLabel } from '../lib/documents'
import { scrollIntoViewSafe } from '../lib/hooks'
import { DocumentRow } from './DocumentRow'
import { FilterPills } from './FilterPills'
import { SearchField } from './SearchField'

type Zone = 'all' | ElectionKey
const ELECTION_KEYS: ElectionKey[] = ['zp-ps', 'sarpanch-panch']

/** Stable anchor id for a group heading (group keys contain slashes). */
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
  intro: ReactNode
}

export function DocumentRegister({ page, heading, intro }: Props) {
  const { t, lang } = useLanguage()
  const all: DocItem[] = useMemo(() => (page ? documentsForPage(page) : DOCUMENTS), [page])
  const categoryOf = (d: DocItem) => (page ? d.section : d.documentType)
  const categories = useMemo(() => (page ? DOC_SECTIONS.filter((s) => all.some((d) => d.section === s.key)) : DOC_TYPES), [page, all])
  const catLabel = (key: string) => (page ? sectionLabel(key, lang) : typeLabel(key, lang))

  const initial = useMemo(() => readParams(page), [page])
  const [q, setQ] = useState(initial.q)
  const [zone, setZone] = useState<Zone>(initial.z)
  const [cat, setCat] = useState(categories.some((c) => c.key === initial.c) ? initial.c : 'all')

  const byQuery = all.filter((d) => matchesQuery(d, q))
  const byZone = byQuery.filter((d) => zone === 'all' || d.election === zone)
  const visible = byZone.filter((d) => cat === 'all' || categoryOf(d) === cat)

  const reset = () => {
    setQ('')
    setZone('all')
    setCat('all')
  }

  // Keep q/z/c in the address bar so a filtered view can be shared. replaceState avoids router/scroll side effects.
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

  const groups = page
    ? DOC_SECTIONS.map((s) => ({ key: s.key, heading: sectionLabel(s.key, lang), election: null as string | null, folder: null as string | null, docs: visible.filter((d) => d.section === s.key) }))
    : GROUPS.map((g) => ({ key: g.key, heading: groupLabel(g.key, lang), election: electionName(g.election, lang), folder: g.sourceFolder, docs: visible.filter((d) => d.group === g.key) }))

  const countText = visible.length === all.length ? t('reg.countAll', { total: all.length }) : t('reg.countSome', { n: visible.length, total: all.length })
  const searchId = page ? `q-${page}` : 'q'

  // floating "back to search" once the controls have scrolled away while inside the list
  const controlsRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const c = controlsRef.current
    const l = listRef.current
    if (!c || !l) return
    let past = false
    let inList = false
    const o1 = new IntersectionObserver(([e]) => {
      past = !e.isIntersecting && e.boundingClientRect.top < 0
      setShowTop(past && inList)
    })
    const o2 = new IntersectionObserver(([e]) => {
      inList = e.isIntersecting
      setShowTop(past && inList)
    })
    o1.observe(c)
    o2.observe(l)
    return () => {
      o1.disconnect()
      o2.disconnect()
    }
  }, [])

  return (
    <section id="files" aria-labelledby="files-title" className="container-page scroll-mt-20 pt-14 outline-none">
      <div className="flex items-start gap-3">
        <span aria-hidden className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
          <FolderOpen className="h-5 w-5" />
        </span>
        <div>
          <h2 id="files-title" className="text-2xl font-bold sm:text-[1.7rem]">
            {heading}
          </h2>
          <p className="mt-1 max-w-3xl text-muted">{intro}</p>
        </div>
      </div>

      <div ref={controlsRef} className="panel mt-6 grid gap-4 p-4 sm:p-5">
        <SearchField id={searchId} value={q} onChange={setQ} label={t('reg.search')} placeholder={t('reg.searchPlaceholder')} slashShortcut />
        {!page && <FilterPills variant="segment" options={zoneOptions} value={zone} onChange={setZone} label={t('reg.election')} />}
        <FilterPills options={catOptions} value={cat} onChange={setCat} label={page ? t('reg.section') : t('reg.type')} disableEmpty />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-muted" aria-live="polite">
          {countText}
        </p>
        {(q || zone !== 'all' || cat !== 'all') && (
          <button type="button" onClick={reset} className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            {t('reg.reset')}
          </button>
        )}
      </div>

      <div ref={listRef} className="mt-3">
        {visible.length === 0 ? (
          <div className="panel fade-in grid place-items-center px-6 py-14 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-surface-2 text-muted">
              <SearchX className="h-7 w-7" aria-hidden />
            </span>
            <p className="mt-4 text-lg font-bold">{t('reg.emptyTitle')}</p>
            <p className="mt-1 text-muted">{t('reg.emptyText')}</p>
            <button type="button" onClick={reset} className="btn-primary mt-5">
              <RotateCcw className="h-4 w-4" aria-hidden />
              {t('reg.reset')}
            </button>
          </div>
        ) : (
          groups
            .filter((g) => g.docs.length)
            .map((g) => (
              <section key={g.key} id={groupAnchor(g.key)} aria-label={g.heading} className="scroll-mt-24 pt-6 outline-none">
                <h3 className="mb-3 flex flex-wrap items-center gap-2 border-b border-line pb-2">
                  <span className="text-lg font-bold">{g.heading}</span>
                  {g.election && <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-semibold text-muted">{g.election}</span>}
                  <span className="ml-auto flex items-center gap-2 text-xs text-muted">
                    {g.folder && (
                      <span className="hidden sm:inline" title={t('reg.folder')} lang={/[ऀ-ॿ]/.test(g.folder) ? 'hi' : 'en'}>
                        {g.folder}
                      </span>
                    )}
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 font-semibold text-accent">
                      {g.docs.length} {g.docs.length === 1 ? t('common.file') : t('common.files')}
                    </span>
                  </span>
                </h3>
                <ol className="grid gap-2.5">
                  {g.docs.map((d) => (
                    <DocumentRow key={d.id} doc={d} anchor showDuplicates={!page} showBoth={!!page} />
                  ))}
                </ol>
              </section>
            ))
        )}
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => {
            scrollIntoViewSafe(document.getElementById('files')!)
            setTimeout(() => document.getElementById(searchId)?.focus({ preventScroll: true }), 350)
          }}
          className="fade-in fixed right-4 bottom-4 z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 font-semibold text-accent-ink shadow-lg transition-colors hover:bg-accent-strong"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
          {t('reg.toTop')}
        </button>
      )}
    </section>
  )
}
