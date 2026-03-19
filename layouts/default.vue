<template>
  <div class="site-shell">
    <PageLoaderOverlay
      :visible="loaderVisible"
      :from-color="loaderFromColor"
      :to-color="loaderToColor"
      :cycle="loaderCycle"
    />
    <div class="site-backdrop" aria-hidden="true">
      <div class="site-backdrop__wash site-backdrop__wash--left" />
      <div class="site-backdrop__wash site-backdrop__wash--right" />
      <div class="site-backdrop__wash site-backdrop__wash--bottom" />
    </div>
    <SiteHeader />
    <main class="site-main">
      <PageSideShapes />
      <div class="site-main__content">
        <slot />
      </div>
    </main>
    <BackToTopButton />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { getRouteThemeColor } from '~/utils/routeTheme'

const MIN_LOADER_DURATION = 2000

const route = useRoute()
const router = useRouter()
const displayedThemePath = useState('displayed-theme-path', () => route.path)

const loaderVisible = ref(true)
const loaderFromColor = ref('#ffffff')
const loaderToColor = ref('#ffffff')
const loaderCycle = ref(0)
const pendingNavigationPath = ref<string | null>(null)
const pendingFromPath = ref<string | null>(null)

const wait = (duration: number) => new Promise((resolve) => window.setTimeout(resolve, duration))

const showLoader = async (fromColor: string, toColor: string) => {
  loaderCycle.value += 1
  loaderFromColor.value = fromColor
  loaderToColor.value = toColor
  loaderVisible.value = true
}

const hideLoader = async () => {
  await nextTick()
  loaderVisible.value = false
}

watch(loaderVisible, (visible) => {
  if (!import.meta.client) {
    return
  }

  document.documentElement.style.overflow = visible ? 'hidden' : ''
  document.body.style.overflow = visible ? 'hidden' : ''
}, { immediate: true })

let removeBeforeEach: (() => void) | undefined
let removeAfterEach: (() => void) | undefined

onMounted(async () => {
  const initialTargetColor = getRouteThemeColor(route.path)
  const initialBaseColor = '#ffffff'
  const initialDisplayColor = route.path === '/' ? '#ffffff' : initialTargetColor
  displayedThemePath.value = route.path

  await showLoader(initialBaseColor, initialDisplayColor)
  await wait(MIN_LOADER_DURATION)
  await hideLoader()

  removeBeforeEach = router.beforeEach(async (to, from) => {
    if (to.fullPath === from.fullPath) {
      return true
    }

    pendingNavigationPath.value = to.fullPath
    pendingFromPath.value = from.path
    await showLoader(getRouteThemeColor(from.path), getRouteThemeColor(to.path))
    await wait(MIN_LOADER_DURATION)
    return true
  })

  removeAfterEach = router.afterEach(async (to, _from, failure) => {
    if (failure) {
      pendingNavigationPath.value = null
      if (pendingFromPath.value) {
        displayedThemePath.value = pendingFromPath.value
      }
      pendingFromPath.value = null
      await hideLoader()
      return
    }

    if (!pendingNavigationPath.value || pendingNavigationPath.value !== to.fullPath) {
      return
    }

    displayedThemePath.value = to.path
    pendingNavigationPath.value = null
    pendingFromPath.value = null
    await hideLoader()
  })
})

onBeforeUnmount(() => {
  removeBeforeEach?.()
  removeAfterEach?.()

  if (import.meta.client) {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})
</script>
