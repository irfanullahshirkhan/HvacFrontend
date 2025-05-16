"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const priceCategories = [
  {
    title: "Maintenance",
    items: [
      { name: "Window Type", price: "$30" },
      { name: "Window Type Inverter", price: "$40" },
      { name: "Split Type", price: "$60" },
      { name: "Floor Mounted", price: "$100" },
      { name: "Floor Mounted Inverter", price: "$125" },
    ],
  },
  {
    title: "Installation",
    items: [
      { name: "Window Type", price: "$90" },
      { name: "Window Type Inverter", price: "$120" },
      { name: "Split Type", price: "$180" },
      { name: "Floor Mounted", price: "$300" },
      { name: "Floor Mounted Inverter", price: "$375" },
    ],
  },
  {
    title: "Repair",
    items: [
      { name: "Charging Freon", price: "$75" },
      { name: "Leak test and repair", price: "$30", startFrom: true },
      { name: "Leak test and repair", price: "$32", startFrom: true },
      { name: "Vacuum / flushing", price: "$35", startFrom: true },
      { name: "Valve installation", price: "$40", startFrom: true },
      { name: "Freon replacement", price: "$100", startFrom: true },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Check up only", price: "$15" },
      { name: "Power Supply", price: "$50" },
      { name: "Control Wiring", price: "$35" },
      { name: "Drain", price: "$100" },
      { name: "Breaker", price: "$75" },
      { name: "Cancellation", price: "$25" },
    ],
  },
];

export default function PriceList() {
  return (
    <div className="min-h-screen -mt-[72px] bg-[#f7f8fa]">
      {/* Hero Section */}
      <section className="relative h-[340px] flex items-center">
        <Image
          src="/images/background/14.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#29508a]/80" />
        <div className="container relative z-10 h-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="mb-4 max-w-xl">
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full font-semibold text-sm mb-2">
              Our Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Price List
            </h1>
            <div className="flex items-center text-white text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="font-semibold">Price List</span>
            </div>
          </div>
          <div className="hidden lg:block  right-0 top-1/2 -translate-y-1/2 text-white text-xl font-semibold mr-4">
            Air Conditioning and Heating Specialists
          </div>
          <div className="absolute left-1/2 bottom-[-40px] -translate-x-1/2 z-20">
            <Link href="/contact">
              <div className="w-16 h-16 bg-[#29508a] rounded-full flex items-center justify-center border-4 border-white shadow-lg hover:bg-[#1d3a5a] transition">
                <Image
                  src="/images/svg/phone-calling-svgrepo-com.svg"
                  alt="Call Us"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="pt-24  max-w-7xl mx-auto pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {priceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-lg">
                <div className="bg-[#29508a] text-white font-bold text-lg px-6 py-3 rounded-t-[20px]">
                  {category.title}
                </div>
                <div className="p-6">
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`flex items-center justify-between py-2 ${
                          itemIndex !== category.items.length - 1
                            ? "border-b border-dotted border-gray-300"
                            : ""
                        }`}
                      >
                        <span className="text-gray-700">
                          {item.name}
                          {item.startFrom && (
                            <span className="text-[#29508a] text-xs font-semibold ml-2">
                              start from
                            </span>
                          )}
                        </span>
                        <span className="text-[#29508a] font-bold">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
