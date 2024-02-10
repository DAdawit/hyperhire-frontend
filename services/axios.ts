import axios from "axios";
// export const devBaseurl = "http://127.0.0.1:8000/api";
export const prodBaseUrl = "http://54.160.85.22:8000/api/v1";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};
const api = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: prodBaseUrl,
  headers: headers,
});
let access_token = null;
if (typeof window !== "undefined") {
  access_token = localStorage.getItem("access_token");
}
if (access_token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
}

export default api;
