<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'

const techStack = ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Redux', 'Salesforce', 'd3.js', 'Node.js']

const competencies = [
  {
    label: 'Mobile Development',
    description: 'Building polished, cross-platform mobile apps with React Native and Expo that feel truly native on both iOS and Android.',
  },
  {
    label: 'UI & Experience',
    description: 'Crafting smooth animations, gesture-driven interactions, and pixel-perfect interfaces that users love.',
  },
  {
    label: 'Integration',
    description: 'Connecting mobile apps to REST and GraphQL APIs, push notifications, and cloud backends with confidence.',
  },
  {
    label: 'AI-Powered Workflow',
    description: 'Leveraging agentic AI tools — Claude Code, GitHub Copilot, and Model Context Protocol (MCP) integrations — to accelerate development cycles, reduce boilerplate, and ship higher-quality software faster.',
  },
]
</script>

<template>
  <!-- Hero -->
  <section class="min-h-[90vh] flex items-end pb-28 px-6 md:px-16 bg-surface">
    <div class="w-full max-w-7xl mx-auto">
      <p class="text-xs tracking-technical uppercase text-on-surface-variant mb-8">
        React Native Developer · Bandung, Indonesia
      </p>

      <h1 class="text-6xl md:text-9xl font-bold text-on-surface tracking-display leading-none mb-10">
        Gregorius Wisnu
      </h1>

      <!-- Tech stack pills -->
      <div class="flex flex-wrap gap-2 mb-14">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="px-3 py-1 rounded-full text-xs font-medium tracking-technical text-on-surface-variant bg-surface-highest"
        >
          {{ tech }}
        </span>
      </div>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-6">
        <RouterLink
          to="/projects"
          class="px-6 py-3 rounded-md text-sm font-semibold text-surface signature-sweep hover:opacity-90 transition-opacity"
        >
          View Projects
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          Experience →
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Core Competencies -->
  <section class="py-28 px-6 md:px-16 bg-surface-low">
    <div class="max-w-7xl mx-auto">
      <SectionHeader label="What I Do" title="Core Competencies" />

      <div class="mt-16 grid md:grid-cols-3 gap-4">
        <div
          v-for="item in competencies"
          :key="item.label"
          class="p-8 rounded-xl bg-surface-container hover:bg-surface-high transition-colors"
        >
          <p class="text-xs tracking-technical uppercase text-on-surface-variant mb-4">{{ item.label }}</p>
          <p class="text-on-surface text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
