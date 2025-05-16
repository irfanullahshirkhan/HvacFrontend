"use client";

const priceData = [
  {
    section: "Maintenance",
    color: "bg-blue-400",
    items: [
      { name: "Window Type", price: "$30" },
      { name: "Window Type Inverter", price: "$40" },
      { name: "Split Type", price: "$60" },
      { name: "Floor Mounted", price: "$100" },
      { name: "Floor Mounted Inverter", price: "$125" },
    ],
  },
  {
    section: "Installation",
    color: "bg-blue-400",
    items: [
      { name: "Window Type", price: "$90" },
      { name: "Window Type Inverter", price: "$120" },
      { name: "Split Type", price: "$180" },
      { name: "Floor Mounted", price: "$300" },
      { name: "Floor Mounted Inverter", price: "$375" },
    ],
  },
  {
    section: "Repair",
    color: "bg-blue-900",
    items: [
      { name: "Charging Freon", price: "$75" },
      {
        name: "leak test and repair",
        price: "$30",
        startFrom: true,
        link: true,
      },
      { name: "Leak test and repair", price: "$32", startFrom: true },
      { name: "Vacuum / flushing", price: "$35", startFrom: true },
      { name: "Valve installation", price: "$40", startFrom: true },
      { name: "Freon replacement", price: "$100", startFrom: true },
    ],
  },
  {
    section: "Other",
    color: "bg-blue-900",
    items: [
      { name: "Check up only", price: "$15" },
      { name: "Power Suppply", price: "$50" },
      { name: "Control Wiring", price: "$35" },
      { name: "Drain", price: "$100" },
      { name: "Breaker", price: "$75" },
      { name: "Cancellation", price: "$25" },
    ],
  },
];

function PriceRow({ name, price, startFrom, link }: any) {
  return (
    <li className="flex items-center w-full text-[1.08rem] font-normal leading-tight">
      <span className="whitespace-nowrap">
        {link ? (
          <a href="#" className="text-blue-700 underline hover:text-blue-900">
            {name}
          </a>
        ) : (
          name
        )}
      </span>
      <span className="flex-1 border-b border-dotted border-gray-400 mx-2" />
      <span className="flex items-center gap-1">
        {startFrom && (
          <span className="text-blue-500 text-sm font-semibold mr-1">
            start from
          </span>
        )}
        <span className="font-medium">{price}</span>
      </span>
    </li>
  );
}

export default function PriceList() {
  return (
    <section className="bg-[#f4f4f2] py-16 min-h-[600px] font-[Montserrat,sans-serif]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
          Price List
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column: Maintenance + Repair */}
          <div>
            {/* Maintenance */}
            <div className="mb-8">
              <div className="rounded-full bg-blue-400 text-white text-lg font-bold px-6 py-2 mb-4 w-full text-left shadow-none">
                Maintenance
              </div>
              <ul className="space-y-0">
                {priceData[0].items.map((item) => (
                  <PriceRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
            {/* Repair */}
            <div>
              <div className="rounded-full bg-blue-900 text-white text-lg font-bold px-6 py-2 mb-4 w-full text-left shadow-none">
                Repair
              </div>
              <ul className="space-y-0">
                {priceData[2].items.map((item) => (
                  <PriceRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
          </div>
          {/* Right column: Installation + Other */}
          <div>
            {/* Installation */}
            <div className="mb-8">
              <div className="rounded-full bg-blue-400 text-white text-lg font-bold px-6 py-2 mb-4 w-full text-left shadow-none">
                Installation
              </div>
              <ul className="space-y-0">
                {priceData[1].items.map((item) => (
                  <PriceRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
            {/* Other */}
            <div>
              <div className="rounded-full bg-blue-900 text-white text-lg font-bold px-6 py-2 mb-4 w-full text-left shadow-none">
                Other
              </div>
              <ul className="space-y-0">
                {priceData[3].items.map((item) => (
                  <PriceRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
