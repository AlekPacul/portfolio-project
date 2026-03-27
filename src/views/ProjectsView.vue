<template>
  <section class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader label="Portfolio" title="All Projects" />

      <!-- Filter tabs -->
      <div class="flex flex-wrap gap-2 mt-10 mb-12">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="activeTag = tag"
          :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
            activeTag === tag
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white',
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.title"
          v-bind="project"
        />
      </div>

      <p v-if="filteredProjects.length === 0" class="text-center text-gray-500 py-16">
        No projects found for this filter.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application built with Vue 3 and Node.js, featuring real-time updates and a modern UI.',
    tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform with a headless CMS integration, optimized for performance and SEO.',
    tags: ['Nuxt.js', 'Tailwind', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A data visualization dashboard displaying real-time analytics with interactive charts and filters.',
    tags: ['Vue 3', 'D3.js', 'WebSocket'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'CLI Tool',
    description: 'A command-line utility that automates repetitive development tasks and boosts productivity.',
    tags: ['Node.js', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Design System',
    description: 'A reusable component library with full Storybook documentation and accessibility support.',
    tags: ['Vue 3', 'Tailwind', 'Storybook'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'API Gateway',
    description: 'A lightweight API gateway built with Node.js supporting rate limiting and JWT authentication.',
    tags: ['Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
]

const activeTag = ref('All')

const allTags = computed(() => {
  const tags = new Set<string>(['All'])
  projects.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
})

const filteredProjects = computed(() =>
  activeTag.value === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag.value))
)
</script>
