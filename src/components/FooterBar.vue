<template>
  <footer class="border-t border-gray-800 bg-gray-950 py-8">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
      <p>© {{ year }} · Built with Vue 3 + Vite</p>
      <div class="flex items-center gap-5">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition-colors"
          :aria-label="social.label"
        >
          <component :is="social.icon" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'

const year = computed(() => new Date().getFullYear())

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: IconGitHub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: IconLinkedIn },
]
</script>
