"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: 19,
    priceColor: "text-blue-900",
    bg: "bg-[#f6f7f9]",
    headerBg: "bg-blue-400 text-white",
    features: [
      "Reminder Service",
      "3 Months Services Waranty",
      "No Overtime Fees",
      "Receive Priority Scheduling",
      "Services Waranty",
      <>
        Save <span className="font-bold text-blue-500">5%</span> On Accesories
      </>,
    ],
    desc: "Yearly tune up",
    text: "text-gray-700",
    btn: "bg-blue-900 text-white hover:bg-blue-800",
  },
  {
    name: "Best Plan",
    price: 33,
    priceColor: "text-blue-200",
    bg: "bg-blue-900",
    headerBg: "bg-blue-400 text-white",
    features: [
      "Reminder Service",
      "6 Months Services Waranty",
      "No Overtime Fees",
      "Receive Priority Scheduling",
      "Services Waranty",
      <>
        Save <span className="font-bold text-blue-200">10%</span> On Accesories
      </>,
    ],
    desc: "Two visits yearly",
    text: "text-white",
    btn: "bg-blue-400 text-white hover:bg-blue-500",
    highlight: true,
  },
  {
    name: "Fantastic Plan",
    price: 41,
    priceColor: "text-blue-900",
    bg: "bg-[#f6f7f9]",
    headerBg: "bg-blue-400 text-white",
    features: [
      "Reminder Service",
      "1 Year Services Waranty",
      "No Overtime Fees",
      "Receive Priority Scheduling",
      "Services Waranty",
      <>
        Save <span className="font-bold text-blue-500">5%</span> On Accesories
      </>,
    ],
    desc: "Three visits yearly",
    text: "text-gray-700",
    btn: "bg-blue-900 text-white hover:bg-blue-800",
  },
];

export default function PricePlan() {
  return (
    <section className="bg-[#f4f6fa] py-20 font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded-full mb-4 shadow text-base">
            Complate Solutions
          </span>
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
            sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`
                group flex-1 rounded-xl p-8 shadow-md border border-gray-200
                flex flex-col justify-between transition-all duration-300
                ${plan.bg}
                ${
                  plan.highlight
                    ? "scale-105 z-10 border-blue-400 shadow-lg"
                    : ""
                }
                hover:shadow-2xl hover:scale-105 hover:border-blue-400
              `}
            >
              <div>
                <div
                  className={`relative text-center rounded-full ${plan.headerBg} px-6 py-2 font-bold text-lg mb-8`}
                >
                  {plan.name}
                  {plan.highlight && (
                    <span className="absolute -top-4 right-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      Best Value
                    </span>
                  )}
                </div>
                <div className="text-center mb-6">
                  <div className="flex justify-center items-end gap-2">
                    <span className="text-lg text-gray-500 font-semibold">
                      $
                    </span>
                    <span className={`text-5xl font-bold ${plan.priceColor}`}>
                      {plan.price}
                    </span>
                    <span className="text-lg text-gray-500 font-semibold">
                      /monthly
                    </span>
                  </div>
                  <div className={`mt-4 font-medium ${plan.text}`}>
                    {plan.desc}
                  </div>
                </div>
                <h5 className={`font-bold mb-2 ${plan.text}`}>Features</h5>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className={`w-4 h-4 ${
                          plan.highlight ? "text-blue-200" : "text-blue-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`${plan.text} text-base`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-auto">
                <a
                  href="#"
                  className={`
                    inline-block rounded-md px-8 py-3 font-semibold text-base transition
                    ${plan.btn}
                    group-hover:scale-105 group-hover:-translate-y-1
                    shadow group-hover:shadow-lg
                  `}
                >
                  Select Plan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
