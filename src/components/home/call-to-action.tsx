import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#eaecee] py-8 px-2 md:px-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Van Image */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto md:max-w-xs">
          <Image
            src="/images/img/pic1.png"
            alt="Service Van"
            width={320}
            height={160}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
        {/* Center: Logo, Phone, Tagline */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <Image
            src="/images/img/pic2.jpg"
            alt="HVAC Logo"
            width={180}
            height={60}
            className="object-contain mb-2"
          />
          <div className="text-[#22314f] font-bold text-base md:text-lg mt-1">
            HERE FOR YOU AROUND THE CLOCK!
          </div>
        </div>
        {/* Right: Book Now & Socials */}
        <div className="flex flex-col items-center gap-6 md:items-end md:justify-between h-full min-w-[140px]">
          <a
            href="/appointment"
            className="bg-[#22314f] hover:bg-[#22314f] text-white font-bold rounded-xl px-8 py-3 text-base md:text-lg shadow transition mb-2"
          >
            BOOK NOW
          </a>
          <div className="flex gap-4 text-2xl text-[#22314f]">
            <a href="#" aria-label="Facebook" className="hover:text-[#f5003c]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="X" className="hover:text-[#f5003c]">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#f5003c]">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-[#f5003c]">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#f5003c]">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
