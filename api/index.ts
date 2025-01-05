import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "826ad77df4496388a2adb551d5ed1854",
  },
});
