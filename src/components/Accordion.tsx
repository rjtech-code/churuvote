import type { ReactNode } from 'react'
import { onSummaryClick } from '../lib/accordion'

interface Props {
  summary: ReactNode
  /** Optional small number shown before the summary (FAQ numbering). */
  number?: number
  defaultOpen?: boolean
  children: ReactNode
}

/** Native <details> accordion (keyboard and screen-reader support built in) with a smooth open/close. Styled in guide.css. */
export function Accordion({ summary, number, defaultOpen, children }: Props) {
  return (
    <details open={defaultOpen}>
      <summary onClick={onSummaryClick}>
        <span className="n">{number ?? ''}</span>
        <span>{summary}</span>
      </summary>
      <div className="a">{children}</div>
    </details>
  )
}
