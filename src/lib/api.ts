import axios, { type AxiosInstance } from "axios"

export class Api {
  static #singletonInstance: AxiosInstance
  static #baseUrl = "https://api.restful-api.dev/"

  constructor() {
    if (!Api.#singletonInstance) {
      Api.#singletonInstance = axios.create({
        baseURL: Api.#baseUrl,
      })
    }
    Api.#singletonInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("Axios interceptor error", error)
      }
    )
  }

  async getObjects(): Promise<any[]> {
    const response = await Api.#singletonInstance.get("/objects")
    return response.data
  }

  async getObject(id: string): Promise<any> {
    const response = await Api.#singletonInstance.get(`/objects/${id}`)
    return response.data
  }
}
