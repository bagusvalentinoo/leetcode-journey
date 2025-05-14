/**
 * Problem: 963. Minimum Area Rectangle II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

/**
 * Finds minimum area of any rectangle formed from given points
 *
 * @param {number[][]} points - Points in the X-Y plane
 *
 * @returns {number} - Minimum area or 0 if no rectangle exists
 */
const minAreaFreeRect = (points) => {
  // Initialize minimum area to Infinity to find the smallest valid rectangle
  let min = Infinity

  // Create a set of all points for O(1) lookup, using string format "x-y"
  const set = new Set(points.map((p) => `${p[0]}-${p[1]}`))

  // Triple nested loop to check all possible combinations of 3 points
  for (let i = 0; i < points.length; i++) {
    const [ax, ay] = points[i]

    for (let j = i + 1; j < points.length; j++) {
      const [bx, by] = points[j]

      for (let m = j + 1; m < points.length; m++) {
        const [cx, cy] = points[m]

        // Calculate vectors from point A to B and A to C
        const abx = bx - ax,
          aby = by - ay,
          acx = cx - ax,
          acy = cy - ay

        // Check if vectors are perpendicular (dot product equals zero)
        const value = abx * acx + aby * acy

        if (value !== 0) continue

        // Calculate the expected fourth point to form a rectangle
        const dx = bx + cx - ax,
          dy = by + cy - ay

        const key = dx + '-' + dy

        // Skip if the fourth point doesn't exist in our set
        if (!set.has(key)) continue

        // Calculate the area using the lengths of two perpendicular sides
        const abLen = Math.hypot(bx - ax, by - ay),
          acLen = Math.hypot(cx - ax, cy - ay)

        const area = abLen * acLen

        // Update minimum area if smaller
        min = Math.min(min, area)
      }
    }
  }

  // Return 0 if no valid rectangle was found, otherwise return minimum area
  return min === Infinity ? 0 : min
}
