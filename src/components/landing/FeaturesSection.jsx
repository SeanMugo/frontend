import {
  ParkingCircle,
  ShieldCheck,
  CreditCard,
  CarFront,
  Users,
  Clock3,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Parking",
    description:
      "View available and occupied parking spaces instantly with live updates.",
    icon: ParkingCircle,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Fast Vehicle Check-In",
    description:
      "Gate staff can register incoming vehicles in seconds and assign parking slots.",
    icon: CarFront,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Secure M-Pesa Payments",
    description:
      "Drivers complete parking payments safely through integrated STK Push.",
    icon: CreditCard,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Role-Based Access",
    description:
      "Separate dashboards for Drivers, Gate Staff and Administrators.",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "User Management",
    description:
      "Administrators manage drivers, gate staff and parking operations from one place.",
    icon: Users,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Live Session Tracking",
    description:
      "Monitor active parking sessions and process check-outs in real time.",
    icon: Clock3,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#22A39F]/10 px-4 py-2 text-sm font-semibold text-[#1A5F7A]">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You Need To Manage Parking
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            SlotSmart combines parking management, secure payments
            and role-based access into one modern platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#22A39F]/30 hover:shadow-xl"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}