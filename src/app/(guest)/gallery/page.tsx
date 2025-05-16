"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { label: "All", key: "all" },
  { label: "Geothermal", key: "geothermal" },
  { label: "Heating", key: "heating" },
  { label: "Air Conditioning", key: "ac" },
  { label: "Indoor Air Quality", key: "iaq" },
  { label: "Maintenance", key: "maintenance" },
];

const images = [
  {
    src: "/images/img/pic11.jpg",
    category: "geothermal",
    title: "Geothermal Plant",
    desc: "Industrial geothermal HVAC system.",
  },
  {
    src: "/images/img/pic12.jpg",
    category: "geothermal",
    title: "Outdoor Unit",
    desc: "Efficient outdoor geothermal unit.",
  },
  {
    src: "/images/img/pic13.jpg",
    category: "geothermal",
    title: "Floor Heating",
    desc: "Modern geothermal floor heating installation.",
  },
  {
    src: "/images/img/pic4.jpg",
    category: "geothermal",
    title: "Geothermal Technician",
    desc: "Technician working on geothermal gauges.",
  },
  {
    src: "/images/img/pic5.jpg",
    category: "ac",
    title: "Air Conditioning Unit",
    desc: "Modern air conditioning system.",
  },
  {
    src: "/images/img/pic6.jpg",
    category: "heating",
    title: "Heating System",
    desc: "Efficient home heating system.",
  },
  {
    src: "/images/img/pic7.jpg",
    category: "iaq",
    title: "Indoor Air Quality",
    desc: "Air quality monitoring equipment.",
  },
  {
    src: "/images/img/pic8.jpg",
    category: "maintenance",
    title: "Maintenance Work",
    desc: "Technician performing routine maintenance.",
  },
];

function getImagesForTab(tabKey: string) {
  if (tabKey === "all") return images;
  return images.filter((img) => img.category === tabKey);
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [modal, setModal] = useState<null | (typeof images)[0]>(null);
  const tabImages = getImagesForTab(activeTab);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative -mt-[70px] h-[340px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#29508a]/60 z-10" />
        <div className="relative max-w-6xl z-20 w-full mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-[#29508a] text-white px-4 py-1 rounded-full text-xs mb-3">
              Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Our Gallery
            </h1>
            <ul className="flex gap-2 text-white/80 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-white">Gallery</li>
            </ul>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-lg font-semibold text-white">
              Explore Our Work & Projects
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 z-30 bg-[#29508a] w-20 h-20 flex items-center justify-center rounded-full border-4 border-white shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </section>
      {/* Tabs */}
      <div className="max-w-5xl mx-auto mt-20 mb-12">
        <div className="bg-[#f6f8fb] rounded-xl flex flex-wrap justify-center gap-2 px-6 py-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 md:px-6 py-2 rounded-lg font-semibold text-base transition-colors duration-200 focus:outline-none 
                ${
                  activeTab === tab.key
                    ? "text-[#29508a] underline underline-offset-4"
                    : "text-[#22314f] hover:text-[#29508a]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Image Grid with Motion */}
      <div className="max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {tabImages.map((img, idx) => (
              <div
                key={img.src}
                className="cursor-pointer group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
                onClick={() => setModal(img)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={400}
                  height={260}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Modal Dialog */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-[#29508a] text-2xl font-bold"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={modal.src}
              alt={modal.title}
              width={500}
              height={320}
              className="rounded-xl object-cover w-full mb-4"
            />
            <div className="text-xl font-bold text-[#22314f] mb-1">
              {modal.title}
            </div>
            <div className="text-gray-500 mb-2">{modal.desc}</div>
            <div className="text-sm text-gray-400">
              Category:{" "}
              {modal.category.replace(/\b\w/g, (l) => l.toUpperCase())}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
