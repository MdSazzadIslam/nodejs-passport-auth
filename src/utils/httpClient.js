import axios from "axios";
const url = "http://localhost:4000";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
    responseType: "json",
  },
});
