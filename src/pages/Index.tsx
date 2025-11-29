import { Hero } from "@/components/Hero";
import { SamaritanLaws } from "@/components/SamaritanLaws";
import { Suffrage } from "@/components/Suffrage";
import { EmergencyNumbers } from "@/components/EmergencyNumbers";
import GlobalMovementMap from "@/components/GlobalMovementMap";
import { Training } from "@/components/Training";
import { CallToAction } from "@/components/CallToAction";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SamaritanLaws />
      <Suffrage />
      <EmergencyNumbers />
      <GlobalMovementMap />
      <Training />
      <CallToAction />
    </div>
  );
};

export default Index;
