import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-[70px] h-[340px] flex items-center justify-center">
        <Image
          src="/images/background/8.webp"
          alt="Contact Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute  inset-0 bg-[#29508a]/60 z-10" />
        <div className="relative max-w-6xl  z-20 w-full  mx-auto  flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-[#29508a] text-white px-4 py-1 rounded-full text-xs mb-3">
              Our Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Get In Touch
            </h1>
            <ul className="flex gap-2 text-white/80 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-white">Contact Us</li>
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

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <p className="mb-6 text-gray-600">
              Whether you have a question, a suggestion, or just want to say
              hello, this is the place to do it. Please fill out the form below
              with your details and message, and we'll get back to you as soon
              as possible.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Your Phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={8}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#29508a] focus:outline-none resize-none"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-4 mt-2">
                {/* Placeholder for reCAPTCHA */}
                <div className="bg-gray-100 rounded-lg h-14 flex items-center justify-center text-gray-400 text-sm">
                  reCAPTCHA here
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#29508a] text-white font-semibold rounded-lg shadow hover:bg-[#1d3a5a] transition"
                >
                  Send Message
                </button>
                {/* Success/Error messages (hidden by default) */}
                <div
                  className="hidden text-green-600 text-sm"
                  id="success_message"
                >
                  Your message has been sent successfully. Refresh this page if
                  you want to send more messages.
                </div>
                <div className="hidden text-red-600 text-sm" id="error_message">
                  Sorry there was an error sending your form.
                </div>
              </div>
            </form>
          </div>

          {/* Office Info Sidebar */}
          <div className="bg-[#f7fafd] rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <div>
              <h4 className="text-xl font-bold text-[#29508a] mb-4">
                Our Office
              </h4>
              <div className="relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/misc/5.webp"
                  alt="Office"
                  width={400}
                  height={180}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#29508a]/80 text-white text-xs px-3 py-1 rounded">
                  Mon - Fri 08.00 - 18.00
                </div>
              </div>
              <div className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-[#29508a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 21a2 2 0 01-2.828 0l-4.243-4.343a8 8 0 1111.314 0z"
                  />
                  <circle cx="12" cy="11" r="3" />
                </svg>
                Office Location
              </div>
              <div className="text-gray-600 mb-4 ml-7">
                100 S Main St, New York, NY
              </div>
              <div className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-[#29508a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a6 6 0 0112 0z"
                  />
                </svg>
                Send a Message
              </div>
              <a
                href="mailto:info@coolair.com"
                className="ml-7 text-[#29508a] hover:underline"
              >
                [email&#160;protected]
              </a>
              <div className="font-semibold text-gray-700 flex items-center gap-2 mt-4 mb-1">
                <svg
                  className="w-5 h-5 text-[#29508a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l.723 1.447A2 2 0 0011.28 7h1.44a2 2 0 001.789-1.447l.723-1.447A2 2 0 0117.72 3H20a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"
                  />
                </svg>
                Call Us Directly
              </div>
              <div className="ml-7 text-[#29508a] font-bold text-lg">
                +929 333 9296
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
