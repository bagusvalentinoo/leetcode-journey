/**
 * Problem: 1344. Angle Between Hands of a Clock
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the smaller angle between hour and minute hands of a clock
 *
 * @param {number} hour - Hour value (1-12)
 * @param {number} minutes - Minutes value (0-59)
 *
 * @returns {number} Smaller angle in degrees
 */
const angleClock = (hour, minutes) => {
  // Calculate the exact hour hand position (including minutes)
  const hourHandPosition = hour + minutes / 60

  // Calculate the difference in "hour units" between hour and minute hands
  // Minute hand moves 12x faster than hour hand
  const hourDifference = (11 * hourHandPosition) % 12

  // Convert to degrees: each hour unit = 30 degrees
  return Math.min(hourDifference, 12 - hourDifference) * 30
}
