<template>
  <article class="base-card">
    <h3 class="base-card-title">{{ title }}</h3>
    <p class="base-card-text">{{ text }}</p>
    <slot />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>
