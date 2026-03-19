<template>
  <section class="base-section">
    <div class="container">
      <div class="section-shell">
        <DecorativeShapes v-if="decorative" :density="decorativeDensity" />
        <div class="section-shell__inner section-shell__content">
          <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
          <component :is="headingTag" v-if="title" class="section-title">{{ title }}</component>
          <p v-if="intro" class="section-intro" v-html="intro" />
          <slot />
        </div>
      </div>
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
  decorative?: boolean
  decorativeDensity?: 'low' | 'medium'
}>(),
  {
    headingTag: 'h1',
    decorative: true,
    decorativeDensity: 'medium'
  }
)
</script>
