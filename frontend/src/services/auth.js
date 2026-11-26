import { apiRequest } from "./api";

export async function login(email, password) {
  const data = await apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    skipAuth: true,
  });

  localStorage.setItem("token", data.token);

  return data;
}

export function logout() {
  localStorage.removeItem("token");
}
