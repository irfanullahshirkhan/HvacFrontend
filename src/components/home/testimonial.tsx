"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Robert L.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "They responded promptly and had a technician at my door in no time. Within a few hours, my AC was back up and running smoothly. I'm incredibly grateful for their quick response and expert repair work.",
  },
  {
    name: "Jake M.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Their commitment to customer satisfaction is unmatched. Whether it's a routine maintenance visit or a complex repair job, I know I can count on them to deliver exceptional service every time.",
  },
  {
    name: "Alex P.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "From the initial consultation to the final installation, their team demonstrated professionalism, expertise, and a commitment to excellence. Our new HVAC system is performing flawlessly.",
  },
  {
    name: "Sarah W.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Their technicians quickly diagnosed the issue and recommended the best solution. Thanks to their expertise, our home is now comfortable year-round.",
  },
  {
    name: "Emily R.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    text: "I appreciate their transparent pricing and honest advice. The installation was smooth, and the follow-up support has been excellent.",
  },
  {
    name: "Michael B.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "The team was friendly, knowledgeable, and efficient. I highly recommend their services to anyone in need of HVAC solutions.",
  },
  {
    name: "Linda K.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Excellent service from start to finish. The technicians explained everything clearly and left my home spotless.",
  },
  {
    name: "Chris T.",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Quick response and very professional. I will definitely use their services again in the future!",
  },
];

const stars = (
  <div className="flex justify-center mt-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-6 h-6 text-yellow-400 inline-block"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
  </div>
);

const CARDS_PER_VIEW = 3;
const CARD_WIDTH = 420 + 32; // px, card width + margin (mx-4)

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;
  const maxIndex = Math.max(0, total - CARDS_PER_VIEW);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (idx: number) => {
    if (idx < 0) setCurrent(0);
    else if (idx > maxIndex) setCurrent(0); // loop to start
    else setCurrent(idx);
  };

  // Infinite auto-slide with 1s delay
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setTimeout(() => {
      goTo(current + 1 > maxIndex ? 0 : current + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [current, isPaused, maxIndex]);

  return (
    <section className="bg-[#f6f8fb] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#22314f] mb-2">
            Testimonials
          </h2>
        </div>
        <div className="relative">
          {/* Carousel */}
          <div
            className="overflow-x-hidden"
            style={{
              width: `${CARDS_PER_VIEW * 420 + CARDS_PER_VIEW * 32}px`,
              margin: "0 auto",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{ x: -current * CARD_WIDTH }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ minWidth: `${testimonials.length * CARD_WIDTH}px` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl shadow-md mx-4 px-8 py-10 text-center flex flex-col items-center"
                  style={{ width: "420px", flex: "0 0 auto" }}
                >
                  <Quote className="w-8 h-8 text-[#7b9cff] mb-4" />
                  <div className="flex justify-center mb-4">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={70}
                      height={70}
                      className="rounded-full border-4 border-white shadow-md"
                    />
                  </div>
                  <div className="font-bold text-lg text-[#22314f] mb-1">
                    {t.name}
                  </div>
                  <div className="text-gray-400 mb-4">{t.role}</div>
                  <div className="text-[#22314f] text-base mb-4">
                    "{t.text}"
                  </div>
                  {stars}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  current === idx ? "bg-[#7b9cff]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
