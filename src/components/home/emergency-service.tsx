import { PhoneCall, Calculator, Image as LucideImage } from "lucide-react";
import LetUsCall from "../cards/let-us-call";

const items = [
  {
    href: "/contact",
    icon: PhoneCall,
    iconBg: "bg-blue-500",
    title: "Emergency Service",
    desc: "Call +929 333 9296",
  },
  {
    href: "/installation",
    icon: Calculator,
    iconBg: "bg-blue-400",
    title: "Request For",
    desc: "Free Estimation",
  },
  {
    href: "/projects",
    icon: LucideImage,
    iconBg: "bg-blue-600",
    title: "Discover",
    desc: "Latest Projects",
  },
];

export default function EmergencyService() {
  return (
    <section className="bg-blue-400 py-10">
      <div className="relative bottom-0 left-0 right-0 -top-20">
        <LetUsCall />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {items.map(({ href, icon: Icon, iconBg, title, desc }) => (
            <a
              key={title}
              href={href}
              className="flex-1 flex items-center bg-gray-900 text-white rounded-xl p-4 relative min-w-[260px] max-w-sm mx-auto md:mx-0 shadow-lg hover:scale-105 transition-transform"
            >
              <div
                className={`${iconBg} p-3 rounded-xl flex items-center justify-center mr-4`}
              >
                <Icon size={40} />
              </div>
              <div>
                <div className="text-xs text-gray-200">{title}</div>
                <div className="text-lg font-bold">{desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
