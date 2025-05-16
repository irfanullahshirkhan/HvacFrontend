import Hero from "@/components/home/hero";
import EmergencyService from "@/components/home/emergency-service";
import Services from "@/components/home/services";
import HowItWorks from "@/components/home/how-it-works";
import WhyChooseUs from "@/components/home/why-choose-use";
import HvacSpecialist from "@/components/home/hvac-specialist";
import Awards from "@/components/home/awards";
import PriceList from "@/components/home/price-list";
import PricePlan from "@/components/home/price-plan";
import CTA from "@/components/home/cta";
import FAQ from "@/components/home/faq";
import Testimonial from "@/components/home/testimonial";
import PopularProject from "@/components/home/popular-project";
import CallToAction from "@/components/home/call-to-action";
export default function Home() {
  return (
    <main>
      <Hero />
      <EmergencyService />
      <Services />
      <PopularProject />
      <HowItWorks />
      <WhyChooseUs />
      <HvacSpecialist />
      <Awards />
      <PriceList />
      <PricePlan />
      <Testimonial />
      <FAQ />
      <CallToAction />
      <CTA />
    </main>
  );
}
