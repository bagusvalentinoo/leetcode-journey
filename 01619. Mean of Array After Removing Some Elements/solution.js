/**
 * Problem: 1619. Mean of Array After Removing Some Elements
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates trimmed mean after removing smallest and largest 5%
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {number} Mean of remaining middle 90% of elements
 */
const trimMean = (arr) => {
  // Sort copy of array in ascending order using typed array for performance
  const sorted = new Uint32Array(arr).sort()

  // Number of elements to remove from each end (5%)
  const trim = arr.length / 20

  // Extract middle 90% excluding smallest and largest 5%
  const cleaned = sorted.slice(trim, -trim)

  // Sum middle elements and divide by count for mean
  return cleaned.reduce((acc, val) => acc + val, 0) / cleaned.length
}
