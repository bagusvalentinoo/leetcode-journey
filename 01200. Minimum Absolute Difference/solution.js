/**
 * Problem: 1200. Minimum Absolute Difference
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

/**
 * Find all pairs of distinct integers with the minimum absolute difference
 *
 * @param {number[]} arr - Distinct integers
 *
 * @returns {number[][]} - Pairs with minimum absolute difference
 */
const minimumAbsDifference = (arr) => {
  // Convert input array to Int32Array for performance and sort in ascending order
  arr = new Int32Array(arr).sort()

  // Initialize result array to store pairs with minimum absolute difference
  let res = []
  // Initialize min to Infinity to track the minimum absolute difference found
  let min = Infinity

  // Iterate through the sorted array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Calculate the absolute difference between current and previous element
    const d = arr[i] - arr[i - 1]

    // If current difference is greater than min, skip to next iteration
    if (d > min) continue
    // If current difference is less than min, reset result array
    if (d < min) res = []

    // Add the current pair to the result array
    res.push([arr[i - 1], arr[i]])
    // Update min with the current difference
    min = d
  }

  // Return the array of pairs with minimum absolute difference
  return res
}
