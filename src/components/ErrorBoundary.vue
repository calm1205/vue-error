<script lang="ts" setup>
import { onErrorCaptured, ref } from "vue"

const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err
  console.error(err)
  return false
})
</script>

<template>
  <slot name="fallback" v-if="error">
    <div class="p-4 border-gray-300 rounded-md bg-red-100">
      <p class="font-bold">Error occurred.</p>
      <p class="text-gray-700">{{ error?.message }}</p>
    </div>
  </slot>
  <slot v-else />
</template>
