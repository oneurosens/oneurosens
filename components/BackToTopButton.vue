<template>
  <button
    class="back-to-top"
    :class="{ 'back-to-top--visible': isVisible }"
    type="button"
    aria-label="Revenir en haut de la page"
    @click="scrollToTop"
  >
    <span class="back-to-top__shape" aria-hidden="true">
      <span class="back-to-top__arrow" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isVisible = ref(false)

const updateVisibility = () => {
  isVisible.value = window.scrollY > 420
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>
