export {}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = 'G-3ZX7E0E6XC'

export const initializeAnalytics = () => {
  const script = document.createElement('script')

  script.async = true

  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []

  const gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  window.gtag = gtag

  gtag('js', new Date())

  gtag('config', GA_MEASUREMENT_ID)
}

export const trackPageView = (path: string) => {
  window.gtag?.('event', 'page_view', {
    page_path: path,
  })
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  window.gtag?.('event', eventName, params)
}