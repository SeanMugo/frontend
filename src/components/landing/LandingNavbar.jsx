import { CarFront } from "lucide-react";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

export default function LandingNavbar() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed inset-x-0 top-6 z-50">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-8 py-4 shadow-lg backdrop-blur-xl">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16384C] text-white shadow-md">
            <CarFront size={22} />
          </div>

          <div>

            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              SlotSmart
            </h1>

            <p className="text-sm text-slate-500">
              Smart Parking Management
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 text-[15px] font-medium text-slate-600 lg:flex">

          <a
            href="#features"
            className="transition hover:text-slate-900"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="transition hover:text-slate-900"
          >
            How It Works
          </a>

          <a
            href="#why-slotsmart"
            className="transition hover:text-slate-900"
          >
            Why SlotSmart
          </a>

        </nav>

        {/* Actions */}

        <div className="flex items-center gap-4">

          {isAuthenticated ? (

            <Link
              to="/dashboard"
              className="rounded-xl bg-[#16384C] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1C4C67]"
            >
              Dashboard
            </Link>

          ) : (
            <>

              <Link
                to="/login"
                className="font-medium text-slate-600 transition hover:text-slate-900"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-[#16384C] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1C4C67]"
              >
                Get Started
              </Link>

            </>
          )}

        </div>

      </div>

    </header>
  );
}