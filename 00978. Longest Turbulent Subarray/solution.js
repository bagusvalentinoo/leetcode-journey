/**
 * Problem: 978. Longest Turbulent Subarray
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the length of the longest turbulent subarray
 *
 * @param {number[]} arr - Input array
 *
 * @returns {number} - Maximum turbulent subarray length
 */
const maxTurbulenceSize = (arr) => {
  // Handle the base case of a single element array
  if (arr.length === 1) return 1

  // Initialize tracking variables for increasing and decreasing patterns
  let increasingLen = 1,
    decreasingLen = 1,
    maxLength = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      // Current element is greater than previous, extend decreasing pattern
      increasingLen = decreasingLen + 1
      decreasingLen = 1
    } else if (arr[i] < arr[i - 1]) {
      // Current element is less than previous, extend increasing pattern
      decreasingLen = increasingLen + 1
      increasingLen = 1
    } else {
      // Equal elements break turbulence, reset both patterns
      increasingLen = decreasingLen = 1
    }

    // Update the maximum length found so far
    maxLength = Math.max(maxLength, increasingLen, decreasingLen)
  }

  return maxLength
}
