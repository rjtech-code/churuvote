/** Language-aware access to the RO guide. Hindi comes from the generated source; English from roGuide.en.ts. */
import { CHECKLIST, FAQ_GROUPS, GUIDE_SECTIONS, GUIDE_SOURCE_NOTE, S19_ROWS } from '../data/roGuide.generated'
import { CHECKLIST_EN, FAQ_EN, GUIDE_SECTIONS_EN, GUIDE_SOURCE_NOTE_EN, LETTER_CATEGORIES_EN, S19_EN } from '../data/roGuide.en'
import type { GuidePart, GuideSection, S19Row } from '../data/types'
import type { Lang } from '../i18n/translations'
import { GUIDE_SECTION_COUNT } from '../data/guideMeta'

if (import.meta.env.DEV && GUIDE_SECTIONS.length !== GUIDE_SECTION_COUNT) {
  console.error(`guideMeta.GUIDE_SECTION_COUNT (${GUIDE_SECTION_COUNT}) does not match the guide (${GUIDE_SECTIONS.length} sections)`)
}

export interface LocalizedSection {
  id: string
  title: string
  navLabel: string
  tags: string[]
  parts: GuidePart[]
}

/** Replace each HTML part with its English counterpart (same order); widgets are untouched. */
function localize(s: GuideSection, lang: Lang): LocalizedSection {
  const en = lang === 'en' ? GUIDE_SECTIONS_EN[s.id] : undefined
  if (!en) return s
  let i = 0
  return {
    id: s.id,
    title: en.title,
    navLabel: en.navLabel,
    tags: en.tags,
    parts: s.parts.map((p) => ('html' in p ? { html: en.parts[i++] ?? p.html } : p)),
  }
}

export const guideSections = (lang: Lang) => GUIDE_SECTIONS.map((s) => localize(s, lang))

export const s19Rows = (lang: Lang): S19Row[] =>
  lang === 'en' ? S19_ROWS.map((r) => (S19_EN[r[0]] ? [r[0], S19_EN[r[0]][0], S19_EN[r[0]][1], r[3]] : r)) : S19_ROWS

export const checklist = (lang: Lang) => (lang === 'en' ? CHECKLIST_EN : CHECKLIST)
export const faqGroups = (lang: Lang) => (lang === 'en' ? FAQ_EN : FAQ_GROUPS)
export const faqCount = FAQ_GROUPS.reduce((n, g) => n + g[1].length, 0)
export const letterCategory = (c: string, lang: Lang) => (lang === 'en' ? (LETTER_CATEGORIES_EN[c] ?? c) : c)
export const sourceNote = (lang: Lang) => (lang === 'en' ? GUIDE_SOURCE_NOTE_EN : GUIDE_SOURCE_NOTE)
