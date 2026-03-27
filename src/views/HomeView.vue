<template>
  <!-- Hero -->
  <section class="relative min-h-[90vh] flex items-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-gray-950 to-gray-950 pointer-events-none" />
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6 py-24">
      <p class="text-indigo-400 font-mono text-sm mb-4 tracking-wider">Hello, world 👋</p>
      <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Your Name</span>,<br />
        Full-Stack Developer
      </h1>
      <p class="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        I build fast, accessible, and beautiful web applications. Focused on Vue.js, Node.js, and modern cloud infrastructure.
      </p>
      <div class="flex flex-wrap gap-4">
        <RouterLink
          to="/projects"
          class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-600/25"
        >
          View Projects
        </RouterLink>
        <RouterLink
          to="/contact"
          class="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold transition-colors"
        >
          Get In Touch
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section class="py-24 bg-gray-900/50">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader label="What I Do" title="Skills & Technologies" />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        <SkillCard v-for="skill in skills" :key="skill.name" v-bind="skill" />
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader label="My Work" title="Featured Projects" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <ProjectCard v-for="project in featuredProjects" :key="project.title" v-bind="project" />
      </div>
      <div class="text-center mt-10">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
        >
          See all projects
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import SkillCard from '@/components/SkillCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const skills = [
  { name: 'Vue.js', icon: '⚡', level: 'Expert' },
  { name: 'TypeScript', icon: '🔷', level: 'Advanced' },
  { name: 'Node.js', icon: '🟢', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: '🎨', level: 'Expert' },
  { name: 'PostgreSQL', icon: '🐘', level: 'Intermediate' },
  { name: 'Docker', icon: '🐳', level: 'Intermediate' },
  { name: 'Git', icon: '🔀', level: 'Advanced' },
  { name: 'REST APIs', icon: '🔗', level: 'Advanced' },
]

const featuredProjects = [
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
]
</script>
