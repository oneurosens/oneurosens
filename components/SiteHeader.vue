<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink class="brand" to="/" aria-label="Ô Neuro Sens - Accueil">
        <img :src="logoHorizontal" alt="Ô Neuro Sens Formations" class="brand-logo">
      </NuxtLink>
      <nav class="main-nav" aria-label="Navigation principale">
        <NuxtLink to="/qui-sommes-nous">Qui sommes-nous</NuxtLink>
        <NuxtLink to="/formations">Formations</NuxtLink>
        <NuxtLink to="/actions">Actions</NuxtLink>
        <NuxtLink to="/temoignages">Témoignages</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoHorizontal from '~/assets/img/SVG/logo-horiz-avec-baseline.svg'
</script>
