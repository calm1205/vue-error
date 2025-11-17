<script setup lang="ts"></script>

<template>
  <nav class="flex flex-col gap-4 h-full w-[200px] bg-gray-100 p-4 text-blue-600 underline">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/error">Error</RouterLink>
    <RouterLink to="/not-found">Not found</RouterLink>
  </nav>
</template>
