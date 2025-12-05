<script setup lang="ts">
import { ref } from "vue";

const sample = ref(null);
</script>

<template>
  <div class="p-4 border-gray-300 rounded-md bg-green-100">
    <h1 class="text-2xl font-bold">ErrorTemplate</h1>
    <span> {{ sample.name }} </span>
    <p>error template</p>
  </div>
</template>
