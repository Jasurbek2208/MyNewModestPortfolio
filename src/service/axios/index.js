import axios from "axios";

const BASE_URL = "https://portfolio-backend-livid-nine.vercel.app/";

export const myAxios = axios.create({
    baseURL: BASE_URL,
});