import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { drawMap } from "@/utils/drawMap";

const popupHtmlForCountry = (countryName: string) => `
  <div class="p-4 max-w-sm bg-card border border-border rounded-lg shadow-lg">
    <div class="flex items-center gap-2 mb-3">
      <div class="h-8 w-8 rounded-full bg-emergency/10 flex items-center justify-center">
        <svg class="h-4 w-4 text-emergency" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 class="font-bold text-lg text-foreground">Start a Movement in ${countryName}</h3>
    </div>
    <p class="text-sm text-muted-foreground mb-4">
      Join the global effort to unify emergency response! Start a local Unify SOS chapter in ${countryName} to advocate for:
    </p>
    <ul class="text-sm space-y-2 mb-4 text-foreground/90">
      <li class="flex items-start gap-2">
        <span class="text-emergency mt-0.5">•</span>
        <span>Unified emergency numbers (112 or 123)</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-emergency mt-0.5">•</span>
        <span>Good Samaritan & Dutiful Suffragist law consolidation</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-emergency mt-0.5">•</span>
        <span>Free government-sponsored emergency training</span>
      </li>
    </ul>
    <p class="text-xs text-muted-foreground italic mb-4">
      We'll proudly link to your growing calmunity⁵ efforts from UnifySOS.org!
    </p>
    <a href="mailto:movement@unifysos.org?subject=Starting Unify SOS Chapter in ${countryName}" 
       class="inline-block w-full text-center px-4 py-2 bg-emergency text-white rounded-md hover:bg-emergency/90 transition-colors text-sm font-medium">
      Contact Us to Start
    </a>
  </div>
`;

/**
 * GlobalMovementMap Component
 * 
 * Renders an interactive world map using D3.js with:
 * - Gall-Peters projection (cylindrical equal-area)
 * - South-up orientation (Antarctica at top)
 * - Africa/Eurasia centered (20°E default)
 * - Interactive country selection
 * - Toggle controls for orientation and center longitude
 */
const GlobalMovementMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const popupBackdropRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [southUp, setSouthUp] = useState(true);
  const [centerLongitude, setCenterLongitude] = useState(20);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    try {
      // Clean up previous map instance
      if (cleanupRef.current) {
        cleanupRef.current();
      }

      // Draw new map with current settings
      cleanupRef.current = drawMap({
        container: mapContainerRef.current,
        onCountryClick: (countryName) => {
          if (popupRef.current && popupBackdropRef.current) {
            popupRef.current.innerHTML = popupHtmlForCountry(countryName);
            popupBackdropRef.current.classList.remove('hidden');
          }
        },
        centerLongitude,
        southUp,
      });
    } catch (err) {
      console.error("Error initializing map", err);
      setError("We couldn't load the map right now. Please try again later.");
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [centerLongitude, southUp]);

  const closePopup = () => {
    if (popupBackdropRef.current) {
      popupBackdropRef.current.classList.add('hidden');
    }
  };

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">Global Movement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start a Local Chapter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click your country to learn how you can start a Unify SOS advocacy movement in your community.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border bg-background">
          {error && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80">
              <p className="text-sm text-destructive max-w-md text-center px-4">
                {error}
              </p>
            </div>
          )}

          {/* D3 Map Container */}
          <div
            ref={mapContainerRef}
            className="w-full h-[500px] md:h-[600px] relative"
          />

          {/* Country Selection Popup with Backdrop */}
          <div
            ref={popupBackdropRef}
            className="hidden absolute inset-0 z-30 bg-background/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closePopup();
              }
            }}
          >
            <div
              ref={popupRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
                aria-label="Close popup"
              >
                <span className="text-foreground text-xl leading-none">&times;</span>
              </button>
            </div>
          </div>

          {/* Map Controls and Info */}
          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-xs z-10">
            <p className="text-xs text-muted-foreground mb-2">
              <strong className="text-foreground">Tip:</strong> Click any country to start a local Unify SOS movement!
            </p>
            <p className="text-xs text-muted-foreground italic mb-2">
              Projection: Gall-Peters (cylindrical equal-area), {southUp ? 'south-up' : 'north-up'}, centered near {centerLongitude}°E
            </p>
            <a 
              href="https://www.youtube.com/watch?v=vVX-PrBRtTY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline block mb-3"
            >
              Why Peters projection? (West Wing clip)
            </a>
            
            {/* Orientation Toggle */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSouthUp(!southUp)}
                className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors font-medium"
              >
                {southUp ? '🌍 Switch to North-Up' : '🌏 Switch to South-Up'}
              </button>
              
              {/* Center Longitude Selector */}
              <div className="flex gap-2">
                <span className="text-xs text-muted-foreground self-center">Center:</span>
                {[0, 20, 70].map((lon) => (
                  <button
                    key={lon}
                    onClick={() => setCenterLongitude(lon)}
                    className={`text-xs px-2 py-1 rounded transition-colors flex-1 ${
                      centerLongitude === lon
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                    title={lon === 0 ? 'Greenwich' : lon === 20 ? 'Africa/Eurasia' : 'East Asia'}
                  >
                    {lon}°E
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMovementMap;
