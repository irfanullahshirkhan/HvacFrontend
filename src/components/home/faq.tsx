"use client";
import Image from "next/image";
import { useState } from "react";
import { Headphones } from "lucide-react";

const faqs = [
  {
    question: "When should I schedule maintenance?",
    answer:
      "It's recommended to schedule HVAC maintenance at least once a year, ideally before the start of the heating or cooling season. Regular maintenance helps improve efficiency, prevent breakdowns, and prolong the lifespan of your system.",
  },
  {
    question: "How often should I replace HVAC filters?",
    answer:
      "HVAC filters should typically be replaced every 1 to 3 months, depending on factors such as filter type, indoor air quality, and usage. Clogged or dirty filters can restrict airflow and reduce system efficiency.",
  },
  {
    question: "Do you use genuine parts for repairs?",
    answer:
      "Yes, we use only high-quality, genuine parts to ensure the best performance and longevity of your device after the repair.",
  },
  {
    question: "Is there a warranty on your repairs?",
    answer:
      "Absolutely. All our repairs come with a warranty to give you peace of mind. The specific warranty duration may vary depending on the type of repair and the device.",
  },
  {
    question: "How do I get a quote for my repair?",
    answer:
      "You can get a quote by visiting our website or contacting our customer service. We provide transparent pricing with no hidden fees.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#f6f8fb] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#7b9cff] text-white px-6 py-2 rounded-full text-base font-semibold mb-3">
            Do you have
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#22314f] mb-2">
            Any questions?
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Image and Icon */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-[#29508a] text-white rounded-xl p-3 mb-2 flex items-center justify-center">
                  <Headphones className="w-12 h-12" />
                </div>
              </div>
              <Image
                src="/images/img/pic3.jpg"
                alt="Support Agent"
                width={400}
                height={320}
                className="rounded-2xl object-cover w-full h-80 shadow-lg"
              />
            </div>
          </div>
          {/* Right: Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center py-5 text-lg font-medium text-[#22314f] focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                        openIdx === idx ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIdx === idx ? "max-h-40 py-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-base px-2 pb-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
