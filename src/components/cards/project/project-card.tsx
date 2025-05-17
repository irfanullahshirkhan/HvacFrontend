"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    title: string;
    img: string;
    location: string;
    slug: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 group border-0 p-0 overflow-hidden">
      <div className="w-full h-56 relative overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          width={400}
          height={260}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="px-6 py-5 text-center">
        <h4 className="text-xl font-semibold text-[#22314f] mb-1 truncate">
          {project.title}
        </h4>
        <p className="text-gray-500 text-sm">{project.location}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-block mt-4 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
}
