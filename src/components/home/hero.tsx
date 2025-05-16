"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const slides = [
  {
    mainImg: "/images/slider/p3.webp",
    badge: "/images/slider/7.webp",
    title: "Keeping You Cool All Year Round",
    subtitle: "Air Conditioning Specialist",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    btn: { text: "Discover Products", href: "#section-products" },
  },
  {
    mainImg: "/images/slider/p4.webp",
    badge: "/images/slider/7.webp",
    title: "Best Selling Air Conditioning",
    subtitle: "Air Conditioning Specialist",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    btn: { text: "Discover Products", href: "#section-products" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const goTo = (idx: number) => setCurrent((idx + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const slide = slides[current];

  return (
    <>
      <section className="relative w-full min-h-[600px] flex items-center justify-center bg-[#202C40] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ opacity: 0.7 }}
          >
            <source src="/videos/hero/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-[#202C40] opacity-60 z-10" />

        {/* Content with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 800 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -800 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[600px]"
          >
            {/* Left: Main Image */}
            <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
              <Image
                src={slide.mainImg}
                alt="Air Conditioner"
                width={500}
                height={350}
                className="object-contain w-full max-w-[420px] md:max-w-[500px]"
                priority
              />
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center items-start md:pl-12">
              <h6 className="text-white text-base font-semibold mb-2 tracking-wide">
                {slide.subtitle}
              </h6>
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <div className="flex flex-row items-center w-full mb-4">
                <div className="flex-1">
                  <p className="text-white text-lg mb-0">{slide.desc}</p>
                </div>
                <div className="ml-4 hidden md:block">
                  <Image
                    src={slide.badge}
                    alt="Best Seller Badge"
                    width={90}
                    height={90}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <a
                href={slide.btn.href}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors mt-2"
              >
                {slide.btn.text}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Badge for mobile */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 md:hidden z-30">
          <Image
            src={slide.badge}
            alt="Best Seller Badge"
            width={70}
            height={70}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl transition-colors"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl transition-colors"
          aria-label="Next Slide"
        >
          &#8250;
        </button>

        {/* Slide Indicator */}
        <div className="absolute bottom-8 right-8 text-white text-lg z-30 font-mono">
          {current + 1} / {total}
        </div>
      </section>
    </>
  );
}
