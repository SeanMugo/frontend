import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";
import useAuthStore from "../../store/authStore";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      login(
        response.user,
        response.access_token,
        response.refresh_token
      );

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Invalid credentials."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Username
        </label>

        <input
          {...register("username", {
            required: true,
          })}
          type="text"
          placeholder="Enter your username"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1A5F7A] focus:ring-2 focus:ring-[#1A5F7A]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Password
        </label>

        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1A5F7A] focus:ring-2 focus:ring-[#1A5F7A]/20"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#1A5F7A] py-3 font-semibold text-white transition hover:bg-[#164d63] disabled:opacity-60"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>

      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-[#22A39F] hover:underline"
        >
          Create one
        </Link>
      </p>
    </form>
  );
}