"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const allowedZips = ["55", "66", "77"];
const serviceDetails = {
  name: "AC Repair & Maintenance",
  desc: "Professional air conditioning repair and maintenance service.",
  price: "$120.00",
  img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
};

const paymentMethods = [
  { key: "card", label: "Credit/Debit Card" },
  { key: "paypal", label: "PayPal" },
  { key: "cash", label: "Cash on Service" },
];

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    address: "",
    apt: "",
    email: "",
    phone: "",
    sms: false,
  });
  const [showDialog, setShowDialog] = useState(false);
  const [payment, setPayment] = useState(paymentMethods[0].key);

  const handleInput = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!allowedZips.includes(form.zip.trim())) {
      setShowDialog(true);
      return;
    }
    setStep(2);
  };

  return (
    <div className="bg-[#f6f8fb] min-h-screen pb-10">
      {/* Hero Section */}
      <section className="relative -mt-[70px] h-[340px] flex items-center justify-center">
        <Image
          src="/images/img/pic10.jpg"
          alt="Appointment Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#29508a]/60 z-10" />
        <div className="relative max-w-6xl z-20 w-full mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-[#29508a] text-white px-4 py-1 rounded-full text-xs mb-3">
              Book Now
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Schedule Service
            </h1>
            <ul className="flex gap-2 text-white/80 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-white">Appointment</li>
            </ul>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-lg font-semibold text-white">
              Book your HVAC service in minutes
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
      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#22314f] mb-8">
          Schedule Service
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Stepper */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center w-full max-w-xs">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  step === 1 ? "bg-[#29508a]" : "bg-[#7b9cff]"
                }`}
              >
                1
              </div>
              <div
                className={`flex-1 h-1 ${
                  step === 2 ? "bg-[#7b9cff]" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  step === 2 ? "bg-[#29508a]" : "bg-gray-300"
                }`}
              >
                2
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Left: Form Fields */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  <div className="text-center mb-2">
                    <h2 className="text-2xl font-bold text-[#29508a] mb-2">
                      How Can We Reach You?
                    </h2>
                    <p className="text-xs text-gray-400">
                      * indicates a required field
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        First Name*
                      </label>
                      <input
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Last Name*
                      </label>
                      <input
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      ZIP/Postal Code*
                    </label>
                    <input
                      name="zip"
                      required
                      value={form.zip}
                      onChange={handleInput}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Service Address*
                      </label>
                      <input
                        name="address"
                        required
                        value={form.address}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Optional: Apartment, Suite, etc.
                      </label>
                      <input
                        name="apt"
                        value={form.apt}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Email*
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">
                        Phone Number*
                      </label>
                      <input
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      name="sms"
                      checked={form.sms}
                      onChange={handleInput}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      Yes! You can text me service reminders and other messages.
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    By checking this box, you agree to receive automated SMS
                    and/or MMS messages. Message & data rates may apply. Message
                    frequency varies. View Terms and Privacy Policy.
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    By entering your email address, you agree to receive emails
                    about services, updates or promotions, and you agree to the
                    Terms and Privacy Policy. You may unsubscribe at any time.
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#29508a] text-white font-semibold rounded-lg shadow hover:bg-[#1d3a5a] transition"
                    >
                      Submit & Continue
                    </button>
                  </div>
                </div>
                {/* Right: Why Us Card */}
                <div className="flex flex-col items-center md:items-end justify-center">
                  <div className="bg-[#f6f8fb] rounded-2xl p-6 w-full max-w-xs flex flex-col items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80"
                      alt="Why Us"
                      width={220}
                      height={120}
                      className="rounded-xl object-cover mb-4"
                    />
                    <div className="font-bold text-[#22314f] mb-2">
                      Why choose us?
                    </div>
                    <ul className="text-sm text-[#29508a] space-y-2">
                      <li>✔ Guaranteed Upfront Pricing</li>
                      <li>✔ No Hidden Fees</li>
                      <li>✔ Expert Service Professionals</li>
                      <li>✔ Transparent Communication</li>
                      <li>✔ 24/7 Customer Service</li>
                    </ul>
                  </div>
                </div>
              </motion.form>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Service Details Card */}
                <div className="md:col-span-1 bg-[#f6f8fb] rounded-2xl p-6 flex flex-col items-center">
                  <Image
                    src={serviceDetails.img}
                    alt={serviceDetails.name}
                    width={220}
                    height={120}
                    className="rounded-xl object-cover mb-4"
                  />
                  <div className="font-bold text-[#22314f] mb-1">
                    {serviceDetails.name}
                  </div>
                  <div className="text-gray-500 text-sm mb-2">
                    {serviceDetails.desc}
                  </div>
                  <div className="text-lg font-bold text-[#29508a]">
                    {serviceDetails.price}
                  </div>
                </div>
                {/* Payment Method Form */}
                <form
                  className="md:col-span-2 flex flex-col justify-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h2 className="text-2xl font-bold text-[#29508a] mb-6">
                    Select Payment Method
                  </h2>
                  <div className="flex flex-col gap-4 mb-6">
                    {paymentMethods.map((pm) => (
                      <label
                        key={pm.key}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={pm.key}
                          checked={payment === pm.key}
                          onChange={() => setPayment(pm.key)}
                          className="accent-[#29508a] w-5 h-5"
                        />
                        <span className="text-base text-[#22314f]">
                          {pm.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-[#29508a] text-white font-semibold rounded-lg shadow hover:bg-[#1d3a5a] transition"
                  >
                    Apply Payment Method
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
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
    </div>
  );
}
