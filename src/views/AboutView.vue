<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'

const timeline = [
  {
    period: 'Mar 2025 – Present',
    role: 'Mobile Developer',
    company: 'Flight Centre Travel Group',
    meta: 'Full-time · Remote',
    description: 'Develop and maintain multiple applications using Turborepo and Expo. Improved app performance from 1 FPS to stable 50+ FPS. Enhanced native modules for Salesforce Evergage, integrated Auth0 with cookie-based session management in webview, and created shared libraries inside a monorepo to reduce code repetition.',
    highlights: ['React Native', 'Expo', 'Turborepo', 'Auth0', 'Salesforce'],
  },
  {
    period: 'Mar 2025 – Present',
    role: 'Software Developer',
    company: 'Softwareseni',
    meta: 'Full-time · Remote',
    description: 'Develop React Native applications as part of a software consultancy, delivering mobile solutions across client projects.',
    highlights: ['React Native', 'TypeScript'],
  },
  {
    period: 'Oct 2024 – Jan 2025',
    role: 'Mobile Developer',
    company: 'Compass Financial Technology Pte Ltd.',
    meta: 'Full-time · Remote',
    description: 'Built a trading application with real-time data via WebSocket. Implemented interactive candlestick charts using React Native Skia and Gesture Handler, and built technical indicators (MACD, Stochastic, RSI) with d3.js.',
    highlights: ['React Native', 'WebSocket', 'React Native Skia', 'd3.js', 'Gesture Handler'],
  },
  {
    period: 'Sept 2024 – Oct 2024',
    role: 'Mobile Developer',
    company: 'Freelance',
    meta: 'Contract · Remote',
    description: 'Built a check-in/check-out application using React Native Vision Camera and AWS Rekognition for real-time facial recognition.',
    highlights: ['React Native', 'Vision Camera', 'AWS Rekognition'],
  },
  {
    period: 'Jan 2023 – Aug 2024',
    role: 'Full Stack Developer',
    company: 'Telkom Indonesia',
    meta: 'Full-time · Bandung',
    description: 'Built a new CMS for Telkom Partner Network with React on the frontend and Node.js on the backend. Managed state with Redux (thunk + persist), used MongoDB as the database, and Minio for object storage.',
    highlights: ['React', 'Node.js', 'Redux', 'MongoDB', 'Minio'],
  },
  {
    period: 'Mar 2022 – Aug 2024',
    role: 'Mobile Developer',
    company: 'Telkom Indonesia',
    meta: 'Full-time · Bandung',
    description: 'Built and maintained Mobile TPN, a React Native app for the Telkom Partner Network. Implemented Redux state management, TypeScript components, and Firebase Cloud Messaging for push notifications.',
    highlights: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
  },
]

const education = {
  degree: 'Bachelor of Computer Science',
  institution: 'Binus University',
  period: '2018 – 2022',
}
</script>

<template>
  <section class="py-28 px-6 md:px-16 bg-surface">
    <div class="max-w-7xl mx-auto">
      <SectionHeader label="Career" title="Experience" />

      <div class="mt-20 flex flex-col gap-3">
        <div
          v-for="item in timeline"
          :key="item.role + item.company"
          class="p-8 rounded-xl bg-surface-container hover:bg-surface-high transition-colors"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <p class="text-xs tracking-technical uppercase text-on-surface-variant mb-1">{{ item.period }}</p>
              <h3 class="text-on-surface font-semibold text-lg tracking-display">{{ item.role }}</h3>
              <p class="text-on-surface-variant text-sm mt-0.5">{{ item.company }}</p>
            </div>
            <span class="text-xs text-on-surface-variant tracking-technical shrink-0">{{ item.meta }}</span>
          </div>

          <p class="text-on-surface-variant text-sm leading-relaxed mb-5">{{ item.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in item.highlights"
              :key="tag"
              class="px-3 py-0.5 rounded-full text-xs font-medium bg-surface-highest text-on-surface-variant tracking-technical"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="mt-16">
        <SectionHeader label="Education" title="Background" />
        <div class="mt-8 p-8 rounded-xl bg-surface-container">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
            <div>
              <h3 class="text-on-surface font-semibold tracking-display">{{ education.degree }}</h3>
              <p class="text-on-surface-variant text-sm mt-0.5">{{ education.institution }}</p>
            </div>
            <span class="text-xs text-on-surface-variant tracking-technical shrink-0">{{ education.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
