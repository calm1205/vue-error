<script setup lang="ts">
import { onErrorCaptured, ref } from "vue"

const sample = ref(null)

onErrorCaptured((error: unknown) => {
  console.group("ErrorTemplate")
  console.error(error)
  console.groupEnd()
  return false
})
</script>

<template>
  <div>
    <h1>ErrorTemplate</h1>
    <span> {{ sample.name }} </span>
    <span v-html="sample.name"> </span>
    <p>error template</p>
  </div>
</template>
