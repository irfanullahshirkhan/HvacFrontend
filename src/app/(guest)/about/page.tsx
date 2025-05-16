import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Instagram,
  Users,
  Star,
  ShieldCheck,
  Wrench,
  Calendar,
  BadgeDollarSign,
  AlarmClock,
  CheckCircle2,
} from "lucide-react";
import OurTeam from "@/components/home/our-team";
import WhyChooseUs from "@/components/home/why-choose-use";

const team = [
  {
    name: "Jeffery Mussman",
    role: "Founder & CEO",
    image: "/images/team/1.webp",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
    ],
  },
  {
    name: "Jeffery Mussman",
    role: "Founder & CEO",
    image: "/images/team/2.webp",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
    ],
  },
  {
    name: "Jeffery Mussman",
    role: "Founder & CEO",
    image: "/images/team/3.webp",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
    ],
  },
  {
    name: "Jeffery Mussman",
    role: "Founder & CEO",
    image: "/images/team/4.webp",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
    ],
  },
];

const brands = [
  "/images/logo/1.webp",
  "/images/logo/2.webp",
  "/images/logo/3.webp",
  "/images/logo/4.webp",
  "/images/logo/5.webp",
  "/images/logo/6.webp",
];

const features = [
  {
    icon: <Wrench className="w-8 h-8 text-white bg-[#29508a] p-2 rounded-lg" />,
    title: "Expert Technicians",
    desc: "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
  },
  {
    icon: (
      <Calendar className="w-8 h-8 text-white bg-[#29508a] p-2 rounded-lg" />
    ),
    title: "Flexible Scheduling",
    desc: "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
  },
  {
    icon: (
      <BadgeDollarSign className="w-8 h-8 text-white bg-[#29508a] p-2 rounded-lg" />
    ),
    title: "Transparent Pricing",
    desc: "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
  },
  {
    icon: (
      <ShieldCheck className="w-8 h-8 text-white bg-[#29508a] p-2 rounded-lg" />
    ),
    title: "Quality Parts",
    desc: "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
  },
  {
    icon: (
      <AlarmClock className="w-8 h-8 text-white bg-[#29508a] p-2 rounded-lg" />
    ),
    title: "Emergency Services",
    desc: "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
  },
  {
    icon: (
      <CheckCircle2 className="w-8 h-8 text-white bg-[#29508a] p-2 rounded-lg" />
    ),
    title: "Satisfaction Guarantee",
    desc: "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-[70px] h-[340px] flex items-center justify-center ">
        <Image
          src="/images/background/1.webp"
          alt="About Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#29508a]/60 z-10" />
        <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-[#29508a] text-white px-4 py-1 rounded-full text-xs mb-3">
              Our Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              About Us
            </h1>
            <ul className="flex gap-2 text-white/80 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-white">About Us</li>
            </ul>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-lg font-semibold text-white">
              Air Conditioning and Heating Specialists
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 z-30 bg-[#29508a] w-20 h-20 flex items-center justify-center rounded-full border-4 border-white shadow-lg">
          <Users className="w-10 h-10 text-white" />
        </div>
      </section>

      {/* Company History/Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 mt-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[#29508a] font-semibold mb-2">Welcome</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              History of Our Company
            </h2>
            <p className="text-gray-700 mb-6">
              Welcome to CoolAir, your trusted partner for all your HVAC needs.
              With years of industry experience and a commitment to excellence,
              we specialize in providing top-quality heating, ventilation, and
              air conditioning services tailored to your unique requirements.
              From installation and repair to maintenance and upgrades, our
              skilled technicians are dedicated to delivering reliable solutions
              that ensure your comfort and satisfaction. Sint excepteur laborum
              id nisi ullamco ut aliqua ut voluptate incididunt ut consequat
              nostrud incididunt sit ex dolor excepteur consequat non in
              exercitation laboris amet magna consequat irure esse elit ut
              eiusmod aliqua est non laboris in commodo mollit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/misc/9.webp"
                alt="Stat 1"
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <Card className="bg-[#29508a] text-white text-center rounded-xl">
                <CardContent className="py-4">
                  <h3 className="text-3xl font-bold mb-1">850+</h3>
                  <div className="text-sm">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col justify-between">
              <Card className="bg-[#29508a] text-white text-center rounded-xl mb-4">
                <CardContent className="py-4">
                  <h3 className="text-3xl font-bold mb-1">99%</h3>
                  <div className="text-sm">Customer Satisfaction</div>
                </CardContent>
              </Card>
              <Image
                src="/images/misc/8.webp"
                alt="Stat 2"
                width={300}
                height={200}
                className="rounded-xl mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      <OurTeam />

      {/* Brands/Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Brand logos grid */}
          <div className="flex justify-center">
            <Card className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                {brands.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center w-40 h-20"
                  >
                    <Image
                      src={logo}
                      alt={`Brand ${idx + 1}`}
                      width={120}
                      height={60}
                      className="object-contain max-h-12"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
          {/* Text and CTA */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-2">
              <span className="inline-block bg-[#eaf1fa] text-[#29508a] font-semibold px-4 py-1 rounded-full text-xs">
                Services Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              The world brands we
              <br />
              working with
            </h2>
            <p className="text-gray-500 mb-6 max-w-md">
              Velit veniam dolor veniam ea sunt consequat cupidatat dolore
              commodo mollit anim dolore ut velit aliqua anim amet enim aute
              culpa officia fugiat proident cillum pariatur eiusmod adipisicing
              enim non officia.
            </p>
            <a
              className="inline-block bg-[#29508a] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#4bb6e6] transition"
              href="#"
            >
              Discover Plugins
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
}
