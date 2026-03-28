<script setup lang="ts">
const links = [
  { to: '/', label: 'Intro' },
  { to: '/about', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
]
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 glass-nav">
    <nav class="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
      <RouterLink
        to="/"
        class="text-xs font-semibold tracking-technical uppercase text-primary hover:text-on-surface transition-colors"
      >
        GW
      </RouterLink>

      <!-- Desktop only nav links -->
      <ul class="hidden md:flex items-center gap-10">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-xs tracking-technical uppercase text-on-surface-variant hover:text-on-surface transition-colors"
            active-class="text-on-surface"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <RouterLink
        to="/contact"
        class="hidden md:inline-flex text-xs tracking-technical uppercase text-on-surface-variant hover:text-primary transition-colors"
      >
        Contact
      </RouterLink>
    </nav>
  </header>

  <!-- Spacer to offset fixed header -->
  <div class="h-16" />
</template>
