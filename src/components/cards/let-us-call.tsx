"use client";
import { useState } from "react";
const allowedZips = ["55", "66", "77"];

export default function LetUsCall() {
  const [heroTab, setHeroTab] = useState("residential");
  const [heroForm, setHeroForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    sms: false,
  });
  const [showDialog, setShowDialog] = useState(false);
  const handleHeroInput = (e: any) => {
    const { name, value, type, checked } = e.target;
    setHeroForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleHeroSubmit = (e: any) => {
    e.preventDefault();
    if (!allowedZips.includes(heroForm.zip.trim())) {
      setShowDialog(true);
      return;
    }
    alert("Service available! Our team will contact you soon.");
  };

  return (
    <section className=" flex justify-center mt-0">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full px-6 py-8 md:px-12 md:py-10 -mt-16 z-10 relative flex flex-col">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold text-base border-b-2 transition-colors duration-200 focus:outline-none ${
              heroTab === "residential"
                ? "border-[#29508a] text-[#29508a] bg-[#f6f8fb]"
                : "border-transparent text-gray-500 bg-transparent"
            }`}
            onClick={() => setHeroTab("residential")}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75L12 4l9 5.75M4.5 10.75v7.25A2 2 0 006.5 20h11a2 2 0 002-2v-7.25"
              />
            </svg>
            Residential
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold text-base border-b-2 transition-colors duration-200 focus:outline-none ${
              heroTab === "commercial"
                ? "border-[#29508a] text-[#29508a] bg-[#f6f8fb]"
                : "border-transparent text-gray-500 bg-transparent"
            }`}
            onClick={() => setHeroTab("commercial")}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4M4 7h16"
              />
            </svg>
            Commercial
          </button>
        </div>
        <div className="font-bold text-xl text-[#22314f] mb-4">
          Let Us Call You
        </div>
        <form
          onSubmit={handleHeroSubmit}
          className="flex flex-col md:flex-row gap-4 w-full mb-2"
        >
          <input
            name="name"
            required
            placeholder="First & Last Name"
            value={heroForm.name}
            onChange={handleHeroInput}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none min-w-[180px]"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={heroForm.email}
            onChange={handleHeroInput}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none min-w-[180px]"
          />
          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={heroForm.phone}
            onChange={handleHeroInput}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none min-w-[180px]"
          />
          <input
            name="zip"
            required
            placeholder="ZIP/Postal Code"
            value={heroForm.zip}
            onChange={handleHeroInput}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none min-w-[140px]"
          />
          <button
            type="submit"
            className="bg-[#29508a] hover:bg-[#1d3a5a] text-white font-semibold rounded-lg px-6 py-2 transition-colors min-w-[140px]"
          >
            Request A Call
          </button>
        </form>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            name="sms"
            checked={heroForm.sms}
            onChange={handleHeroInput}
            className="accent-[#29508a]"
          />
          <span className="text-sm text-gray-600">
            Yes! You can text me service reminders and other messages.
          </span>
        </div>
        <div className="text-xs text-gray-400 mb-1">
          By checking this box, you agree to opt in to receive automated SMS
          and/or MMS messages from Aire Serv, a Neighborly company, and its
          franchisees to the provided mobile number(s). Messages & data rates
          may apply. Message frequency varies. View Terms and Privacy Policy.
          Reply STOP to opt out of future messages. Reply HELP for help.
        </div>
        <div className="text-xs text-gray-400">
          By entering your email address, you agree to receive emails about
          services, updates or promotions, and you agree to the Terms and
          Privacy Policy. You may unsubscribe at any time.
        </div>
      </div>
      {/* Dialog for invalid zip */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn text-center">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-[#29508a] text-2xl font-bold"
              onClick={() => setShowDialog(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-4xl mb-4">😔</div>
            <div className="text-xl font-bold text-[#22314f] mb-2">Sorry!</div>
            <div className="text-gray-500 mb-4">
              We do not provide services in this area yet.
              <br />
              Please try a different ZIP code.
            </div>
            <button
              className="mt-2 px-8 py-3 bg-[#29508a] text-white font-semibold rounded-lg shadow hover:bg-[#1d3a5a] transition"
              onClick={() => setShowDialog(false)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
