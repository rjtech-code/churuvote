/**
 * Small, dependency-free motion helpers. Content is always present and readable:
 * elements are only hidden (`reveal-pending`) after JS has confirmed that motion is
 * allowed and IntersectionObserver exists, and only if they start below the fold.
 */

const motionAllowed = () => typeof IntersectionObserver !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fade/slide elements in once as they enter the viewport (never replayed). Returns a cleanup. */
export function revealOnScroll(elements: Element[], stagger = 70): () => void {
  if (!motionAllowed() || !elements.length) return () => {}
  const vh = window.innerHeight
  const pending = elements.filter((el) => el.getBoundingClientRect().top > vh * 0.92) as HTMLElement[]
  pending.forEach((el) => el.classList.add('reveal-pending'))

  const timers: number[] = []
  const io = new IntersectionObserver(
    (entries) => {
      let i = 0
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target as HTMLElement
        el.style.transitionDelay = `${Math.min(i++, 5) * stagger}ms`
        el.classList.add('reveal-in')
        el.classList.remove('reveal-pending')
        io.unobserve(el)
        // drop the delay afterwards so later hover/focus transitions are not delayed
        timers.push(window.setTimeout(() => (el.style.transitionDelay = ''), 900))
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  )
  pending.forEach((el) => io.observe(el))

  return () => {
    io.disconnect()
    timers.forEach(clearTimeout)
    pending.forEach((el) => el.classList.remove('reveal-pending'))
  }
}

/**
 * Turns each `.flow` (numbered procedure) inside `root` into a scroll-synced timeline:
 * a continuous track whose fill grows with the reading position, steps marked done /
 * active as the reading line passes their number, and steps revealed once on entry.
 * Scroll work is batched into one requestAnimationFrame and only runs while the flow is
 * near the viewport, so there are no React re-renders and no layout thrash.
 */
export function enhanceTimelines(root: HTMLElement): () => void {
  const cleanups: (() => void)[] = []

  root.querySelectorAll<HTMLElement>('.flow').forEach((flow) => {
    const steps = Array.from(flow.querySelectorAll<HTMLElement>(':scope > .step'))
    const dots = steps.map((s) => s.querySelector<HTMLElement>('.dot'))
    if (steps.length < 2 || dots.some((d) => !d)) return

    flow.classList.add('is-enhanced')
    const track = document.createElement('div')
    track.className = 'flow-track'
    track.setAttribute('aria-hidden', 'true')
    const fill = document.createElement('div')
    fill.className = 'flow-fill'
    track.appendChild(fill)
    flow.prepend(track)

    const layout = () => {
      const fr = flow.getBoundingClientRect()
      const first = dots[0]!.getBoundingClientRect()
      const last = dots[dots.length - 1]!.getBoundingClientRect()
      track.style.top = `${first.top - fr.top + first.height / 2}px`
      track.style.height = `${Math.max(0, last.top - first.top)}px`
    }

    let frame = 0
    let near = false
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.6 // the "reading line"
      const tr = track.getBoundingClientRect()
      const p = tr.height ? Math.min(1, Math.max(0, (line - tr.top) / tr.height)) : 0
      fill.style.transform = `scaleY(${p})`
      let active = -1
      dots.forEach((d, i) => {
        const r = d!.getBoundingClientRect()
        if (r.top + r.height / 2 <= line) active = i
      })
      steps.forEach((s, i) => {
        s.classList.toggle('is-done', i < active)
        s.classList.toggle('is-active', i === active)
      })
    }
    const schedule = () => {
      if (near && !frame) frame = requestAnimationFrame(update)
    }
    const onResize = () => {
      layout()
      schedule()
    }

    const io = new IntersectionObserver(
      ([e]) => {
        near = e.isIntersecting
        schedule()
      },
      { rootMargin: '25% 0px 25% 0px' },
    )
    io.observe(flow)
    layout()
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', onResize)
    const stopReveal = revealOnScroll(steps, 90)

    cleanups.push(() => {
      io.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', onResize)
      stopReveal()
      track.remove()
      flow.classList.remove('is-enhanced')
      steps.forEach((s) => s.classList.remove('is-done', 'is-active'))
    })
  })

  return () => cleanups.forEach((c) => c())
}
