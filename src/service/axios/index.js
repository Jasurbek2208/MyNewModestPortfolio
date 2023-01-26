import axios from "axios";

const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://shomaqsudov-portfolio-backend.glitch.me/";

export const myAxios = axios.create({
    //   baseURL: process.env.NODE_ENV === "production" ? BASE_URL : "/",
    baseURL: BASE_URL,
});
// headers: {
//     Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
// },