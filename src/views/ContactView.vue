<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<template>
  <section class="py-28 px-6 md:px-16 bg-surface">
    <div class="max-w-3xl mx-auto">
      <SectionHeader label="Get In Touch" title="Contact" />

      <p class="text-on-surface-variant text-sm mt-4 mb-14 leading-relaxed">
        Have a project in mind or want to collaborate? Reach out directly via email or LinkedIn.
      </p>

      <div class="grid md:grid-cols-2 gap-4">
        <a
          href="mailto:wisnu.gregorius1@gmail.com"
          class="group flex items-center gap-4 p-6 rounded-xl bg-surface-container hover:bg-surface-high transition-colors"
        >
          <div class="shrink-0 w-10 h-10 rounded-full bg-surface-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
          <div>
            <p class="text-xs tracking-technical uppercase text-on-surface-variant mb-0.5">Email</p>
            <p class="text-on-surface text-sm font-medium">wisnu.gregorius1@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/gregoriuswisnu/"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-4 p-6 rounded-xl bg-surface-container hover:bg-surface-high transition-colors"
        >
          <div class="shrink-0 w-10 h-10 rounded-full bg-surface-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div>
            <p class="text-xs tracking-technical uppercase text-on-surface-variant mb-0.5">LinkedIn</p>
            <p class="text-on-surface text-sm font-medium">in/gregoriuswisnu</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
