import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // Cámbialo por tu IP si es externo
});

export const register = (data) => API.post("/register", data);
export const login = (data) => API.post("/login", data);
export const getProgress = (token) =>
  API.get("/progreso", { headers: { Authorization: `Bearer ${token}` } });
export const saveProgress = (token, segundos) =>
  API.post(
    "/progreso",
    { segundos },
    { headers: { Authorization: `Bearer ${token}` } }
  );
