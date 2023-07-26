import axios from "axios";

const BASE_URL = "https://shomaqsudov-portfolio-backend.glitch.me/";

export const myAxios = axios.create({
    baseURL: BASE_URL,
});