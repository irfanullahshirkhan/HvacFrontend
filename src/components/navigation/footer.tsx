import Image from "next/image";
import {
  Facebook,
  Twitter,
  MessageSquare,
  Music,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full  bg-[#001d3d] text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-8 gap-12">
          {/* Left Column */}
          <div className="md:w-1/3 flex flex-col items-start">
            <Image
              src="/images/logo.webp"
              alt="CoolAir Logo"
              width={120}
              height={48}
              className="mb-6"
            />
            <p className="mb-6 text-gray-200">
              We specialize in providing top-quality heating, ventilation, and
              air conditioning services tailored to your unique requirements.
              Our skilled technicians are dedicated to delivering reliable
              solutions that ensure your comfort and satisfaction.
            </p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-[#bcd2f7] transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#bcd2f7] transition">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#bcd2f7] transition">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div className="md:w-1/3 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h5 className="font-bold mb-4 text-lg">Company</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="font-bold mb-4 text-lg">Our Services</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Repairs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Emergency
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Replacements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#bcd2f7] transition">
                    Dust Cleaning
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="font-bold text-lg text-[#bcd2f7]">
              24 Hours & Emergencies
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-2">
              <Phone className="text-[#bcd2f7]" />
              <span>+929 333 9296</span>
            </div>
            <div className="font-bold text-white flex items-center gap-2 mt-4">
              <MapPin className="text-[#bcd2f7]" />
              <span>Office Location</span>
            </div>
            <div className="text-gray-200 ml-7">
              100 S Main St, New York, NY
            </div>
            <div className="font-bold text-white flex items-center gap-2 mt-4">
              <Mail className="text-[#bcd2f7]" />
              <span>Send a Message</span>
            </div>
            <a
              href="#"
              className="ml-7 text-gray-200 hover:text-[#bcd2f7] transition"
            >
              [email&#160;protected]
            </a>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="bg-black/70 mt-12">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm">
          <div>Copyright 2025 - CoolAir by Designesia</div>
          <ul className="flex gap-6 mt-2 md:mt-0">
            <li>
              <a href="#" className="hover:text-[#bcd2f7] transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#bcd2f7] transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
