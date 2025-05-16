"use client";
import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HvacSpecialist() {
  return (
    <section className="p-0 mb-12 -mt-28">
      <div className="container mx-auto ">
        <div className="w-full">
          <div className="p-20 relative rounded-xl overflow-hidden min-h-[340px] flex items-center justify-center">
            {/* Background image */}
            <Image
              src="/images/background/10.webp"
              alt=""
              fill
              className="object-cover z-0"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
            {/* Content */}
            <div className="relative z-20 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-8 px-6 py-12 text-blue-950">
                {/* Left: Text and CTA */}
                <motion.div
                  className="lg:w-2/3"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center bg-white rounded-full px-4 py-2 w-fit gap-2 text-lg font-semibold mb-3">
                    <User2 className="w-6 h-6" />
                    HVAC Specialist
                  </div>
                  <h3 className=" text-3xl md:text-4xl font-bold mb-6">
                    We are CoolAir, specialize in providing top-notch heating,
                    ventilation, and air conditioning services tailored to your
                    unique needs.
                  </h3>
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
                  >
                    <a href="/contact">Schedule Now</a>
                  </Button>
                </motion.div>
                {/* Right: Team member */}
                <motion.div
                  className="lg:w-1/3 flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/team/1.webp"
                    alt="Jeffery Mussman"
                    width={160}
                    height={160}
                    className="rounded-xl shadow-lg mb-4 object-cover"
                  />
                  <h5 className=" text-xl font-semibold mb-0">
                    Jeffery Mussman
                  </h5>
                  <p className=" text-sm mb-2">Founder &amp; CEO</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
