<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Api } from "../lib/api"

const api = new Api()

const objects = ref<{ id: string; name: string }[]>([])

const handleClick = async () => {
  const unexpectedId = "9999"
  try {
    const object = await api.getObject(unexpectedId)
    console.log("object", object)
  } catch (error) {
    console.error("Error in ErrorApi", error)
  }
}

onMounted(async () => {
  try {
    objects.value = await api.getObjects()
  } catch (error) {
    console.error("Error in ErrorApi onMounted", error)
  }
})
</script>

<template>
  <div class="p-4 border-gray-300 rounded-md bg-green-100">
    <h1 class="text-2xl font-bold">ErrorApi</h1>
    <button @click="handleClick" class="bg-blue-500 text-white px-4 py-2 rounded-md">
      Click Api call
    </button>

    <p class="font-bold">Api call onMounted</p>
    <ul class="p-4">
      <li v-for="object in objects" :key="object.id" class="list-disc">
        {{ object.name }}
      </li>
    </ul>
  </div>
</template>
