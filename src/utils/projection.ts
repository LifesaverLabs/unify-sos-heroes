import * as d3 from 'd3';

export interface ProjectionConfig {
  width: number;
  height: number;
  centerLongitude?: number;
  southUp?: boolean;
}

export function createProjection({
  width,
  height,
  centerLongitude = 20,
  southUp = true,
}: ProjectionConfig): any {
  // @ts-ignore - geoCylindricalEqualArea exists in d3-geo but type definitions may be incomplete
  const projection = d3.geoCylindricalEqualArea()
    .parallel(45) // Gall-Peters standard parallel
    .rotate([-centerLongitude, 0]) // Center on Africa/Eurasia
    .translate([width / 2, height / 2])
    .scale(width / (2 * Math.PI));

  if (southUp) {
    projection.reflectY(true);
  }

  return projection;
}
