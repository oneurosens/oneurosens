<template>
  <section class="base-section">
    <div class="container">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <component :is="headingTag" v-if="title" class="section-title">{{ title }}</component>
      <p v-if="intro" class="section-intro">{{ intro }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
  headingTag?: 'h1' | 'h2' | 'h3'
}>(),
  {
    headingTag: 'h1'
  }
)
</script>
