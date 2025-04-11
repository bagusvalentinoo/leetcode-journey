/**
 * Problem: 873. Length of Longest Fibonacci Subsequence
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 36 ms (Beats 100%)
 */

/**
 * Finds longest Fibonacci-like subsequence in a strictly increasing array
 *
 * @param {number[]} arr - Increasing array of integers
 *
 * @returns {number} - Length of longest Fibonacci-like subsequence
 */
const lenLongestFibSubseq = (arr) => {
  const index = new Set(arr)
  let max = 2

  // Iterate over all pairs (i, j) where i < j
  for (let i = 0; i < arr.length - max; i++) {
    // Skip if the current number is too large
    if (arr[i] * Math.pow(1.618, max - 1) > arr[arr.length - 1]) break

    // Iterate over all pairs (j, k) where j > i
    for (let j = i + 1; j < arr.length - max + 1; j++) {
      // Skip if the current number is too large
      if (arr[j] * Math.pow(1.618, max - 2) > arr[arr.length - 1]) break

      // Initialize the current subsequence
      let n2 = arr[i]
      let n1 = arr[j]
      let len = 2

      // Check if the subsequence is valid
      while (index.has(n1 + n2)) {
        const temp = n1 + n2
        n2 = n1
        n1 = temp
        len++
      }

      // Update the maximum length
      max = Math.max(max, len)
    }
  }

  // Return the result, ensuring it's at least 3
  return max < 3 ? 0 : max
}
