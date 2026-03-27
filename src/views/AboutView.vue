<template>
  <section class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader label="About Me" title="Who I Am" />

      <div class="mt-16 grid lg:grid-cols-2 gap-16 items-center">
        <!-- Avatar placeholder -->
        <div class="flex justify-center lg:justify-start">
          <div class="relative">
            <div class="w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-8xl shadow-2xl shadow-indigo-500/25">
              👤
            </div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600/20 rounded-2xl blur-xl" />
          </div>
        </div>

        <!-- Bio -->
        <div>
          <h2 class="text-3xl font-bold text-white mb-6">
            I'm a developer who loves building things for the web.
          </h2>
          <div class="space-y-4 text-gray-400 leading-relaxed">
            <p>
              With X+ years of experience in frontend and backend development, I specialize in creating performant, scalable web applications using modern technologies.
            </p>
            <p>
              I'm passionate about clean code, great user experiences, and continuously learning new tools. When I'm not coding, you'll find me exploring open-source projects or writing about software development.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              Download Resume
            </a>
            <RouterLink
              to="/contact"
              class="px-5 py-2.5 rounded-xl border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium transition-colors"
            >
              Contact Me
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="mt-24">
        <h3 class="text-2xl font-bold text-white mb-12 text-center">Experience</h3>
        <div class="relative border-l border-gray-800 ml-4 space-y-12">
          <div v-for="item in timeline" :key="item.year" class="relative pl-8">
            <div class="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-gray-950" />
            <span class="text-indigo-400 font-mono text-sm">{{ item.year }}</span>
            <h4 class="text-white font-semibold text-lg mt-1">{{ item.role }}</h4>
            <p class="text-gray-500 text-sm mb-2">{{ item.company }}</p>
            <p class="text-gray-400 text-sm leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'

const timeline = [
  {
    year: '2024 – Present',
    role: 'Senior Frontend Developer',
    company: 'Company Name',
    description: 'Leading frontend architecture for a SaaS platform used by thousands of customers worldwide.',
  },
  {
    year: '2022 – 2024',
    role: 'Full-Stack Developer',
    company: 'Another Company',
    description: 'Built and maintained multiple client-facing applications using Vue.js and Node.js.',
  },
  {
    year: '2020 – 2022',
    role: 'Junior Developer',
    company: 'Startup',
    description: 'Contributed to building RESTful APIs and responsive UI components.',
  },
]
</script>
