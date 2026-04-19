/**
 * Problem: 3842. Toggle Light Bulbs
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns bulbs that are on after toggling each occurrence
 *
 * @param {number[]} bulbs - Array of bulb numbers to toggle
 *
 * @returns {number[]} Bulb numbers that remain on
 */
const toggleLightBulbs = (bulbs) => {
  // Get number of bulbs to process
  const bulbCount = bulbs.length

  // Track toggle state of bulbs 1-100 (index 0 unused)
  const toggleState = new Array(101).fill(false)

  // Toggle each bulb that appears in the array
  for (let i = 0; i < bulbCount; i++) {
    // If bulb already toggled, turn it off
    if (toggleState[bulbs[i]]) toggleState[bulbs[i]] = false
    // Otherwise, turn it on
    else toggleState[bulbs[i]] = true
  }

  // Collect bulbs that are currently on
  const result = []

  // Check all possible bulbs (1-100)
  for (let i = 0; i < 101; i++) {
    // If bulb is on, add to result
    if (toggleState[i]) result.push(i)
  }

  // Return the bulbs that are on
  return result
}
