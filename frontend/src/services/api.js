const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function apiRequest(path, options = {}) {
    const token = options.skipAuth
        ? null
        : localStorage.getItem("token");

    const headers = {
        ...options.headers,
    };

    if (options.body) {
        headers["Content-Type"] = "application/json";
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        skipAuth: undefined,
        headers,
    });

    if (!response.ok) {
        throw new Error(`Błąd serwera: ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}
