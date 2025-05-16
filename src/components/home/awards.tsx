"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  { src: "/images/awards/1.webp", delay: 0 },
  { src: "/images/awards/2.webp", delay: 0.2 },
  { src: "/images/awards/3.webp", delay: 0.4 },
  { src: "/images/awards/4.webp", delay: 0.6 },
  { src: "/images/awards/5.webp", delay: 0.8 },
  { src: "/images/awards/6.webp", delay: 1.0 },
];

export default function Awards() {
  return (
    <section className="bg-[#f7f8fa] py-28">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-0">
          {awards.map((award, idx) => (
            <motion.div
              key={award.src}
              className="w-1/2 sm:w-1/3 lg:w-1/6 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: award.delay,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              <div className="p-2">
                <Image
                  src={award.src}
                  alt={`Award ${idx + 1}`}
                  width={160}
                  height={160}
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
