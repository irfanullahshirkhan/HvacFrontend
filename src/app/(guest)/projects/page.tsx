import Image from "next/image";
import ProjectCard from "@/components/cards/project/project-card";
import OurTeam from "@/components/home/our-team";
const projects = [
  {
    title: "Home HVAC Solution",
    img: "/images/projects/1.jpg",
    location: "New York, USA",
  },
  {
    title: "Office HVAC Solution",
    img: "/images/projects/2.jpg",
    location: "New York, USA",
  },
  {
    title: "Shop HVAC Solution",
    img: "/images/projects/3.jpg",
    location: "New York, USA",
  },
  {
    title: "Healthcare HVAC Solution",
    img: "/images/projects/4.jpg",
    location: "New York, USA",
  },
  {
    title: "Restaurant HVAC Solution",
    img: "/images/projects/5.jpg",
    location: "New York, USA",
  },
  {
    title: "School HVAC Solution",
    img: "/images/projects/6.jpg",
    location: "New York, USA",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white -m-[72px] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[400px] flex items-center justify-center ">
        <Image
          src="/images/background/11.webp"
          alt="Projects Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-400/60 z-10" />
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded mb-2">
              Discover
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Our Projects
            </h1>
            <nav className="text-white text-sm flex items-center gap-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-1">&#8250;</span>
              <span className="opacity-80">Projects</span>
            </nav>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-lg font-semibold text-white">
              Air Conditioning and Heating Specialists
            </div>
          </div>
        </div>
        {/* Centered Circle Icon */}
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 z-30 bg-white w-20 h-20 flex items-center justify-center rounded-full shadow-lg border-4 border-white">
          {/* Placeholder for icon */}
          <svg
            className="w-10 h-10 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              className="fill-current text-blue-100"
            />
            <circle cx="8.5" cy="10.5" r="1.5" className="fill-white" />
            <path
              d="M21 19l-5.5-7-4.5 6-3-4-4 5"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mt-20 md:mt-24 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-[#f6f8fb] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Recent Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image
              src="/images/img/pic24.jpg"
              alt="Gallery 1"
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-56"
            />
            <Image
              src="/images/img/pic14.jpg"
              alt="Gallery 2"
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-56"
            />
            <Image
              src="/images/img/pic17.jpg"
              alt="Gallery 3"
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-56"
            />
            <Image
              src="/images/img/pic18.jpg"
              alt="Gallery 4"
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-56"
            />
            <Image
              src="/images/img/pic4.jpg"
              alt="Gallery 5"
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-56"
            />
            <Image
              src="/images/img/pic11.jpg"
              alt="Gallery 6"
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-56"
            />
          </div>
        </div>
      </section>
      <OurTeam />
    </div>
  );
}
