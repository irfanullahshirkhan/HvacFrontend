"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-[#295087] min-h-[400px] flex items-stretch overflow-hidden">
      {/* Left: Text and CTA */}
      <div className="flex-1 flex flex-col justify-center pl-8 pr-4 py-12 z-10">
        <div className="max-w-xl ml-auto">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8 leading-snug">
            Stay cool and comfortable year-round with energy-efficient, smart
            air conditioning designed for ultimate performance, reliability, and
            effortless climate control.
          </h2>
          <div className="flex items-center gap-4 mt-8">
            <CheckCircle className="w-7 h-7 text-blue-300" />
            <span className="text-white text-xl font-medium">
              Quality heating &amp; air conditioning solutions
            </span>
            <a
              href="/contact"
              className="ml-auto bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold px-8 py-3 rounded-lg transition shadow"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="relative w-1/2 min-h-[400px] hidden md:block">
        <Image
          src="/images/misc/11.webp"
          alt="Air conditioning units"
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
          priority
        />
      </div>
    </section>
  );
}
