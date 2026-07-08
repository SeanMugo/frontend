import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT to protected requests only
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    const publicRoutes = [
      "/auth/login/",
      "/auth/register/",
    ];

    const isPublic = publicRoutes.some((route) =>
      config.url?.includes(route)
    );

    if (token && !isPublic) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;