/**
 * Problem: 2389. Longest Subsequence With Limited Sum
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the maximum subsequence length for each sum limit
 *
 * @param {number[]} nums - Available positive integers
 * @param {number[]} queries - Maximum allowed sums
 *
 * @returns {number[]} Maximum lengths for each query
 */
const answerQueries = (nums, queries) => {
  // Sort values so each shortest subsequence has the smallest possible sum
  nums.sort((a, b) => a - b)

  // Start with zero selected elements and a sum of zero
  const prefixSums = [0]

  // Append the sum of the smallest elements through each position
  for (const num of nums) prefixSums.push(prefixSums.at(-1) + num)

  // Find the largest valid prefix length for each query
  return queries.map((query) => {
    // Initialize the search with zero through all available elements
    let left = 0
    // Track the largest possible subsequence length
    let right = nums.length

    // Binary search for the final prefix sum within the limit
    while (left < right) {
      // Test the upper middle length to retain a valid candidate
      const middle = Math.ceil((left + right) / 2)

      // Keep this length when its smallest possible sum fits the limit
      if (prefixSums[middle] <= query) left = middle
      // Otherwise, search shorter subsequences
      else right = middle - 1
    }

    // Return the number of selected elements
    return left
  })
}
