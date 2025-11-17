<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue"
</script>

<template>
  <main class="flex h-screen w-screen">
    <Sidebar />
    <div class="flex-1 p-4">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
