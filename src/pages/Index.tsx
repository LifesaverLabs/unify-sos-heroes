import { Hero } from "@/components/Hero";
import { SamaritanLaws } from "@/components/SamaritanLaws";
import { EmergencyNumbers } from "@/components/EmergencyNumbers";
import { Training } from "@/components/Training";
import { CallToAction } from "@/components/CallToAction";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SamaritanLaws />
      <EmergencyNumbers />
      <Training />
      <CallToAction />
    </div>
  );
};

export default Index;
