import AboutUsSection from "@/views/home/about-us";
import BannerSection from "@/views/home/banner";
import IndustriesSection from "@/views/home/industries";
import OurWorkSection from "@/views/home/our-work";
import ServicesSection from "@/views/home/services";
import TechnologiesSection from "@/views/home/technologies";

export default function HomeView() {
  return (
    <>
      <BannerSection />
      <AboutUsSection />
      <ServicesSection />
      <TechnologiesSection />
      <OurWorkSection />
      <IndustriesSection />
    </>
  );
}
