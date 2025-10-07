import AboutUsSection from "@/views/home/sections/about-us";
import BannerSection from "@/views/home/sections/banner";
import IndustriesSection from "@/views/home/sections/industries";
import OurWorkSection from "@/views/home/sections/our-work";
import ServicesSection from "@/views/home/sections/services";
import TechnologiesSection from "@/views/home/sections/technologies";

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
