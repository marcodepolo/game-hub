import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "db8c99427b8a47adae796ae69fac8e0f",
  },
});
