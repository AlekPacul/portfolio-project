<script setup lang="ts">
import { computed } from 'vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'

const year = computed(() => new Date().getFullYear())

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: IconGitHub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gregoriuswisnu/', icon: IconLinkedIn },
]
</script>

<template>
  <footer class="bg-surface-low py-8 px-6 md:px-16">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-xs tracking-technical uppercase text-on-surface-variant">
        © {{ year }} Gregorius Wisnu
      </p>
      <div class="flex items-center gap-5">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-on-surface-variant hover:text-on-surface transition-colors"
          :aria-label="social.label"
        >
          <component :is="social.icon" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
