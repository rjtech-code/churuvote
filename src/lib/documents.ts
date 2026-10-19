import { DOCUMENTS, DOC_SECTIONS, DOC_TYPES, ELECTIONS, GROUPS, SARPANCH_HIGHLIGHTS } from '../data/documents.generated'
import { ELECTIONS_EN, GROUPS_EN, HIGHLIGHTS_EN, SECTIONS_EN, TITLES_EN, TYPES_EN } from '../data/documents.en'
import type { DocGroup, DocItem, ElectionKey } from '../data/types'
import type { Lang } from '../i18n/translations'

export const DOC_BY_ID: Record<string, DocItem> = Object.fromEntries(DOCUMENTS.map((d) => [d.id, d]))
export const GROUP_BY_KEY: Record<string, DocGroup> = Object.fromEntries(GROUPS.map((g) => [g.key, g]))
const TYPE_HI: Record<string, string> = Object.fromEntries(DOC_TYPES.map((t) => [t.key, t.label]))
const SECTION_HI: Record<string, string> = Object.fromEntries(DOC_SECTIONS.map((t) => [t.key, t.label]))
const HIGHLIGHT_HI: Record<string, string> = Object.fromEntries(SARPANCH_HIGHLIGHTS.map((h) => [h.id, h.title]))

/* ---- language-aware labels: English falls back to the source text when no translation exists ---- */

export const docTitle = (d: DocItem, lang: Lang) => (lang === 'en' ? (TITLES_EN[d.title] ?? d.title) : d.title)
export const highlightTitle = (id: string, lang: Lang) => (lang === 'en' ? HIGHLIGHTS_EN[id] : HIGHLIGHT_HI[id]) ?? HIGHLIGHT_HI[id]
export const electionName = (k: ElectionKey, lang: Lang) => (lang === 'en' ? ELECTIONS_EN[k] : ELECTIONS[k])
export const groupLabel = (key: string, lang: Lang) => (lang === 'en' ? (GROUPS_EN[key] ?? GROUP_BY_KEY[key].label) : GROUP_BY_KEY[key].label)
export const typeLabel = (key: string, lang: Lang) => (lang === 'en' ? (TYPES_EN[key] ?? TYPE_HI[key]) : TYPE_HI[key]) ?? key
export const sectionLabel = (key: string, lang: Lang) => (lang === 'en' ? (SECTIONS_EN[key] ?? SECTION_HI[key]) : SECTION_HI[key]) ?? key

/* ---- formatting (digits stay Latin in both languages, as in the source) ---- */

/** Same rounding as the source listing: whole MB above 10 MB, one decimal below, KB for small files. */
export function formatSize(bytes: number) {
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(bytes >= 1e7 ? 0 : 1)} MB`
  return `${Math.max(1, Math.round(bytes / 1e3))} KB`
}

export const formatNumber = (n: number) => n.toLocaleString('en-IN')

/* ---- search ---- */

/**
 * NFC, lower-case, drop nukta / zero-width joiners and treat chandrabindu as anusvara,
 * so spelling variants such as “फ़ाइल”/“फाइल” match.
 */
export function normalize(s: string) {
  return s
    .normalize('NFC')
    .toLowerCase()
    .replace(/[़‌‍]/g, '')
    .replace(/ँ/g, 'ं')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Each document is searchable by its Hindi and English metadata, whichever language is shown. */
const SEARCH_KEY: Record<string, string> = Object.fromEntries(
  DOCUMENTS.map((d) => {
    const g = GROUP_BY_KEY[d.group]
    const parts = [d.number, d.title, d.originalFileName, d.keywords, g.sourceFolder]
    for (const lang of ['hi', 'en'] as const) {
      parts.push(docTitle(d, lang), groupLabel(d.group, lang), typeLabel(d.documentType, lang), sectionLabel(d.section, lang), electionName(d.election, lang))
    }
    return [d.id, normalize(parts.filter(Boolean).join(' '))]
  }),
)

/** Every whitespace-separated token of the query must appear in the document's search key. */
export function matchesQuery(doc: DocItem, query: string) {
  const tokens = normalize(query).split(' ').filter(Boolean)
  const key = SEARCH_KEY[doc.id]
  return tokens.every((t) => key.includes(t))
}

/* ---- collections ---- */

/** Files listed on an election page: that election's own files first, then those mapped in from the other election. */
export function documentsForPage(page: ElectionKey) {
  return DOCUMENTS.filter((d) => d.pages.includes(page)).sort((a, b) => Number(a.election !== page) - Number(b.election !== page))
}

export function statsFor(docs: DocItem[]) {
  return {
    files: docs.length,
    pages: docs.reduce((n, d) => n + d.pageCount, 0),
    bytes: docs.reduce((n, d) => n + d.fileSize, 0),
    both: docs.filter((d) => d.usefulForBoth).length,
  }
}
