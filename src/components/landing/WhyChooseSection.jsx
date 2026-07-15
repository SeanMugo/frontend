import {
  ShieldCheck,
  Wallet,
  Smartphone,
  Users,
} from "lucide-react";

const highlights = [
  {
    title: "Secure Authentication",
    description:
      "Role-based access ensures drivers, gate staff and administrators each have the right level of control.",
    icon: ShieldCheck,
    color: "bg-[#1A5F7A]",
  },
  {
    title: "Flexible Payments",
    description:
      "Support for Wallet payments, M-Pesa STK Push and hybrid payments gives drivers convenient payment options.",
    icon: Wallet,
    color: "bg-[#22A39F]",
  },
  {
    title: "Mobile Friendly",
    description:
      "Drivers can monitor parking sessions and payments from any device using a clean, responsive interface.",
    icon: Smartphone,
    color: "bg-[#F2A65A]",
  },
  {
    title: "Built for Every User",
    description:
      "Dedicated dashboards streamline workflows for Drivers, Gate Staff and Administrators.",
    icon: Users,
    color: "bg-[#1A5F7A]",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-slotsmart" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#22A39F]/10 px-4 py-2 text-sm font-semibold text-[#22A39F]">
            Why SlotSmart
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Designed For Modern Parking Operations
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SlotSmart brings together secure authentication,
            intelligent parking management and digital payments
            into one seamless platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}