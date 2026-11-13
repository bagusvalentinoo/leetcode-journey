/**
 * Problem: 2389. Longest Subsequence With Limited Sum
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the maximum subsequence length for each sum limit
 *
 * @param nums - Available positive integers
 * @param queries - Maximum allowed sums
 *
 * @returns Maximum lengths for each query
 */
const answerQueries = (nums: number[], queries: number[]): number[] => {
  // Sort values so each shortest subsequence has the smallest possible sum
  nums.sort((a: number, b: number): number => a - b)

  // Build prefix sums for every possible subsequence length
  const prefixSums: number[] = [0]

  // Append the sum of the smallest elements through each position
  for (const num of nums) prefixSums.push(prefixSums[prefixSums.length - 1] + num)

  // Find the largest valid prefix length for each query
  return queries.map((query: number): number => {
    // Initialize the search with zero selected elements
    let left: number = 0
    // Track the largest possible subsequence length
    let right: number = nums.length

    // Binary search for the final prefix sum within the limit
    while (left < right) {
      // Test the upper middle length to retain a valid candidate
      const middle: number = Math.ceil((left + right) / 2)

      // Keep this length when its smallest possible sum fits the limit
      if (prefixSums[middle] <= query) left = middle
      // Otherwise, search shorter subsequences
      else right = middle - 1
    }

    // Return the number of selected elements
    return left
  })
}
