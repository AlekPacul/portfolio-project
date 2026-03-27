<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <RouterLink to="/" class="text-xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors">
        SS
      </RouterLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="hover:text-white transition-colors"
            active-class="text-white"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <RouterLink
        to="/#contact"
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
      >
        Hire Me
      </RouterLink>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-gray-400 hover:text-white transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4">
      <ul class="flex flex-col gap-4 text-sm font-medium text-gray-400">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="block hover:text-white transition-colors"
            active-class="text-white"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>

  <!-- Spacer to offset fixed header -->
  <div class="h-16" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
</script>
