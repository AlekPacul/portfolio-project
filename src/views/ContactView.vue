<template>
  <section class="py-24">
    <div class="max-w-3xl mx-auto px-6">
      <SectionHeader label="Get In Touch" title="Contact Me" />

      <p class="text-gray-400 text-center mt-4 mb-12">
        Have a project in mind or just want to say hi? Drop me a message.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="John Doe"
              class="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="john@example.com"
              class="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-400 mb-2">Subject</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="Project Inquiry"
            class="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="6"
            placeholder="Tell me about your project..."
            class="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          :disabled="submitted"
          class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-colors shadow-lg shadow-indigo-600/25"
        >
          {{ submitted ? 'Message Sent!' : 'Send Message' }}
        </button>
      </form>

      <!-- Alternate contact -->
      <div class="mt-16 pt-12 border-t border-gray-800 grid md:grid-cols-2 gap-6 text-center">
        <a href="mailto:hello@example.com" class="group p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
          <div class="text-3xl mb-3">✉️</div>
          <p class="text-sm text-gray-500 mb-1">Email</p>
          <p class="text-indigo-400 group-hover:text-indigo-300 transition-colors font-medium">hello@example.com</p>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="group p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
          <div class="text-3xl mb-3">💼</div>
          <p class="text-sm text-gray-500 mb-1">LinkedIn</p>
          <p class="text-indigo-400 group-hover:text-indigo-300 transition-colors font-medium">in/yourname</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function handleSubmit() {
  // TODO: wire up to your preferred email service (EmailJS, Formspree, etc.)
  console.log('Form submitted:', { ...form })
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 3000)
}
</script>
