import axios from "axios";
import { baseUrl, pizzaApi } from "../constants/api";

const http = axios.create({
    baseURL :baseUrl
})

const api = axios.create({
    baseURL:"http://solid.lol/"
})

api.interceptors.request.use((config)=>{
config.headers.token=JSON.parse(localStorage.getItem("auth"))?.token
return config
})

export default {
    getPizzas: () => api.get("getall/pizza"),
    craetePizza: (data) => api.post("add/pizza" ,data ),
    auth:(data) => api.post("admin", data),

}
