import api from "../api/axios";

// =========================
// PARKING SLOTS
// =========================

export const getParkingSlots = async () => {
  const response = await api.get("/slots/");
  return response.data;
};

// =========================
// PARKING SESSIONS
// =========================

export const getParkingSessions = async () => {
  const response = await api.get("/sessions/");
  return response.data;
};

export const getActiveSession = async () => {
  const response = await api.get("/sessions/active/");
  return response.data;
};

export const getSessionHistory = async () => {
  const response = await api.get("/sessions/history/");
  return response.data;
};

// =========================
// CHECK IN
// =========================

export const checkIn = async (data) => {
  const response = await api.post("/sessions/check_in/", data);
  return response.data;
};

// =========================
// CHECK OUT
// =========================

export const checkOut = async (sessionId) => {
  const response = await api.post(`/sessions/${sessionId}/check_out/`);
  return response.data;
};