import { useState } from "react";
import toast from "react-hot-toast";

import useParking from "../hooks/useParking";
import BookingModal from "../components/booking/BookingModal";
import { createBooking } from "../services/bookingService";

function getStatusStyle(status) {
  switch (status) {
    case "available":
      return "bg-emerald-100 text-emerald-700";

    case "reserved":
      return "bg-amber-100 text-amber-700";

    case "occupied":
      return "bg-red-100 text-red-700";

    case "maintenance":
      return "bg-slate-200 text-slate-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Parking() {
  const { slots, loading } = useParking();

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const handleBooking = async (data) => {
    try {
      setBookingLoading(true);

      await createBooking({
        slot_id: selectedSlot.id,
        vehicle_number: data.vehicle_number,
        start_time: data.start_time,
        end_time: data.end_time,
      });

      toast.success("Booking created successfully!");

      setBookingOpen(false);
      setSelectedSlot(null);

    } catch (error) {
      console.error(error.response?.data);

      toast.error(
        error.response?.data?.error ||
          "Unable to create booking."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="text-slate-500">
        Loading parking slots...
      </p>
    );
  }

  return (
    <>
      <div>
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          Parking Slots
        </h1>

        <p className="mb-8 text-slate-500">
          Choose an available parking slot.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {slots.map((slot) => (
            <div
              key={slot.id}
              onClick={() => {
                if (slot.is_available) {
                  setSelectedSlot(slot);
                  setBookingOpen(true);
                }
              }}
              className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                slot.is_available
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-70"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  {slot.slot_number}
                </h2>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                    slot.status
                  )}`}
                >
                  {slot.status_display}
                </span>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  <strong>Zone:</strong> {slot.zone}
                </p>

                <p>
                  <strong>Floor:</strong> {slot.floor}
                </p>

                <p>
                  <strong>Vehicle:</strong> {slot.slot_type}
                </p>

                <p>
                  <strong>Rate:</strong> KES {slot.base_rate}/hr
                </p>

                {slot.has_charger && (
                  <p className="font-medium text-[#1A5F7A]">
                    ⚡ EV Charging Available
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        slot={selectedSlot}
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setSelectedSlot(null);
        }}
        onSubmit={handleBooking}
        loading={bookingLoading}
      />
    </>
  );
}