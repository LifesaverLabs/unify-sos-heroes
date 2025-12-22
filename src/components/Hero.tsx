import { Button } from "@/components/ui/button";
import { AlertCircle, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emergency via-emergency/90 to-trust py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-white">
            <AlertCircle className="h-5 w-5 animate-pulse-emergency" />
            <span className="text-sm font-medium">Global Emergency Response Initiative</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            One World, One Emergency Number, One Duty to Help
          </h1>

          <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Unifying Good Samaritan protections and Dutiful Suffragist duties worldwide. 
            Consolidating emergency numbers globally. Empowering everyone to become an upstander.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("samaritan-laws")}
            >
              Learn About Samaritan Laws
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20 hover:text-white"
              onClick={() => scrollToSection("emergency-numbers")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Unify Emergency Numbers
            </Button>
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 h-auto bg-white text-emergency hover:bg-white/90"
            >
              <a href="https://www.nayborsos.org" target="_blank" rel="noopener noreferrer">
                <AlertCircle className="mr-2 h-5 w-5" />
                Join Naybor SOS Project
              </a>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/80">Different Emergency Numbers Globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">112</div>
              <div className="text-white/80">Most Widely Used Emergency Number</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-white/80">Universal Number We Need</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
