import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import { Facebook, Twitter, Instagram } from "lucide-react";

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

export default function OurTeam() {
  return (
    <section className="bg-[#29508a] py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#4bb6e6] text-white px-4 py-1 rounded-full text-xs mb-3">
            Behind the Scene
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Our Team
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
            sit eu culpa ut irure nisi occaecat dolore adipisicing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="bg-white rounded-xl text-center p-0 overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-56 object-cover"
              />
              <CardContent className="py-4">
                <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <div className="flex justify-center gap-3">
                  {member.socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="bg-[#29508a] text-white rounded-full p-2 hover:bg-[#4bb6e6] transition"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
