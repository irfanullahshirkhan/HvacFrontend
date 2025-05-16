"use client";

import Link from "next/link";
import { MapPin, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import LocationDialog from "../dialog/location-dialog";
import { Button } from "../ui/button";
const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
  },

  { title: "Projects", url: "/projects" },
  { title: "Gallery", url: "/gallery" },
  { title: "About Us", url: "/about" },
  { title: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="container max-w-7xl w-full flex justify-between  items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={scrolled ? "/images/logo-black.webp" : "/images/logo.webp"}
            alt="Logo"
            width={40}
            height={40}
            className="h-8 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item, idx) => (
            <li
              key={item.title}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.url}
                className={`font-semibold transition-colors duration-300 ${
                  scrolled
                    ? "text-[#29508a] hover:text-[#1d3a5a]"
                    : "text-white hover:text-[#bcd2f7]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Schedule Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="cursor-pointer flex items-center gap-2 group transition-all duration-300 hover:scale-105"
            onClick={() => setIsDialogOpen(true)}
          >
            <MapPin className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            Find my location
          </Button>
          <div className="hidden md:block">
            <Link
              href="/appointment"
              className={`font-bold px-6 py-2 rounded-lg shadow transition ${
                scrolled
                  ? "bg-[#29508a] text-white hover:bg-[#1d3a5a]"
                  : "bg-white text-[#29508a] hover:bg-[#29508a] hover:text-white"
              }`}
            >
              Schedule Now
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-[#29508a]" : "text-white"
          }`}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 flex">
          <div className="bg-white w-64 h-full p-6 flex flex-col gap-4">
            <button
              className="self-end mb-4 text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            {menuItems.map((item, idx) => (
              <div key={item.title}>
                <Link
                  href={item.url}
                  className="block py-2 text-lg font-semibold text-[#29508a]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-6 bg-[#29508a] text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-[#1d3a5a] transition text-center"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Now
            </Link>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
      <LocationDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onFind={() => {
          setIsDialogOpen(false);
        }}
      />
    </header>
  );
}
