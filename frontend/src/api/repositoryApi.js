import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getRepositoryGraph({
  repositoryPath,
  maxFiles,
  ignoreMigrations,
  ignoreTests,
}) {
  const response = await api.post("/graph", {
    path: repositoryPath,
    max_files: maxFiles,
    ignore_migrations: ignoreMigrations,
    ignore_tests: ignoreTests,
  });

  return response.data;
}