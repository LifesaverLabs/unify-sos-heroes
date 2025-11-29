import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Feature, FeatureCollection } from "geojson";
import "leaflet/dist/leaflet.css";
import { Globe } from "lucide-react";

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
        <span>Good & Bad Samaritan law consolidation</span>
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
  const [countriesData, setCountriesData] = useState<FeatureCollection | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const res = await fetch(COUNTRIES_GEOJSON_URL);
        if (!res.ok) throw new Error("Failed to load country data");
        const json = (await res.json()) as FeatureCollection;
        setCountriesData(json);
      } catch (err) {
        console.error("Error loading countries GeoJSON", err);
        setError("We couldn't load the country shapes right now. Please try again later.");
      }
    };

    loadCountries();
  }, []);

  const onEachCountry = (feature: Feature, layer: any) => {
    const name =
      (feature.properties as any)?.ADMIN ||
      (feature.properties as any)?.name ||
      "your country";

    layer.on({
      click: () => {
        layer.bindPopup(popupHtmlForCountry(name)).openPopup();
      },
      mouseover: () => {
        layer.setStyle({
          weight: 1.5,
          fillOpacity: 0.3,
        });
      },
      mouseout: () => {
        layer.setStyle({
          weight: 1,
          fillOpacity: 0.1,
        });
      },
    });
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

        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
          {error && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80">
              <p className="text-sm text-destructive max-w-md text-center px-4">
                {error}
              </p>
            </div>
          )}

          {!countriesData ? (
            <div className="flex items-center justify-center w-full h-[500px] md:h-[600px] bg-muted">
              <p className="text-sm text-muted-foreground">
                Loading global movement map…
              </p>
            </div>
          ) : (
            <div className="w-full h-[500px] md:h-[600px]">
              <MapContainer
                {...({
                  center: [0, 0],
                  zoom: 2,
                  minZoom: 1.3,
                  maxZoom: 6,
                  className: "w-full h-full",
                  attributionControl: false,
                } as any)}
              >
                <TileLayer
                  {...({
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    attribution:
                      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
                  } as any)}
                />
                <GeoJSON
                  {...({
                    data: countriesData as any,
                    style: {
                      color: "hsl(222 84% 56%)", // approximate --primary
                      weight: 1,
                      fillColor: "hsl(222 84% 56%)",
                      fillOpacity: 0.1,
                    },
                    onEachFeature: onEachCountry as any,
                  } as any)}
                />
              </MapContainer>
            </div>
          )}

          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-xs z-10">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> Click any country to start a local Unify SOS movement!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMovementMap;
