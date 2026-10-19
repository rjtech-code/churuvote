export type ElectionKey = 'zp-ps' | 'sarpanch-panch'

export interface DocGroup {
  key: string
  election: ElectionKey
  label: string
  /** Folder name in the original ZIP, shown for traceability. */
  sourceFolder: string
}

export interface DocType {
  key: string
  label: string
}

export type DocSection = DocType

export interface HighlightItem {
  id: string
  title: string
}

export interface DocItem {
  id: string
  number?: string
  title: string
  originalFileName: string
  election: ElectionKey
  group: string
  /** Key into DOC_TYPES (homepage filters). */
  documentType: string
  /** Key into DOC_SECTIONS (election-page grouping). */
  section: string
  /** Election pages this file is listed on. */
  pages: ElectionKey[]
  usefulForBoth: boolean
  pageCount: number
  fileSize: number
  keywords: string
  /** Ids of identical files filed elsewhere in the collection. */
  duplicates: string[]
  /** False when the PDF is not present locally; then no open/download/share actions are shown. */
  available: boolean
  fileUrl?: string
  thumbnailUrl?: string
  isNew?: boolean
}

/* ---------------- RO guide ---------------- */

export type GuideWidget = 's19' | 'checklist' | 'faq' | 'refs' | 'letters'

export type GuidePart = { html: string } | { widget: GuideWidget }

export interface GuideSection {
  id: string
  title: string
  navLabel: string
  /** Rule / section / page tags shown beside the heading. */
  tags: string[]
  parts: GuidePart[]
}

/** [खंड, अयोग्यता, RO जाँच, filter key] */
export type S19Row = [string, string, string, 'crim' | 'emp' | 'res']

/** [group heading, [item, rule][]] */
export type ChecklistGroup = [string, [string, string][]]

/** [group heading, [question, answer][]] */
export type FaqGroup = [string, [string, string][]]

/** [priority stars, provision, manual page] */
export type RefRow = [string, string, string]

export interface Letter {
  n: number
  letterNo: string
  date: string
  subject: string
  subjectEn: string
  category: string
  url?: string
}
