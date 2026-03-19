export const ROUTE_THEME_COLORS = {
  home: '#ee6f63',
  about: '#f08bac',
  formations: '#2f5d9a',
  testimonials: '#8acfda',
  contact: '#ffcc00'
} as const

export type RouteThemeName = keyof typeof ROUTE_THEME_COLORS

export const getRouteThemeName = (path: string): RouteThemeName => {
  if (path === '/qui-sommes-nous') {
    return 'about'
  }

  if (path === '/formations') {
    return 'formations'
  }

  if (path === '/temoignages') {
    return 'testimonials'
  }

  if (path === '/contact') {
    return 'contact'
  }

  return 'home'
}

export const getRouteThemeColor = (path: string) => ROUTE_THEME_COLORS[getRouteThemeName(path)]
