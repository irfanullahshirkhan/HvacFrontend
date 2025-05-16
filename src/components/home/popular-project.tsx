import Image from "next/image";
import { Star } from "lucide-react";

const popularProjects = [
  {
    title: "Handyperson for Small Projects",
    image: "/images/img/pic12.jpg",
    rating: 4.6,
    reviews: "599k+",
    price: "$158",
  },
  {
    title: "One-time Cleaning Service",
    image: "/images/img/pic24.jpg",
    rating: 4.5,
    reviews: "314k+",
    price: "$102",
  },
  {
    title: "Air Conditioning Service & Repair",
    image: "/images/img/pic3.jpg",
    rating: 4.7,
    reviews: "306k+",
    price: "$350",
  },
];

const tipTopProjects = [
  {
    title: "Faucet & Plumbing Repair Services",
    image: "/images/img/pic9.jpg",
    rating: 4.6,
    reviews: "568k+",
    price: "$226",
  },
  {
    title: "Roof Installation & Repair",
    image: "/images/img/pic17.jpg",
    rating: 4.7,
    reviews: "325k+",
    price: "$471",
  },
  {
    title: "Bathroom Remodel",
    image: "/images/misc/14.webp",
    rating: 4.4,
    reviews: "180k+",
    price: "$2,500",
  },
];

type ProjectCardProps = {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  price: string;
};

function ProjectCard({
  title,
  image,
  rating,
  reviews,
  price,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e3e8f0] shadow-sm overflow-hidden flex flex-col transition hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold text-[#22314f] text-base mb-2 line-clamp-2">
          {title}
        </div>
        <div className="flex items-center text-sm text-[#d32d2f] font-semibold mb-1">
          <Star className="w-4 h-4 fill-[#d32d2f] text-[#d32d2f] mr-1" />
          {rating}
          <span className="text-gray-400 font-normal ml-1">({reviews})</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-700 font-medium">from {price}</span>
        </div>
      </div>
    </div>
  );
}

export default function PopularProject() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-28">
      <h2 className="text-2xl md:text-3xl flex justify-center font-bold text-[#22314f] mb-6">
        Popular home projects
      </h2>
      <div className="bg-white rounded-2xl border border-[#e3e8f0] p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#22314f] mb-6">
        Keep your home in tip-top shape
      </h2>
      <div className="bg-white rounded-2xl border border-[#e3e8f0] p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tipTopProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
