import {
  UserPlus,
  CarFront,
  ParkingCircle,
 CreditCard,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Create an Account",
    description:
      "Drivers register and securely access the SlotSmart platform.",
    icon: UserPlus,
  },
  {
    title: "Vehicle Check-In",
    description:
      "Gate staff assign an available parking slot and start a parking session.",
    icon: CarFront,
  },
  {
    title: "Parking Session",
    description:
      "Drivers monitor their active session while the system tracks occupancy in real time.",
    icon: ParkingCircle,
  },
  {
    title: "Secure Payment",
    description:
      "At checkout, payment is completed using Wallet or M-Pesa STK Push.",
    icon: CreditCard,
  },
  {
    title: "Session Complete",
    description:
      "The parking session closes automatically and the slot becomes available again.",
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-[#22A39F]/10 px-4 py-2 text-sm font-semibold text-[#22A39F]">
            Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            How SlotSmart Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From arrival to payment, SlotSmart keeps the parking
            process efficient, secure and easy for everyone involved.
          </p>

        </div>

        <div className="relative">

          {/* Connector */}

          <div className="absolute left-1/2 top-10 hidden h-1 w-[78%] -translate-x-1/2 rounded-full bg-slate-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A5F7A] text-white shadow-lg transition duration-300 hover:scale-105">

                    <Icon size={34} />

                  </div>

                  <div className="mt-5">

                    <span className="text-sm font-semibold text-[#22A39F]">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}