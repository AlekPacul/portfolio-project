<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import BottomTabBar from '@/components/BottomTabBar.vue'
</script>

<template>
  <div class="min-h-screen bg-surface text-on-surface flex flex-col">
    <NavBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <FooterBar />
    <BottomTabBar />
  </div>
</template>
