import AboutUsSection from "@/views/home/about-us";
import BannerSection from "@/views/home/banner";
import IndustriesSection from "@/views/home/industries";
import OurWorkSection from "@/views/home/our-work";
import ServicesSection from "@/views/home/services";
import TechnologiesSection from "@/views/home/technologies";

export default function HomeView() {
  return (
    <div className="flex flex-col gap-28 pb-24 lg:gap-32">
      <BannerSection />
      <AboutUsSection />
      <ServicesSection />
      <TechnologiesSection />
      <OurWorkSection />
      <IndustriesSection />
    </div>
  );
}
