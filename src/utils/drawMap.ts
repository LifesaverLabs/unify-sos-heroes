import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { createProjection } from './projection';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection } from 'geojson';

interface WorldData extends Topology {
  objects: {
    countries: GeometryCollection;
    land?: GeometryCollection;
  };
}

export interface DrawMapOptions {
  container: HTMLElement;
  onCountryClick?: (countryName: string) => void;
  centerLongitude?: number;
  southUp?: boolean;
}

/**
 * Draws a Gall-Peters world map with D3.js
 * Features:
 * - South-up orientation (Antarctica at top)
 * - Equal-area projection (accurately represents landmass sizes)
 * - Africa/Eurasia centered
 * - Interactive country selection
 * - Responsive resize handling
 */
export function drawMap({
  container,
  onCountryClick,
  centerLongitude = 20,
  southUp = true,
}: DrawMapOptions) {
  // Clear container
  container.innerHTML = '';

  // Get dimensions (0.55 aspect ratio works well for Gall-Peters)
  const width = container.clientWidth;
  const height = width * 0.55;

  // Create SVG
  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'w-full h-auto')
    .style('background', 'hsl(var(--background))');

  // Create projection
  const projection = createProjection(width, height, centerLongitude, southUp);

  // Create path generator
  const path = d3.geoPath().projection(projection);

  // Create graticule (lat/long grid lines)
  const graticule = d3.geoGraticule();

  // Add graticule lines
  svg.append('path')
    .datum(graticule)
    .attr('class', 'graticule')
    .attr('d', path)
    .style('fill', 'none')
    .style('stroke', 'hsl(var(--border))')
    .style('stroke-width', '0.5px')
    .style('stroke-opacity', '0.2');

  // Load and render world data from world-atlas
  d3.json<WorldData>('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then((world) => {
      if (!world) return;

      // Convert TopoJSON to GeoJSON
      const countries = topojson.feature(
        world,
        world.objects.countries
      ) as FeatureCollection;

      // Draw countries
      svg.append('g')
        .attr('class', 'countries')
        .selectAll('path')
        .data(countries.features)
        .join('path')
        .attr('d', path as any)
        .attr('class', 'country')
        .style('fill', 'hsl(var(--primary) / 0.08)')
        .style('stroke', 'hsl(var(--primary))')
        .style('stroke-width', '0.5px')
        .style('cursor', 'pointer')
        .style('transition', 'all 0.2s ease')
        .on('mouseenter', function() {
          d3.select(this)
            .style('fill', 'hsl(var(--primary) / 0.25)')
            .style('stroke-width', '1.5px');
        })
        .on('mouseleave', function() {
          d3.select(this)
            .style('fill', 'hsl(var(--primary) / 0.08)')
            .style('stroke-width', '0.5px');
        })
        .on('click', function(event, d) {
          const countryName = (d.properties as any)?.name || 'your country';
          if (onCountryClick) {
            onCountryClick(countryName);
          }
        })
        .append('title')
        .text((d) => (d.properties as any)?.name || 'Unknown');
    })
    .catch((error) => {
      console.error('Error loading world data:', error);
    });

  // Handle window resize
  const resize = () => {
    const newWidth = container.clientWidth;
    const newHeight = newWidth * 0.55;

    svg
      .attr('width', newWidth)
      .attr('height', newHeight);

    const newProjection = createProjection(newWidth, newHeight, centerLongitude, southUp);
    const newPath = d3.geoPath().projection(newProjection);

    // Update all paths with new projection
    svg.selectAll('path').attr('d', newPath as any);
  };

  window.addEventListener('resize', resize);

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', resize);
  };
}
