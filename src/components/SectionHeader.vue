<template>
  <div class="text-center">
    <p class="text-indigo-400 font-mono text-sm tracking-wider mb-2">{{ label }}</p>
    <h2 class="text-3xl md:text-4xl font-bold text-white">{{ title }}</h2>
    <div class="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  title: string
}>()
</script>
