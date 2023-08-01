import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://shomaqsudov-portfolio-backend.glitch.me/";

export const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: Cookies.get('token') || ""
    }
});