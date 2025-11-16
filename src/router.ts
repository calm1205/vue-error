import { createWebHistory, createRouter } from "vue-router"

import HomeView from "./components/HomeView.vue"
import AboutView from "./components/AboutView.vue"
import ErrorView from "./components/ErrorView.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/error", component: ErrorView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.path === "/error") {
    // throw new Error("Router Error")
  }
  return true
})

router.onError((error: unknown) => {
  console.group("Router Error")
  console.error(error)
  console.groupEnd()
})

export { router }
