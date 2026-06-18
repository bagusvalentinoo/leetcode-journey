/**
 * Problem: 1344. Angle Between Hands of a Clock
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the smaller angle between hour and minute hands of a clock
 *
 * @param hour - Hour value (1-12)
 * @param minutes - Minutes value (0-59)
 *
 * @returns Smaller angle in degrees
 */
const angleClock = (hour: number, minutes: number): number => {
  // Calculate the exact hour hand position (including minutes)
  const hourHandPosition: number = hour + minutes / 60

  // Calculate the difference in "hour units" between hour and minute hands
  // Minute hand moves 12x faster than hour hand
  const hourDifference: number = (11 * hourHandPosition) % 12

  // Convert to degrees: each hour unit = 30 degrees
  return Math.min(hourDifference, 12 - hourDifference) * 30
}
