import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FacilitiesSection from "@/components/FacilitiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <FacilitiesSection />
    </div>
  );
};

export default Index;
