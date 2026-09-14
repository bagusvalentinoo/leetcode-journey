/**
 * Problem: 836. Rectangle Overlap
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two axis-aligned rectangles overlap with positive area
 *
 * @param rec1 - First rectangle as [x1, y1, x2, y2]
 * @param rec2 - Second rectangle as [x1, y1, x2, y2]
 *
 * @returns True if rectangles overlap, false otherwise
 */
const isRectangleOverlap = (rec1: number[], rec2: number[]): boolean => {
  // Check horizontal projections overlap on the X-axis
  const overlapX: boolean = rec1[0] < rec2[2] && rec2[0] < rec1[2]

  // Check vertical projections overlap on the Y-axis
  const overlapY: boolean = rec1[1] < rec2[3] && rec2[1] < rec1[3]

  // Return true only when projections overlap on both axes
  return overlapX && overlapY
}
