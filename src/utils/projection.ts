import { geoCylindricalEqualArea } from 'd3-geo-projection';

/**
 * Creates a Gall-Peters projection (cylindrical equal-area)
 * with south-up orientation and Africa/Eurasia centering
 */
export function createProjection(
  width: number,
  height: number,
  centerLongitude: number = 20,
  southUp: boolean = true
) {
  const projection = geoCylindricalEqualArea()
    .parallel(45)                           // Gall-Peters standard parallel
    .rotate([-centerLongitude, 0])         // Center on Africa/Eurasia (20°E default)
    .translate([width / 2, height / 2])    // Center in viewport
    .scale(width / (2.2 * Math.PI));       // Fit to width

  if (southUp) {
    projection.reflectY(true);              // South-up orientation
  }

  return projection;
}

