<script setup lang="ts">
import { add } from "../lib/add"
import { onMounted } from "vue"

onMounted(() => {
  console.log(add(1, 2))
})
</script>

<template>
  <div>
    <h1>Error</h1>
  </div>
</template>

<style scoped></style>
