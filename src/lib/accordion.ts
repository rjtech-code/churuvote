/**
 * Smooth open/close for native <details> accordions (FAQ and the guide's expandable
 * blocks). The answer panel (`.a`, or the element after <summary>) animates its height
 * together with a small fade and slide. `data-closing` keeps the +/− marker in sync while
 * a closing animation runs. Reduced motion: an instant toggle.
 */
const DURATION = 420
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const running = new WeakMap<HTMLDetailsElement, Animation>()

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function panelOf(details: HTMLDetailsElement) {
  return details.querySelector<HTMLElement>(':scope > .a') ?? (details.querySelector(':scope > summary')?.nextElementSibling as HTMLElement | null)
}

export function toggleDetails(details: HTMLDetailsElement) {
  const panel = panelOf(details)
  const closing = details.open && !details.hasAttribute('data-closing')

  if (!panel || reducedMotion() || typeof panel.animate !== 'function') {
    details.open = !details.open
    return
  }

  // reverse an animation that is still running instead of jumping
  const current = running.get(details)
  const startHeight = panel.getBoundingClientRect().height
  current?.cancel()

  if (closing) {
    details.setAttribute('data-closing', '')
    const anim = panel.animate(
      [
        { height: `${startHeight}px`, opacity: 1, transform: 'translateY(0)' },
        { height: '0px', opacity: 0, transform: 'translateY(-6px)' },
      ],
      { duration: DURATION, easing: EASING },
    )
    panel.style.overflow = 'hidden'
    running.set(details, anim)
    anim.onfinish = () => {
      details.open = false
      details.removeAttribute('data-closing')
      panel.style.overflow = ''
      running.delete(details)
    }
  } else {
    details.removeAttribute('data-closing')
    details.open = true
    const target = panel.scrollHeight
    const anim = panel.animate(
      [
        { height: `${current ? startHeight : 0}px`, opacity: current ? 1 : 0, transform: current ? 'translateY(0)' : 'translateY(-6px)' },
        { height: `${target}px`, opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: DURATION, easing: EASING },
    )
    panel.style.overflow = 'hidden'
    running.set(details, anim)
    anim.onfinish = () => {
      panel.style.overflow = ''
      running.delete(details)
    }
  }
}

/** Click handler for a <summary>: replaces the browser's instant toggle with the animated one. */
export function onSummaryClick(e: { preventDefault: () => void; currentTarget: EventTarget | null; target?: EventTarget | null }) {
  const summary = (e.currentTarget as HTMLElement | null)?.closest('summary')
  const details = summary?.parentElement
  if (!(details instanceof HTMLDetailsElement)) return
  e.preventDefault()
  toggleDetails(details)
}
