import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Globe } from "lucide-react";

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGF2aWRoYXJtc2xlc3MiLCJhIjoiY21pazZ1dmprMTlkYTNrb280Z3ZjeWRwNCJ9.tvOkUetFGdNKPoF_ghE05g";

const GlobalMovementMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      projection: { name: "naturalEarth" },
      zoom: 1.2,
      center: [0, 0],
      bearing: 180,
      pitch: 0,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", async () => {
      if (!map.current) return;

      // Fetch free country boundaries GeoJSON
      const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
      const countriesData = await response.json();

      // Add country boundaries layer
      map.current.addSource("countries", {
        type: "geojson",
        data: countriesData,
      });

      map.current.addLayer({
        id: "country-fills",
        type: "fill",
        source: "countries",
        paint: {
          "fill-color": "hsl(var(--primary))",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.3,
            0.1,
          ],
        },
      });

      map.current.addLayer({
        id: "country-borders",
        type: "line",
        source: "countries",
        paint: {
          "line-color": "hsl(var(--border))",
          "line-width": 1,
        },
      });

      let hoveredStateId: string | number | null = null;

      // Hover effect
      map.current.on("mousemove", "country-fills", (e) => {
        if (!map.current) return;
        map.current.getCanvas().style.cursor = "pointer";

        if (e.features && e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.current.setFeatureState(
              { source: "countries", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id as string | number;
          map.current.setFeatureState(
            { source: "countries", id: hoveredStateId },
            { hover: true }
          );
        }
      });

      map.current.on("mouseleave", "country-fills", () => {
        if (!map.current) return;
        map.current.getCanvas().style.cursor = "";
        if (hoveredStateId !== null) {
          map.current.setFeatureState(
            { source: "countries", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
      });

      // Click handler for countries
      map.current.on("click", "country-fills", (e) => {
        if (!map.current || !e.features || e.features.length === 0) return;

        const country = e.features[0];
        const countryName = country.properties?.ADMIN || country.properties?.name || "your country";
        const coordinates = e.lngLat;

        const popupContent = `
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

        new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: true,
          maxWidth: "400px",
        })
          .setLngLat(coordinates)
          .setHTML(popupContent)
          .addTo(map.current);
      });
    });

    return () => {
      map.current?.remove();
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
            Click your country to learn how you can start a Unify SOS advocacy movement in your community
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
          <div
            ref={mapContainer}
            className="w-full h-[500px] md:h-[600px]"
          />
          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-xs">
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
