import { createMemoryHistory, createRouter } from "vue-router"

import HomeView from "./components/HomeView.vue"
import ErrorView from "./components/ErrorView.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/error", component: ErrorView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
