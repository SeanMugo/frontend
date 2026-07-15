import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-[#F4F8FB] py-28">

      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[36px] bg-[#16384C] px-10 py-20 text-center shadow-xl">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#F2A65A]">
            Get Started
          </span>

          <h2 className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-tight text-white">
            Ready to Simplify
            <br />
            Parking Management?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join drivers, gate staff and administrators already using
            SlotSmart to streamline parking operations with secure,
            modern technology.
          </p>

          <div className="mt-12 flex justify-center gap-5">

            <Link
              to="/register"
              className="inline-flex items-center rounded-xl bg-[#F2A65A] px-8 py-4 font-semibold text-slate-900 transition hover:scale-[1.03]"
            >
              Create Account
              <ArrowRight size={18} className="ml-2" />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#16384C]"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}