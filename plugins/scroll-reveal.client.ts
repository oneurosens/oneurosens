type RevealType = 'text' | 'block' | 'cta' | 'image' | 'shape'

type RevealRule = {
  selector: string
  type: RevealType
}

const REVEAL_RULES: RevealRule[] = [
  { selector: '.site-main__content .btn', type: 'cta' },
  { selector: '.decorative-shapes__item', type: 'shape' },
  { selector: '.site-main__content figure, .site-main__content picture, .site-main__content img', type: 'image' },
  {
    selector: [
      '.site-main__content .theme-tint-panel',
      '.site-main__content article',
      '.site-main__content aside',
      '.site-main__content .references-grid__item',
      '.site-main__content .qualiopi-section',
      '.site-main__content .cta-row'
    ].join(', '),
    type: 'block'
  },
  {
    selector: [
      '.site-main__content h1',
      '.site-main__content h2',
      '.site-main__content h3',
      '.site-main__content h4',
      '.site-main__content p',
      '.site-main__content li',
      '.site-main__content .eyebrow'
    ].join(', '),
    type: 'text'
  }
]

const isElementInView = (element: Element) => {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top < viewportHeight * 0.88 && rect.bottom > viewportHeight * 0.12
}

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) {
    return
  }

  let observer: IntersectionObserver | null = null

  const prepareElements = () => {
    const assigned = new WeakSet<Element>()
    const elements: HTMLElement[] = []

    for (const rule of REVEAL_RULES) {
      const matches = document.querySelectorAll<HTMLElement>(rule.selector)

      matches.forEach((element) => {
        if (assigned.has(element)) {
          return
        }

        assigned.add(element)
        element.dataset.reveal = rule.type
        elements.push(element)
      })
    }

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`)

      if (isElementInView(element)) {
        element.classList.add('is-inview')
      }
      else {
        element.classList.remove('is-inview')
      }
    })

    return elements
  }

  const initReveal = () => {
    observer?.disconnect()

    const elements = prepareElements()

    if (!elements.length) {
      return
    }

    document.documentElement.classList.add('js-reveal')

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-inview', entry.isIntersecting)
      })
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.14
    })

    elements.forEach(element => observer?.observe(element))
  }

  const scheduleInit = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        initReveal()
      })
    })
  }

  nuxtApp.hook('app:mounted', scheduleInit)
  nuxtApp.hook('page:finish', scheduleInit)
})
