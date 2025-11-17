<script setup lang="ts">
import ErrorBoundary from "./ErrorBoundary.vue"
import ErrorTemplate from "./ErrorTemplate.vue"
import ErrorLib from "./ErrorLib.vue"
import ErrorApi from "./ErrorApi.vue"
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-2xl font-bold">Error</h1>
    <ErrorLib />
    <ErrorBoundary>
      <ErrorTemplate />
    </ErrorBoundary>
    <ErrorApi />
  </div>
</template>
