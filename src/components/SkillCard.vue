<template>
  <div class="flex items-center gap-3 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-indigo-800 transition-colors group">
    <span class="text-2xl">{{ icon }}</span>
    <div>
      <p class="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">{{ name }}</p>
      <p class="text-gray-500 text-xs">{{ level }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon: string
  level: string
}>()
</script>
