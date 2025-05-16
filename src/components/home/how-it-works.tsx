"use client";

export default function HowItWorks() {
  return (
    <section
      className="relative w-full min-h-[400px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background/4.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      {/* Scroll to top */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <span className="text-white text-xs tracking-widest rotate-[-90deg] mb-4">
          Scroll to top
        </span>
        <div className="w-0.5 h-16 bg-blue-400" />
      </div>
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="text-blue-200 text-lg font-semibold mb-2">
            Services Process
          </div>
          <h2 className="text-white text-4xl font-bold">How It Works</h2>
        </div>
        {/* Steps */}
        <div className="flex items-center justify-center gap-4 w-full max-w-5xl">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-blue-400 rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
            <div className="text-white text-lg font-medium mb-2">Step 1</div>
            <div className="text-white text-2xl font-bold">Consultation</div>
          </div>
          {/* Arrow */}
          <Arrow />
          {/* Step 2 */}
          <div className="flex flex-col items-center bg-blue-400 rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
            <div className="text-white text-lg font-medium mb-2">Step 2</div>
            <div className="text-white text-2xl font-bold">Agreement</div>
          </div>
          {/* Arrow */}
          <Arrow />
          {/* Step 3 */}
          <div className="flex flex-col items-center bg-blue-400 rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
            <div className="text-white text-lg font-medium mb-2">Step 3</div>
            <div className="text-white text-2xl font-bold">Execution</div>
          </div>
          {/* Arrow */}
          <Arrow />
          {/* Step 4 */}
          <div className="flex flex-col items-center bg-blue-400 rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
            <div className="text-white text-lg font-medium mb-2">Step 4</div>
            <div className="text-white text-2xl font-bold">Quality Check</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Arrow component
function Arrow() {
  return (
    <svg
      className="w-8 h-8 text-blue-200"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-4-4 4 4-4 4"
      />
    </svg>
  );
}
