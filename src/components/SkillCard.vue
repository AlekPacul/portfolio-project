<script setup lang="ts">
defineProps<{
  name: string
  icon: string
  level: string
}>()
</script>

<template>
  <div class="flex items-center gap-3 p-5 rounded-xl bg-surface-container hover:bg-surface-high transition-colors">
    <span class="text-xl">{{ icon }}</span>
    <div>
      <p class="text-on-surface font-medium text-sm">{{ name }}</p>
      <p class="text-xs tracking-technical uppercase text-on-surface-variant mt-0.5">{{ level }}</p>
    </div>
  </div>
</template>
