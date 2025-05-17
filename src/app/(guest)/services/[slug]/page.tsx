import ServiceDetailsClient from "@/components/ServiceDetailsClient";

export async function generateStaticParams() {
  return [
    { slug: "installation" },
    { slug: "maintenance" },
    { slug: "repair" },
    { slug: "consultation" },
    { slug: "service-repairs" },
    { slug: "indoor-air-quality" },
    { slug: "geothermal" },
    { slug: "installation-replace" },
    { slug: "hvac" },
    { slug: "heating" },
  ];
}

export default function ServiceDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ServiceDetailsClient slug={params.slug} />;
}
