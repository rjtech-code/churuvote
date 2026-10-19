export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Smooth-scrolls an element to the top of the viewport (instant when reduced motion is preferred). */
export function scrollIntoViewSafe(el: Element) {
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
}

/** Scrolls to an element by id and moves focus there for keyboard/screen-reader users. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return false
  scrollIntoViewSafe(el)
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
  return true
}
