import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-50 pt-16">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-[#22A39F]/10 px-4 py-2 text-sm font-semibold text-[#1A5F7A]">
            Smart Parking Management
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Parking
            <span className="text-[#1A5F7A]"> Made Simple.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Monitor parking spaces, manage vehicle entry and exit,
            and complete secure M-Pesa payments from one modern
            platform.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              to="/login"
              className="rounded-xl bg-[#1A5F7A] px-7 py-4 font-semibold text-white transition hover:bg-[#154b61]"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="flex items-center rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Learn More
              <ArrowRight className="ml-2" size={18} />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

          {/* Top */}

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-wider text-[#22A39F]">
                Parking Overview
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                Live Dashboard
              </h2>

            </div>

            <div className="rounded-xl bg-[#1A5F7A] px-4 py-2 text-sm font-semibold text-white">
              Today
            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-emerald-50 p-5">

              <p className="text-sm text-slate-500">
                Available
              </p>

              <h3 className="mt-2 text-3xl font-bold text-emerald-600">
                24
              </h3>

            </div>

            <div className="rounded-2xl bg-red-50 p-5">

              <p className="text-sm text-slate-500">
                Occupied
              </p>

              <h3 className="mt-2 text-3xl font-bold text-red-500">
                12
              </h3>

            </div>

            <div className="rounded-2xl bg-sky-50 p-5">

              <p className="text-sm text-slate-500">
                Sessions
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#1A5F7A]">
                41
              </h3>

            </div>

            <div className="rounded-2xl bg-amber-50 p-5">

              <p className="text-sm text-slate-500">
                Revenue
              </p>

              <h3 className="mt-2 text-3xl font-bold text-amber-600">
                KES 8.4K
              </h3>

            </div>

          </div>

          {/* Parking Layout */}

          <div className="mt-8">

            <h3 className="mb-4 font-semibold text-slate-800">
              Live Parking Status
            </h3>

            <div className="grid grid-cols-5 gap-3">

              {[
                ["M1", true],
                ["M2", false],
                ["M3", true],
                ["M4", true],
                ["M5", false],

                ["A1", true],
                ["A2", false],
                ["A3", true],
                ["A4", true],
                ["A5", false],

                ["B1", true],
                ["B2", true],
                ["B3", false],
                ["B4", true],
                ["B5", true],
              ].map(([slot, available]) => (

                <div
                  key={slot}
                  className={`rounded-xl p-3 text-center text-sm font-semibold ${
                    available
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {slot}
                </div>

              ))}

            </div>

            <div className="mt-6 flex gap-6 text-sm">

              <div className="flex items-center gap-2">

                <div className="h-3 w-3 rounded-full bg-emerald-500" />

                Available

              </div>

              <div className="flex items-center gap-2">

                <div className="h-3 w-3 rounded-full bg-red-500" />

                Occupied

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}