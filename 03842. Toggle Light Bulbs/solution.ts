/**
 * Problem: 3842. Toggle Light Bulbs
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns bulbs that are on after toggling each occurrence
 *
 * @param bulbs - Array of bulb numbers to toggle
 *
 * @returns Bulb numbers that remain on
 */
const toggleLightBulbs = (bulbs: number[]): number[] => {
  // Create Uint8Array to track toggle state (0 = off, 1 = on)
  const toggleState = new Uint8Array(101)

  // Toggle each bulb that appears in the array
  for (let index = 0; index < bulbs.length; ++index) {
    // If bulb is off (0), turn it on (1)
    if (toggleState[bulbs[index]] === 0) toggleState[bulbs[index]] = 1
    // If bulb is on (1), turn it off (0)
    else toggleState[bulbs[index]] = 0
  }

  // Array to store bulbs that are on
  const result = new Array<number>()

  // Check all possible bulbs from 1 to 100
  for (let index = 1; index < 101; ++index) {
    // If bulb is on (1), add to result
    if (toggleState[index] === 1) result.push(index)
  }

  // Return the bulbs that are on
  return result
}
