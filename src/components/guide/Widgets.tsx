import { useEffect, useState } from 'react'
import { ExternalLink, RotateCcw } from 'lucide-react'
import { LETTERS, LETTER_CATEGORIES, REFERENCES } from '../../data/roGuide.generated'
import { useLanguage } from '../../i18n/LanguageProvider'
import { checklist, faqGroups, letterCategory, s19Rows } from '../../lib/guide'
import { SearchField } from '../SearchField'

const lc = (s: string) => s.toLowerCase()
const frame = 'relative overflow-x-auto rounded-2xl border border-line bg-surface'
const th = 'whitespace-nowrap bg-surface-2 px-4 py-2.5 text-left text-xs font-bold text-muted'
const td = 'border-t border-line px-4 py-2.5 align-top'

/** Text-style toggle row used inside the guide (distinct from the register's index lists). */
function Toggles<T extends string>({ options, value, onChange, label }: { options: { id: T; label: string }[]; value: T; onChange: (v: T) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o.id === value
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.id)}
            className={`chip ${on ? 'chip-on' : 'chip-off'}`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

/* ---------------- Section 19 ---------------- */

type S19F = 'all' | 'crim' | 'emp' | 'res'

export function S19Table() {
  const { t, lang } = useLanguage()
  const [q, setQ] = useState('')
  const [f, setF] = useState<S19F>('all')
  const all = s19Rows(lang)
  const needle = lc(q.trim())
  const rows = all.filter((r) => (f === 'all' || r[3] === f) && (!needle || lc(`${r[0]} ${r[1]} ${r[2]}`).includes(needle)))
  const opts: { id: S19F; label: string }[] = [
    { id: 'all', label: t('s19.all') },
    { id: 'crim', label: t('s19.crim') },
    { id: 'emp', label: t('s19.emp') },
    { id: 'res', label: t('s19.res') },
  ]

  return (
    <div className="my-6 grid grid-cols-1 gap-3">
      <SearchField id="s19q" value={q} onChange={setQ} label={t('s19.search')} placeholder={t('s19.placeholder')} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Toggles options={opts} value={f} onChange={setF} label={t('s19.filter')} />
        <span className="font-mono text-xs text-muted" aria-live="polite">
          {t('s19.count', { n: rows.length, total: all.length })}
        </span>
      </div>
      <div className={frame}>
        <table className="w-full text-[0.95rem]">
          <thead>
            <tr>
              <th scope="col" className={th}>{t('s19.col.clause')}</th>
              <th scope="col" className={th}>{t('s19.col.dq')}</th>
              <th scope="col" className={th}>{t('s19.col.check')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="transition-colors hover:bg-accent-soft/50">
                <td className={td}>
                  <span className="rule-tag">{r[0]}</span>
                </td>
                <td className={td}>{r[1]}</td>
                <td className={`${td} text-muted`}>{r[2]}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={3} className={`${td} text-muted`}>
                  {t('s19.empty')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ---------------- Scrutiny checklist ---------------- */

const CL_KEY = 'ro-checklist-v1'

function loadChecks(): Record<string, 1> {
  try {
    return JSON.parse(localStorage.getItem(CL_KEY) || '{}') || {}
  } catch {
    return {}
  }
}

export function Checklist() {
  const { t, lang } = useLanguage()
  const groups = checklist(lang)
  const total = groups.reduce((n, g) => n + g[1].length, 0)
  const [checked, setChecked] = useState<Record<string, 1>>(loadChecks)

  useEffect(() => {
    try {
      if (Object.keys(checked).length) localStorage.setItem(CL_KEY, JSON.stringify(checked))
      else localStorage.removeItem(CL_KEY)
    } catch {
      // storage unavailable
    }
  }, [checked])

  const done = Object.keys(checked).length
  const toggle = (id: string) =>
    setChecked((c) => {
      const next = { ...c }
      if (next[id]) delete next[id]
      else next[id] = 1
      return next
    })

  // ids are positional (c0…c45) and identical in both languages, so ticks survive a language switch
  let i = 0
  return (
    <div className="my-6">
      <div className="panel sticky top-[8.25rem] z-10 flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 lg:top-20">
        <b className="font-mono text-sm" aria-live="polite">
          {t('cl.progress', { n: done, total })}
        </b>
        <div
          role="progressbar"
          aria-label={t('cl.progressLabel')}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
          className="h-2 min-w-28 flex-1 overflow-hidden rounded-full bg-surface-2"
        >
          <i className="block h-full rounded-full bg-ok transition-[width] duration-300" style={{ width: `${(100 * done) / total}%` }} />
        </div>
        <button type="button" onClick={() => setChecked({})} className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          {t('cl.reset')}
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {groups.map(([heading, items]) => (
          <div key={heading} className="panel p-4">
            <h3 className="font-bold">{heading}</h3>
            <ul className="mt-2 grid gap-1">
              {items.map(([text, rule]) => {
                const id = `c${i++}`
                const on = !!checked[id]
                return (
                  <li key={id}>
                    <label htmlFor={id} className={`grid cursor-pointer grid-cols-[1.1rem_minmax(0,1fr)] gap-x-3 rounded-xl px-2.5 py-2 transition-colors ${on ? 'bg-ok-soft' : 'hover:bg-surface-2'}`}>
                      <input id={id} type="checkbox" checked={on} onChange={() => toggle(id)} className="mt-1.5 h-4 w-4 accent-[var(--c-ok)]" />
                      <span className={`text-[0.95rem] ${on ? 'text-muted line-through' : ''}`}>
                        {text} <span className="rule-tag ml-1">{rule}</span>
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- FAQ ---------------- */

export function FAQSection() {
  const { t, lang } = useLanguage()
  const [q, setQ] = useState('')
  let n = 0
  const all = faqGroups(lang).flatMap(([group, items]) => items.map(([question, answer]) => ({ group, n: ++n, question, answer })))
  const needle = lc(q.trim())
  const list = all.filter((x) => !needle || lc(`${x.question} ${x.answer}`).includes(needle))

  return (
    <div className="my-6">
      <SearchField id="fq" value={q} onChange={setQ} label={t('faq.search')} placeholder={t('faq.placeholder')} />
      <p className="mt-2 font-mono text-xs text-muted" aria-live="polite">
        {t('faq.count', { n: list.length, total: all.length })}
      </p>
      {list.length === 0 && <p className="py-4 text-muted">{t('faq.empty')}</p>}
      <div className="ref">
        {list.map((x, i) => (
          <div key={x.n}>
            {(i === 0 || list[i - 1].group !== x.group) && <h3 className="!mb-2 !text-accent">{x.group}</h3>}
            {/* key includes whether a search is active, so items open while searching and close afterwards */}
            <details key={`${x.n}-${!!needle}`} open={!!needle}>
              <summary>
                <span className="n">{x.n}</span>
                <span>{x.question}</span>
              </summary>
              <div className="a">{x.answer}</div>
            </details>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- 15 key references ---------------- */

export function LegalTable() {
  const { t } = useLanguage()
  return (
    <div className={`my-5 ${frame}`}>
      <table className="w-full text-[0.95rem]">
        <thead>
          <tr>
            <th scope="col" className={th}>{t('refs.priority')}</th>
            <th scope="col" className={th}>{t('refs.provision')}</th>
            <th scope="col" className={th}>{t('refs.page')}</th>
          </tr>
        </thead>
        <tbody>
          {REFERENCES.map(([stars, provision, page]) => (
            <tr key={provision}>
              <td className={`${td} whitespace-nowrap text-warn`}>
                <span aria-label={t('refs.stars', { n: stars.length })}>{stars}</span>
              </td>
              <td className={td}>
                <span className="rule-tag">{provision}</span>
              </td>
              <td className={`${td} whitespace-nowrap font-mono text-sm text-warn`}>{page}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------------- SEC letters ---------------- */

export function LettersTable() {
  const { t, lang } = useLanguage()
  const [cat, setCat] = useState('')
  const [q, setQ] = useState('')
  const needle = lc(q.trim())
  const rows = LETTERS.filter(
    (l) =>
      (!cat || l.category === cat) &&
      (!needle || lc(`${l.letterNo} ${l.date} ${l.subject} ${l.subjectEn} ${l.category} ${letterCategory(l.category, 'en')}`).includes(needle)),
  )
  const options = [{ id: '', label: t('reg.all') }, ...LETTER_CATEGORIES.map((c) => ({ id: c, label: letterCategory(c, lang) }))]

  return (
    <div className="my-6 grid grid-cols-1 gap-3">
      <Toggles options={options} value={cat} onChange={setCat} label={t('letters.filter')} />
      <div className="max-w-xl">
        <SearchField id="lsearch" value={q} onChange={setQ} label={t('letters.search')} placeholder={t('letters.placeholder')} />
      </div>
      <p className="font-mono text-xs text-muted" aria-live="polite">
        {t('letters.count', { n: rows.length, total: LETTERS.length })}
      </p>
      <div className={frame}>
        <table className="w-full min-w-[44rem] text-[0.93rem]">
          <thead>
            <tr>
              {(['letters.col.n', 'letters.col.no', 'letters.col.date', 'letters.col.subject', 'letters.col.cat', 'letters.col.link'] as const).map((k) => (
                <th key={k} scope="col" className={th}>
                  {t(k)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((l) => (
              <tr key={l.n} className="transition-colors hover:bg-accent-soft/50">
                <td className={`${td} font-mono text-sm`}>{l.n}</td>
                <td className={`${td} font-mono text-sm`}>{l.letterNo}</td>
                <td className={`${td} whitespace-nowrap font-mono text-sm`}>{l.date}</td>
                <td className={td}>
                  {/* the source carries both a Hindi summary and an English subject line; lead with the active language */}
                  <b lang={lang}>{lang === 'en' ? l.subjectEn : l.subject}</b>
                  <br />
                  <small lang={lang === 'en' ? 'hi' : 'en'} className="text-muted">
                    {lang === 'en' ? l.subject : l.subjectEn}
                  </small>
                </td>
                <td className={`${td} text-sm`}>{letterCategory(l.category, lang)}</td>
                <td className={td}>
                  {l.url ? (
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1.5 whitespace-nowrap rounded-lg bg-accent px-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-strong">
                      {t('letters.open')}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only">: {t('letters.openSr', { no: l.letterNo })}</span>
                    </a>
                  ) : (
                    <span className="rule-tag" title={t('letters.noLinkTitle')}>
                      {t('letters.noLink')}
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className={`${td} text-muted`}>
                  {t('letters.empty')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
