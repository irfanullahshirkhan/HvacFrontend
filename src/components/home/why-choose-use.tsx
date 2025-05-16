"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  CalendarCheck,
  BadgeDollarSign,
  PackageCheck,
  AlarmClock,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    title: "Expert Technicians",
    icon: <Wrench className="w-10 h-10 text-white" />,
    description:
      "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
    bg: "bg-[#29487d]",
  },
  {
    title: "Flexible Scheduling",
    icon: <CalendarCheck className="w-10 h-10 text-white" />,
    description:
      "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
    bg: "bg-[#29487d]",
  },
  {
    title: "Transparent Pricing",
    icon: <BadgeDollarSign className="w-10 h-10 text-white" />,
    description:
      "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
    bg: "bg-[#29487d]",
  },
  {
    title: "Quality Parts",
    icon: <PackageCheck className="w-10 h-10 text-white" />,
    description:
      "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
    bg: "bg-[#29487d]",
  },
  {
    title: "Emergency Services",
    icon: <AlarmClock className="w-10 h-10 text-white" />,
    description:
      "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
    bg: "bg-[#29487d]",
  },
  {
    title: "Satisfaction Guarantee",
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    description:
      "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
    bg: "bg-[#29487d]",
  },
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="relative bg-[#d7dde9] py-36">
      {/* Scroll to top */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <span className="text-gray-700 text-xs tracking-widest rotate-[-90deg] mb-4">
          Scroll to top
        </span>
        <div className="w-0.5 h-16 bg-blue-400" />
        <div className="w-px h-24 bg-gray-300 mt-2" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="md:w-1/2">
            <span className="inline-block bg-white text-gray-800 font-semibold px-5 py-2 rounded-full mb-4 shadow text-base">
              Top 6 Reasons
            </span>
            <h2 className="text-5xl font-bold text-[#1a2746] mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-500 text-lg md:ml-10">
              Qui culpa qui consequat officia cillum quis irure aliquip ut
              dolore sit eu culpa ut irure nisi occaecat dolore adipisicing do
              pariatur.
            </p>
          </div>
        </div>
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {reasons.map((reason, idx) => (
            <div
              className="keen-slider__slide flex justify-center"
              key={reason.title}
            >
              <Card className="flex flex-col items-center text-center shadow-none bg-transparent border-0">
                <CardContent className="flex flex-col items-center p-0">
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-xl mb-4 ${reason.bg}`}
                  >
                    {reason.icon}
                  </div>
                  <h4 className="text-[#1a2746] text-xl font-bold mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-gray-500 text-base">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* Dots for carousel */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from(
            { length: instanceRef.current?.track.details.slides.length ?? 0 },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-[#29487d]" : "bg-gray-300"
                } inline-block transition-colors`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
