import api from "../api/axios";

export const createBooking = async (bookingData) => {
  const response = await api.post("/bookings/", bookingData);
  return response.data;
};