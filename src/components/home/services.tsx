import Image from "next/image";

const services = [
  {
    title: "Installation",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    icon: "/images/svg/air-conditioner-svgrepo-com.svg",
    img: "/images/img/pic5.jpg",
    bg: "bg-blue-50",
    btn: "bg-gray-200 text-blue-900 hover:bg-blue-100",
    link: "/installation",
  },
  {
    title: "Repair",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    icon: "/images/svg/wrench-line-svgrepo-com.svg",
    img: "/images/img/pic7.jpg",
    bg: "bg-blue-400 text-white",
    btn: "bg-white text-blue-900 hover:bg-blue-100",
    link: "/repair",
  },
  {
    title: "Installation",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    icon: "/images/svg/air-conditioner-svgrepo-com.svg",
    img: "/images/img/pic18.jpg",
    bg: "bg-blue-50",
    btn: "bg-gray-200 text-blue-900 hover:bg-blue-100",
    link: "/installation",
  },
  {
    title: "Repair",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    icon: "/images/svg/wrench-line-svgrepo-com.svg",
    img: "/images/img/pic19.jpg",
    bg: "bg-blue-400 text-white",
    btn: "bg-white text-blue-900 hover:bg-blue-100",
    link: "/repair",
  },
  {
    title: "Maintenance",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    icon: "/images/svg/completed-order-svgrepo-com.svg",
    img: "/images/img/pic21.jpg",
    bg: "bg-blue-800 text-white",
    btn: "bg-white text-blue-900 hover:bg-blue-100",
    link: "/maintenance",
  },
  {
    title: "Installation",
    desc: "Trust us to deliver reliable solutions, exceptional service, and peace of mind for all your HVAC needs.",
    icon: "/images/svg/air-conditioner-svgrepo-com.svg",
    img: "/images/img/pic22.jpg",
    bg: "bg-blue-50",
    btn: "bg-gray-200 text-blue-900 hover:bg-blue-100",
    link: "/installation",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full mb-3 font-semibold">
            Complete Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
            sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`rounded-2xl overflow-hidden shadow-lg flex flex-col h-full ${service.bg}`}
            >
              <div className="relative">
                <div className="absolute top-6 left-6 z-10 bg-white/80 p-2 rounded-xl shadow">
                  <Image
                    src={service.icon}
                    alt={service.title + " icon"}
                    width={44}
                    height={44}
                  />
                </div>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={220}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="mb-6 text-base opacity-80">{service.desc}</p>
                </div>
                <a
                  href={service.link}
                  className={`inline-block px-6 py-2 rounded-lg font-semibold mt-auto transition-colors duration-200 ${service.btn}`}
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
