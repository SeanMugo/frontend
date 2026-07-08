import api from "../api/axios";

/*
====================================
LOGIN
====================================
*/

export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login/", credentials);

  return response.data;
};

/*
====================================
REGISTER
====================================
*/

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register/", userData);

  return response.data;
};

/*
====================================
PROFILE
====================================
*/

export const getProfile = async () => {
  const response = await api.get("/auth/profile/");

  return response.data;
};

/*
====================================
UPDATE PROFILE
====================================
*/

export const updateProfile = async (data) => {
  const response = await api.put("/auth/profile/", data);

  return response.data;
};

/*
====================================
CHANGE PASSWORD
====================================
*/

export const changePassword = async (passwords) => {
  const response = await api.post(
    "/auth/change-password/",
    passwords
  );

  return response.data;
};

/*
====================================
LOGOUT
====================================
*/

export const logoutUser = async (refresh) => {
  const response = await api.post("/auth/logout/", {
    refresh,
  });

  return response.data;
};