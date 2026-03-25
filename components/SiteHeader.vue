<template>
  <header :class="['site-header', `site-header--${themeName}`]">
    <div class="site-header__bar">
      <div class="container header-inner">
        <NuxtLink class="brand" to="/" aria-label="Ô Neuro Sens - Accueil">
          <img :src="logoHorizontal" alt="Ô Neuro Sens Formations" class="brand-logo">
        </NuxtLink>
        <button
          class="menu-toggle"
          :class="{ 'menu-toggle--open': isMenuOpen }"
          type="button"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-controls="main-navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <img :src="menuToggleShape" alt="" class="menu-toggle__shape" aria-hidden="true">
          <span class="menu-toggle__halo" aria-hidden="true" />
          <span class="menu-toggle__icon" aria-hidden="true">
            <span class="menu-toggle__line" />
            <span class="menu-toggle__line" />
            <span class="menu-toggle__line" />
          </span>
          <span class="menu-toggle__label">Menu</span>
        </button>
        <nav
          id="main-navigation"
          ref="navRef"
          class="main-nav"
          :class="{ 'main-nav--open': isMenuOpen }"
          aria-label="Navigation principale"
          @pointerleave="syncIndicatorToActive"
        >
          <div class="main-nav__links">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :ref="(element) => registerLink(element, item.to)"
              class="main-nav__link"
              :class="{ 'main-nav__link--active': isActive(item.to) }"
              :to="item.to"
              @click="closeMenu"
              @pointerenter="syncIndicator(item.to)"
              @focus="syncIndicator(item.to)"
            >
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>
          <span
            class="main-nav__indicator"
            :style="{
              width: indicatorStyle.width,
              transform: `translateX(${indicatorStyle.x})`,
              opacity: indicatorStyle.visible ? '1' : '0',
              backgroundColor: indicatorStyle.color
            }"
            aria-hidden="true"
          />
        </nav>
      </div>
    </div>
    <div class="site-header__wave" aria-hidden="true" />
  </header>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, type ComponentPublicInstance } from 'vue'
import logoHorizontal from '~/assets/img/SVG/logo-horiz-avec-baseline.svg'
import menuToggleShape from '~/assets/img/menu/menu-toggle-shape.svg'
import { getRouteThemeName } from '~/utils/routeTheme'

type NavItem = {
  label: string
  to: string
  color: string
}

const navItems: NavItem[] = [
  { label: 'Accueil', to: '/', color: 'var(--ribbon-fg)' },
  { label: 'Qui sommes-nous', to: '/qui-sommes-nous', color: 'var(--ribbon-fg)' },
  { label: 'Formations', to: '/formations', color: 'var(--ribbon-fg)' },
  { label: 'Actions', to: '/#actions-terrain', color: 'var(--ribbon-fg)' },
  { label: 'Témoignages', to: '/temoignages', color: 'var(--ribbon-fg)' },
  { label: 'Contact', to: '/contact', color: 'var(--ribbon-fg)' }
]

const isMenuOpen = ref(false)
const route = useRoute()
const displayedThemePath = useState('displayed-theme-path', () => route.path)
const themeName = computed(() => getRouteThemeName(displayedThemePath.value))
const navRef = ref<HTMLElement | null>(null)
const linkMap = new Map<string, HTMLElement>()
const indicatorStyle = ref({
  width: '0px',
  x: '0px',
  visible: false,
  color: 'var(--ribbon-fg)'
})

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path: string) => route.path === path

const registerLink = (element: Element | ComponentPublicInstance | null, path: string) => {
  const candidate = element instanceof HTMLElement ? element : element?.$el

  if (candidate instanceof HTMLElement) {
    linkMap.set(path, candidate)
  }
}

const setIndicatorFromElement = (element: HTMLElement | undefined, color?: string) => {
  if (!element || !navRef.value || window.innerWidth <= 980) {
    indicatorStyle.value = {
      width: '0px',
      x: '0px',
      visible: false,
      color: indicatorStyle.value.color
    }
    return
  }

  const navBox = navRef.value.getBoundingClientRect()
  const linkBox = element.getBoundingClientRect()

  indicatorStyle.value = {
    width: `${Math.max(linkBox.width - 18, 42)}px`,
    x: `${linkBox.left - navBox.left + 9}px`,
    visible: true,
    color: color ?? indicatorStyle.value.color
  }
}

const syncIndicator = (path: string) => {
  const item = navItems.find((entry) => entry.to === path)
  setIndicatorFromElement(linkMap.get(path), item?.color)
}

const syncIndicatorToActive = () => {
  const activeItem = navItems.find((item) => isActive(item.to))
  setIndicatorFromElement(activeItem ? linkMap.get(activeItem.to) : undefined, activeItem?.color)
}

const handleResize = () => {
  syncIndicatorToActive()
}

watch(
  () => route.fullPath,
  async () => {
    isMenuOpen.value = false
    await nextTick()
    syncIndicatorToActive()
  }
)

onMounted(async () => {
  await nextTick()
  syncIndicatorToActive()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
