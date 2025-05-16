import Image from "next/image";

const project = {
  title: "Office HVAC Solution",
  subtitle: "Our Project",
  images: ["/images/img/pic7.jpg", "/images/img/pic11.jpg"],
  info: [
    { label: "Client", value: "Envato Corps" },
    { label: "Type", value: "Air Conditioning" },
    { label: "Location", value: "New York, USA" },
    { label: "Year", value: "2023" },
  ],
  overview:
    "In nisi proident aliqua et nulla ut cillum cupidatat laborum dolore labore commodo voluptate tempor non consequat laboris excepteur ad veniam sunt aliquip exercitation velit laborum aliquip commodo excepteur sed nisi anim anim velit qui dolore anim laboris est dolor incididunt mollit ut ullamco sint adipisicing reprehenderit ad reprehenderit ut magna adipisicing labore laboris laboris fugiat ut eiusmod aliqua dolore minim amet occaecat occaecat amet id excepteur sed dolor consectetur laborum irure in sint et sit nostrud et cupidatat proident ad duis commodo velit velit eu eiusmod laboris anim minim.",
  challenges: [
    "Lorem ipsum irure ad minim laboris in nostrud consequat ad excepteur eu non est.",
    "Fugiat amet dolore elit irure in ad ad voluptate nostrud aute ullamco aliqua ut minim elit.",
    "Cupidatat magna mollit incididunt culpa cillum non eu sunt est est duis nisi anim sunt ut sed.",
    "Consectetur dolore esse dolore elit adipisicing culpa ea non deserunt enim ut voluptate irure.",
    "Culpa tempor amet anim laborum eu sunt esse aute nulla ut elit et.",
  ],
  solutions: [
    "Lorem ipsum irure ad minim laboris in nostrud consequat ad excepteur eu non est.",
    "Fugiat amet dolore elit irure in ad ad voluptate nostrud aute ullamco aliqua ut minim elit.",
    "Cupidatat magna mollit incididunt culpa cillum non eu sunt est est duis nisi anim sunt ut sed.",
    "Consectetur dolore esse dolore elit adipisicing culpa ea non deserunt enim ut voluptate irure.",
    "Culpa tempor amet anim laborum eu sunt esse aute nulla ut elit et.",
  ],
};

export default function ProjectDetailsPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative -mt-[70px] h-[340px] flex items-center justify-center">
        <Image
          src="/images/img/pic23.jpg"
          alt="Project Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#29508a]/60 z-10" />
        <div className="relative max-w-6xl z-20 w-full mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          <div className="pt-16 md:pt-0">
            <div className="inline-block bg-[#29508a] text-white px-4 py-1 rounded-full text-xs mb-3">
              {project.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <ul className="flex gap-2 text-white/80 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>/</li>
              <li className="text-white">{project.title}</li>
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

      <section className="pt-12 pb-6 text-center">
        <div className="inline-block bg-[#29508a] text-white px-6 py-2 rounded-full text-base font-semibold mb-4">
          {project.subtitle}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#22314f] mb-8">
          {project.title}
        </h1>
      </section>

      {/* Images Row */}
      <section className=" flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto mb-12">
        {project.images.map((img, idx) => (
          <div key={idx} className="w-full md:w-1/2">
            <Image
              src={img}
              alt={project.title + " image " + (idx + 1)}
              width={600}
              height={350}
              className="rounded-2xl object-cover w-full h-64 md:h-72"
            />
          </div>
        ))}
      </section>

      {/* Project Info Row */}
      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        {project.info.map((item) => (
          <div key={item.label}>
            <div className="font-bold text-[#22314f] mb-1">{item.label}</div>
            <div className="text-gray-500">{item.value}</div>
          </div>
        ))}
      </section>

      {/* Project Overview */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16 px-4">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-[#22314f] mb-4">
            Project Overview
          </h3>
        </div>
        <div className="md:col-span-2 text-gray-500 text-base leading-relaxed">
          {project.overview}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Challenges */}
        <div className="bg-[#f6f8fb] rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-[#22314f] mb-6">Challenges</h3>
          <ol className="list-decimal list-inside space-y-4">
            {project.challenges.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e3e8f0] text-[#29508a] font-bold mr-2">
                  {idx + 1}
                </span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ol>
        </div>
        {/* Solutions */}
        <div className="bg-[#29508a] rounded-2xl p-8 md:p-10 text-white">
          <h3 className="text-2xl font-bold mb-6">Solutions</h3>
          <ol className="list-decimal list-inside space-y-4">
            {project.solutions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#29508a] font-bold mr-2">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
