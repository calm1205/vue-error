import { createApp, type ComponentPublicInstance } from "vue"
import App from "./App.vue"
import { router } from "./router"
import "./style.css"

const app = createApp(App)
app.use(router).mount("#app")

app.config.errorHandler = (
  error: unknown,
  instance: ComponentPublicInstance | null,
  info: string
): void => {
  if (error instanceof Error) {
    console.group("Vue Global Error")
    console.error(error.message)
    console.error(error.cause)
    console.error(error.stack)
    console.error(instance)
    console.error(info)
    console.groupEnd()
  } else {
    console.error(`not Error. error`, error, info)
  }
}
