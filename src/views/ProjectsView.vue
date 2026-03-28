<script setup lang="ts">
import { shallowRef, computed } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ProjectCard from '@/components/ProjectCard.vue'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  isPrivate: boolean
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Flight Centre Travel Apps',
    description: 'Multi-app platform built with Turborepo and Expo. Resolved critical performance regression from 1 FPS to stable 50+ FPS. Integrated Auth0 with cookie-based session management in webview and enhanced native modules for Salesforce Evergage.',
    tags: ['React Native', 'Expo', 'Turborepo', 'Auth0', 'Salesforce'],
    isPrivate: true,
  },
  {
    id: 2,
    title: 'Trading Platform',
    description: 'Real-time trading application with live market data over WebSocket. Built interactive candlestick charts using React Native Skia and Gesture Handler. Implemented MACD, Stochastic, and RSI technical indicators using Skia and d3.js.',
    tags: ['React Native', 'WebSocket', 'Skia', 'd3.js', 'Gesture Handler'],
    isPrivate: true,
  },
  {
    id: 3,
    title: 'Face Recognition Check-in App',
    description: 'Mobile check-in and check-out application using real-time facial recognition. Integrated React Native Vision Camera with AWS Rekognition for accurate, fast identity verification.',
    tags: ['React Native', 'Vision Camera', 'AWS Rekognition'],
    isPrivate: true,
  },
  {
    id: 4,
    title: 'Mobile TPN',
    description: 'Mobile application for Telkom Partner Network. Built with React Native and TypeScript, featuring Redux state management and Firebase Cloud Messaging for push notifications. Maintained and shipped new features over two years.',
    tags: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    isPrivate: true,
  },
  {
    id: 5,
    title: 'Telkom Partner Network CMS',
    description: 'Full-stack content management system for Telkom Partner Network. Built the React frontend and Node.js backend from scratch, with Redux for state management, MongoDB as the database, and Minio for object storage.',
    tags: ['React', 'Node.js', 'Redux', 'MongoDB', 'Minio'],
    isPrivate: true,
  },
]

const allTags = computed(() => {
  const tags = new Set<string>(['All'])
  projects.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
})

const activeTag = shallowRef('All')

const filteredProjects = computed(() =>
  activeTag.value === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag.value))
)
</script>

<template>
  <section class="py-28 px-6 md:px-16 bg-surface">
    <div class="max-w-7xl mx-auto">
      <SectionHeader label="Portfolio" title="All Projects" />

      <!-- Filter chips -->
      <div class="flex flex-wrap gap-2 mt-10 mb-14">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="activeTag = tag"
          :class="[
            'px-4 py-1.5 rounded-full text-xs font-medium tracking-technical transition-colors',
            activeTag === tag
              ? 'bg-primary text-surface'
              : 'bg-surface-highest text-on-surface-variant hover:text-on-surface',
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          v-bind="project"
          :github-url="undefined"
        />
      </div>

      <p v-if="filteredProjects.length === 0" class="text-center text-on-surface-variant py-16 text-sm">
        No projects found for this filter.
      </p>
    </div>
  </section>
</template>
