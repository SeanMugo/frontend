import { CarFront } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#102F41] text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-[#1A5F7A] p-3 text-white">
                <CarFront size={20} />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  SlotSmart
                </h3>

                <p className="text-sm text-slate-400">
                  Smart Parking Management
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7">
              A modern parking management platform that simplifies
              vehicle entry, parking allocation and digital payments.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="font-semibold text-white">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3">

              <a href="#features" className="hover:text-white">
                Features
              </a>

              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>

              <a href="#why-slotsmart" className="hover:text-white">
                Why SlotSmart
              </a>

            </div>

          </div>

          {/* Account */}

          <div>

            <h4 className="font-semibold text-white">
              Account
            </h4>

            <div className="mt-5 flex flex-col gap-3">

              <Link to="/login" className="hover:text-white">
                Sign In
              </Link>

              <Link to="/register" className="hover:text-white">
                Register
              </Link>

            </div>

          </div>

          {/* Project */}

          <div>

            <h4 className="font-semibold text-white">
              Project
            </h4>

            <p className="mt-5 leading-7">
              Developed as a Smart Parking Management System,
              demonstrating secure authentication, role-based access,
              parking management and integrated digital payments.
            </p>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} SlotSmart. All rights reserved.

        </div>

      </div>

    </footer>
  );
}