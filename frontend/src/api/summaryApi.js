import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getFileSummary(filePath) {
  const response = await api.get("/summary", {
    params: {
      path: filePath,
    },
  });

  return response.data;
}