<script setup lang="ts">
import { unstableFunction } from "../lib/unstableFunction"
import { onMounted, ref } from "vue"

const result = ref<number>()

onMounted(() => {
  try {
    result.value = unstableFunction(1, 2)
  } catch (error) {
    console.error("Error in ErrorLib", error)
    result.value = NaN
  }
})
</script>

<template>
  <div class="p-4 border-gray-300 rounded-md bg-green-100">
    <h1 class="text-2xl font-bold">ErrorLib</h1>
    <p>error lib</p>
    <p>result: {{ result }}</p>
  </div>
</template>
