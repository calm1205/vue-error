<script setup lang="ts">
import ErrorScript from "./ErrorScript.vue"
import ErrorTemplate from "./ErrorTemplate.vue"
import ErrorLib from "./ErrorLib.vue"

import { onErrorCaptured, onMounted } from "vue"
import { Api } from "../lib/api"

const api = new Api()

onMounted(async () => {
  const objects = await api.getObjects()
  console.log(objects)
  const object = await api.getObject("1")
  console.log(object)
})

onErrorCaptured((error: unknown) => {
  console.group("ErrorView")
  console.error("子コンポーネントでエラー:", error)
  console.groupEnd()
  return false
})
</script>

<template>
  <div>
    <h1>Error</h1>
    <ErrorScript />
    <ErrorTemplate />
    <ErrorLib />
  </div>
</template>

<style scoped></style>
