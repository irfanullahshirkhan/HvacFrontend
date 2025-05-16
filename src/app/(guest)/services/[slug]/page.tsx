"use client";

import Image from "next/image";
import { useState } from "react";
import WhyChooseUs from "@/components/home/why-choose-use";
import Testimonial from "@/components/home/testimonial";
import CallToAction from "@/components/home/call-to-action";
import YoutubeFrame from "@/components/home/youtube-frame";
export default function ServiceDetails() {
  const [activeTab, setActiveTab] = useState("installation");

  return (
    <div className="bg-white -m-[72px] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[400px] flex items-center justify-center">
        <Image
          src="/images/img/pic9.jpg"
          alt="Services Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-400/60 z-10" />
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded mb-2">
              Our Service
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Installation
            </h1>
            <nav className="text-white text-sm flex items-center gap-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-1">&#8250;</span>
              <span className="opacity-80">Installation</span>
            </nav>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-lg font-semibold text-white">
              Air Conditioning and Heating Specialists
            </div>
          </div>
        </div>
        {/* Centered Circle Icon */}
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 z-30 bg-blue-600 w-20 h-20 flex items-center justify-center rounded-full shadow-lg border-4 border-white">
          <Image
            src="/images/svg/phone-calling-svgrepo-com.svg"
            alt="Phone Icon"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="mt-20 md:mt-24 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tab Content */}
          {activeTab === "installation" && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left: Text */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
                  Worry free with{" "}
                  <span className="text-blue-400 font-bold">certified</span>{" "}
                  HVAC service
                </h2>
                <p className="text-gray-500 mb-4">
                  Lorem ipsum in ad eu in in aliqua aliquip sit aute in ullamco
                  enim nostrud veniam commodo laborum est laboris nostrud dolore
                  excepteur commodo incididunt dolor commodo ut veniam mollit
                  pariatur eu dolore laborum laboris laborum in nostrud deserunt
                  sint culpa ex deserunt tempor occaecat mollit sint sit commodo
                  est nulla adipisicing dolore duis eiusmod consequat ut ea
                  laborum enim non sunt anim enim nisi in consectetur culpa anim
                  laborum nulla est sit ut ullamco duis fugiat qui elit laborum
                  ut anim adipisicing sed laboris nostrud elit magna occaecat
                  nostrud dolor dolore ut tempor sed in aliqua nostrud irure
                  consequat ut exercitation
                </p>
                <p className="text-gray-500">
                  Deserunt ex anim esse id nulla eiusmod cillum culpa culpa
                  magna enim enim sit consequat eu eu ullamco proident voluptate
                  voluptate eu dolore in in est mollit dolore mollit deserunt
                  reprehenderit est incididunt nisi aliqua irure ex id deserunt
                  ad in et dolore dolore excepteur veniam tempor commodo dolore
                  in proident pariatur commodo.
                </p>
                <p className="text-gray-500 mb-4">
                  Lorem ipsum in ad eu in in aliqua aliquip sit aute in ullamco
                  enim nostrud veniam commodo laborum est laboris nostrud dolore
                  excepteur commodo incididunt dolor commodo ut veniam mollit
                  pariatur eu dolore laborum laboris laborum in nostrud deserunt
                  sint culpa ex deserunt tempor occaecat mollit sint sit commodo
                  est nulla adipisicing dolore duis eiusmod consequat ut ea
                  laborum enim non sunt anim enim nisi in consectetur culpa anim
                  laborum nulla est sit ut ullamco duis fugiat qui elit laborum
                  ut anim adipisicing sed laboris nostrud elit magna occaecat
                  nostrud dolor dolore ut tempor sed in aliqua nostrud irure
                  consequat ut exercitation
                </p>
                <p className="text-gray-500">
                  Deserunt ex anim esse id nulla eiusmod cillum culpa culpa
                  magna enim enim sit consequat eu eu ullamco proident voluptate
                  voluptate eu dolore in in est mollit dolore mollit deserunt
                  reprehenderit est incididunt nisi aliqua irure ex id deserunt
                  ad in et dolore dolore excepteur veniam tempor commodo dolore
                  in proident pariatur commodo.
                </p>
              </div>
              {/* Right: Images */}
              <div className="flex-1 flex flex-col gap-6">
                <Image
                  src="/images/misc/services-2.webp"
                  alt="Service 1"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-48 md:h-56"
                />
                <Image
                  src="/images/misc/services-3.webp"
                  alt="Service 2"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-48 md:h-56"
                />
              </div>
            </div>
          )}
          {/* You can add content for other tabs here if needed */}
        </div>
      </section>

      <CallToAction />

      <YoutubeFrame />

      <Testimonial />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
}
