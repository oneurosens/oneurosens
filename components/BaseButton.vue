<template>
  <NuxtLink :to="to" :class="buttonClass" v-if="to"><slot /></NuxtLink>
  <a v-else-if="href" :href="href" :download="download" :class="buttonClass"><slot /></a>
  <button v-else :class="buttonClass" :type="type" :disabled="disabled"><slot /></button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
  to?: string
  href?: string
  download?: string | boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}>(),
  {
    disabled: false,
    type: 'button',
    variant: 'primary'
  }
)

const buttonClass = computed(() => ['btn', props.variant === 'secondary' ? 'btn--secondary' : 'btn--primary'])
</script>
