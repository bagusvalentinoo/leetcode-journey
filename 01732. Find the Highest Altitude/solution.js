/**
 * Problem: 1732. Find the Highest Altitude
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the highest altitude reached during a journey
 *
 * @param {number[]} gain - Array of net altitude gains/losses
 *
 * @returns {number} Maximum altitude reached
 */
const largestAltitude = (gain) => {
  // Initialize' current altitude and maximum altitude
  let currentAltitude = 0,
    maxAltitude = 0

  // Process each altitude change
  for (const change of gain) {
    // Update current altitude
    currentAltitude += change
    // Update maximum altitude if current is higher
    maxAltitude = Math.max(maxAltitude, currentAltitude)
  }

  // Return the highest altitude reached during the journey
  return maxAltitude
}
