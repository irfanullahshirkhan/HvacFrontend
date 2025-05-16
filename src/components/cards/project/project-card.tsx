"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project }: { project: any }) {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/projects/${project.title}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 group border-0 p-0 overflow-hidden"
    >
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
      </div>
    </Card>
  );
}
