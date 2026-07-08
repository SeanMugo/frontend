import { useForm } from "react-hook-form";

export default function BookingModal({
  slot,
  isOpen,
  onClose,
  onSubmit,
  loading,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  if (!isOpen || !slot) return null;

  const submitForm = (data) => {
    onSubmit(data);

    reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-2 text-2xl font-bold text-slate-800">
          Book {slot.slot_number}
        </h2>

        <p className="mb-6 text-sm text-slate-500">
          Fill in your vehicle details.
        </p>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="space-y-4"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Vehicle Number
            </label>

            <input
              {...register("vehicle_number", {
                required: true,
              })}
              placeholder="KDA 123A"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1A5F7A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Start Time
            </label>

            <input
              type="datetime-local"
              {...register("start_time", {
                required: true,
              })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              End Time
            </label>

            <input
              type="datetime-local"
              {...register("end_time", {
                required: true,
              })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#1A5F7A] px-5 py-2 font-semibold text-white hover:bg-[#164d63]"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}