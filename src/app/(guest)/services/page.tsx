"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PriceList from "@/components/home/price-list";
import PricePlan from "@/components/home/price-plan";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import LetUsCall from "@/components/cards/let-us-call";
const tabs = [
  { label: "All", key: "all" },
  { label: "Service & Repairs", key: "repairs" },
  { label: "Indoor Air Quality", key: "iaq" },
  { label: "Geothermal", key: "geothermal" },
  { label: "Installation & Replace", key: "install" },
  { label: "HVAC", key: "hvac" },
  { label: "Heating", key: "heating" },
  { label: "Air Conditioning", key: "ac" },
];

const services = [
  {
    key: "repairs",
    title: "Service & Repairs",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic4.jpg",
    slug: "service-repairs",
  },
  {
    key: "iaq",
    title: "Indoor Air Quality",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic6.jpg",
    slug: "indoor-air-quality",
  },
  {
    key: "geothermal",
    title: "Geothermal",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic7.jpg",
    slug: "geothermal",
  },
  {
    key: "install",
    title: "Installation & Replace",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic8.jpg",
    slug: "installation-replace",
  },
  {
    key: "hvac",
    title: "HVAC",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic16.jpg",
    slug: "hvac",
  },
  {
    key: "heating",
    title: "Heating",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic23.jpg",
    slug: "heating",
  },
  {
    key: "ac",
    title: "Air Conditioning",
    desc: "Air Conditioning Heating Installation & Replace HVAC Geothermal Indoor ...",
    img: "/images/img/pic22.jpg",
    slug: "air-conditioning",
  },
];

function getServicesForTab(tabKey: string) {
  if (tabKey === "all") return services;
  return services.filter((s) => s.key === tabKey);
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const tabServices = getServicesForTab(activeTab);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-[70px] h-[340px] flex items-center justify-center">
        <Image
          src="/images/background/6.webp"
          alt="Services Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#29508a]/60 z-10" />
        <div className="relative max-w-6xl z-20 w-full mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-[#29508a] text-white px-4 py-1 rounded-full text-xs mb-3">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              What We Offer
            </h1>
            <ul className="flex gap-2 text-white/80 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Services</li>
            </ul>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-lg font-semibold text-white">
              Air Conditioning and Heating Specialists
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

      <LetUsCall />

      {/* Services Section with Tabs */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-16">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-lg font-semibold text-base transition-colors duration-200 focus:outline-none shadow-sm border 
                ${
                  activeTab === tab.key
                    ? "bg-[#29508a] text-white"
                    : "bg-white text-[#29508a] hover:bg-[#eaf1fa]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tabServices.map((service, idx) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="block"
              >
                <Card className="flex flex-col h-full shadow-lg border-t-4 border-[#29508a] hover:shadow-xl transition-shadow duration-200">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <CardContent className="flex-1 flex flex-col justify-between py-6">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2 text-[#22314f]">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="mb-6 text-base text-gray-500">
                        {service.desc}
                      </CardDescription>
                    </div>
                    <span className="inline-block px-6 py-2 rounded-lg font-semibold mt-auto transition-colors duration-200 bg-[#29508a] text-white hover:bg-[#4bb6e6]">
                      Read more
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <PriceList />
      <PricePlan />
      <section className="w-full bg-[#29508a] py-6 flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl px-4">
          <span className="text-white font-extrabold text-2xl md:text-3xl tracking-wide text-center md:text-left">
            BOOK ONLINE WITH US 24/7!
          </span>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/appointment">
              <Button
                variant="outline"
                size="lg"
                className="bg-white border border-black text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-gray-100"
              >
                <Calendar className="w-6 h-6" />
                BOOK NOW
              </Button>
            </Link>
            <span className="text-white font-bold text-lg">or</span>
            <Link href="tel:1234567890">
              <Button
                variant="outline"
                size="lg"
                className="bg-white border border-black text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-gray-100"
              >
                <Phone className="w-6 h-6" />
                CALL US
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
