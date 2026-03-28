<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags: readonly string[]
  githubUrl?: string
  liveUrl?: string
  stars?: number
  isPrivate?: boolean
}>()
</script>

<template>
  <article class="flex flex-col p-6 rounded-xl bg-surface-container hover:bg-surface-high transition-colors">
    <h3 class="text-on-surface font-semibold text-base tracking-display mb-3">
      {{ title }}
    </h3>
    <p class="text-on-surface-variant text-sm leading-relaxed flex-1 mb-5">{{ description }}</p>

    <div class="flex flex-wrap gap-2 mb-5">
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-3 py-0.5 rounded-full text-xs font-medium bg-surface-highest text-on-surface-variant tracking-technical"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex items-center gap-5 text-xs text-on-surface-variant">
      <span v-if="stars" class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        {{ stars }}
      </span>

      <span v-if="isPrivate" class="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Private
      </span>

      <a
        v-if="!isPrivate && githubUrl"
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 hover:text-primary transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        Code
      </a>

      <a
        v-if="liveUrl"
        :href="liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1.5 hover:text-primary transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Live
      </a>
    </div>
  </article>
</template>
