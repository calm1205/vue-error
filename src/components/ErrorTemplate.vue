<script setup lang="ts">
import { ref } from "vue"

const sample = ref({})
</script>

<template>
  <div>
    <h1>ErrorTemplate</h1>
    <span>{{ sample.name }}</span>
    <p>error template</p>
  </div>
</template>
