<script setup lang="ts"></script>

<template>
  <div>
    <h1>Vue error</h1>
    <nav style="display: flex; gap: 10px">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/error">Error</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
