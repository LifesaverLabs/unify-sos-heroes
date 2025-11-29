import { useEffect, useRef, useState } from "react";
import type { Feature, FeatureCollection } from "geojson";
import L, { GeoJSON as LeafletGeoJSON, Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Globe } from "lucide-react";

// Add CSS to counter-rotate popups
const style = document.createElement('style');
style.textContent = `
  .south-up-popup {
    transform: rotate(180deg) scaleY(0.77) !important;
  }
  .south-up-popup .leaflet-popup-content-wrapper {
    transform: none !important;
  }
`;
document.head.appendChild(style);

const COUNTRIES_GEOJSON_URL =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const popupHtmlForCountry = (countryName: string) => `
  <div class="p-4 max-w-sm">
    <div class="flex items-center gap-2 mb-3">
      <div class="h-8 w-8 rounded-full bg-emergency/10 flex items-center justify-center">
        <svg class="h-4 w-4 text-emergency" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 class="font-bold text-lg">Start a Movement in ${countryName}</h3>
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

const GlobalMovementMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const countriesLayerRef = useRef<LeafletGeoJSON | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize Leaflet map with OpenStreetMap tiles (south-up orientation)
    const map = L.map(mapContainerRef.current, {
      center: [0, 0],
      zoom: 2,
      minZoom: 1,
      maxZoom: 6,
      worldCopyJump: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map);

    mapRef.current = map;

    const loadCountries = async () => {
      try {
        const res = await fetch(COUNTRIES_GEOJSON_URL);
        if (!res.ok) throw new Error("Failed to load country data");
        const json = (await res.json()) as FeatureCollection;

        if (!mapRef.current) return;

        const countriesLayer = L.geoJSON(json as any, {
          style: {
            color: "hsl(222 84% 56%)", // approximate --primary
            weight: 1,
            fillColor: "hsl(222 84% 56%)",
            fillOpacity: 0.1,
          },
          onEachFeature: (feature: Feature, layer) => {
            const name =
              (feature.properties as any)?.ADMIN ||
              (feature.properties as any)?.name ||
              "your country";

            layer.on({
              click: () => {
                layer.bindPopup(popupHtmlForCountry(name), {
                  className: 'south-up-popup'
                }).openPopup();
              },
              mouseover: () => {
                (layer as any).setStyle({
                  weight: 1.5,
                  fillOpacity: 0.3,
                });
              },
              mouseout: () => {
                (layer as any).setStyle({
                  weight: 1,
                  fillOpacity: 0.1,
                });
              },
            });
          },
        }).addTo(mapRef.current);

        countriesLayerRef.current = countriesLayer;
      } catch (err) {
        console.error("Error loading countries GeoJSON", err);
        setError("We couldn't load the country shapes right now. Please try again later.");
      }
    };

    loadCountries();

    return () => {
      countriesLayerRef.current?.remove();
      mapRef.current?.remove();
      countriesLayerRef.current = null;
      mapRef.current = null;
    };
  }, []);

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

        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
          {error && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80">
              <p className="text-sm text-destructive max-w-md text-center px-4">
                {error}
              </p>
            </div>
          )}

          <div
            ref={mapContainerRef}
            className="w-full h-[500px] md:h-[600px] bg-muted relative"
            style={{ 
              transform: 'rotate(180deg) scaleY(1.3)',
              transformOrigin: 'center'
            }}
          />

          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-xs z-10"
               style={{ transform: 'rotate(180deg) scaleY(0.77)' }}>
            <p className="text-xs text-muted-foreground mb-2">
              <strong className="text-foreground">Tip:</strong> Click any country to start a local Unify SOS movement!
            </p>
            <p className="text-xs text-muted-foreground italic mb-2">
              South-up Peters projection view — challenging Eurocentric cartographic conventions.
            </p>
            <a 
              href="https://www.youtube.com/watch?v=vVX-PrBRtTY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Why Peters projection? (West Wing clip)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMovementMap;
