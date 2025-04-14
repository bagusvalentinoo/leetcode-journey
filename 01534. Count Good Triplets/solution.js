/**
 * Problem: 1534. Count Good Triplets
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 37 ms (Beats 100%)
 */

/**
 * Counts the number of good triplets in the array based on the given conditions
 *
 * @param {number[]} arr - The input array of integers
 * @param {number} a - The maximum allowed difference between arr[i] and arr[j]
 * @param {number} b - The maximum allowed difference between arr[j] and arr[k]
 * @param {number} c - The maximum allowed difference between arr[i] and arr[k]
 *
 * @returns {number} - The count of good triplets
 */
const countGoodTriplets = (arr, a, b, c) => {
  // Initialize variables
  const n = arr.length
  let count = 0

  // Iterate through all possible triplets
  for (let i = 0; i < n - 2; i++) {
    // Iterate through all possible pairs
    for (let j = i + 1; j < n - 1; j++) {
      // Skip if the difference between arr[i] and arr[j] is greater than a
      if (Math.abs(arr[i] - arr[j]) > a) continue

      // Iterate through all possible triplets
      for (let k = j + 1; k < n; k++) {
        // Skip if the difference between arr[j] and arr[k] is greater than b
        if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c)
          count++
      }
    }
  }

  return count
}
