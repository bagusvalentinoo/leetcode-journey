/**
 * Problem: 836. Rectangle Overlap
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two axis-aligned rectangles overlap with positive area
 *
 * @param {number[]} rec1 - First rectangle as [x1, y1, x2, y2]
 * @param {number[]} rec2 - Second rectangle as [x1, y1, x2, y2]
 *
 * @returns {boolean} True if rectangles overlap, false otherwise
 */
const isRectangleOverlap = (rec1, rec2) => {
  // Check horizontal projections overlap on the X-axis
  const overlapX = rec1[0] < rec2[2] && rec2[0] < rec1[2]

  // Check vertical projections overlap on the Y-axis
  const overlapY = rec1[1] < rec2[3] && rec2[1] < rec1[3]

  // Return true only when projections overlap on both axes
  return overlapX && overlapY
}
