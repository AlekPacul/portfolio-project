<script setup lang="ts">
defineProps<{
  label: string
  title: string
}>()
</script>

<template>
  <div>
    <p class="text-xs tracking-technical uppercase text-on-surface-variant mb-3">{{ label }}</p>
    <h2 class="text-3xl md:text-4xl font-bold text-on-surface tracking-display">{{ title }}</h2>
  </div>
</template>
