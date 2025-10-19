/**
 * Problem: 1278. Palindrome Partitioning III
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Partition a string into k substrings with minimum cost
 *
 * @param {string} s - The input string
 * @param {number} k - Number of partitions
 *
 * @returns {number} - Minimum partition cost
 */
const palindromePartition = (s, k) => {
  // Get the length of the input string
  const n = s.length

  // Initialize a 2D array to store the cost of converting substrings into palindromes
  const g = Array.from({ length: n }, () => Array(n).fill(0))

  // Fill the cost array by iterating over all substrings
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // Calculate the cost of making the substring s[i..j] a palindrome
      g[i][j] = (s[i] !== s[j] ? 1 : 0) + (i + 1 < j ? g[i + 1][j - 1] : 0)
    }
  }

  // Define a large constant to represent infinity
  const INF = 1 << 30

  // Initialize a memoization table for dynamic programming
  const memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1))

  // Define a recursive function to calculate the minimum cost
  const dfs = (i, r) => {
    // Base case: if no partitions are left, check if we reached the end
    if (r === 0) return i === n ? 0 : INF

    // Base case: if we reached the end but still have partitions left
    if (i === n) return r === 0 ? 0 : INF

    // Return the cached result if already computed
    if (memo[i][r] !== -1) return memo[i][r]

    // If there are fewer characters left than partitions, return infinity
    if (n - i < r) return INF

    // Initialize the best cost for the current state
    let best = INF

    // Calculate the maximum index for the current partition
    const tMax = n - r

    // Iterate over possible partition endpoints
    for (let t = i; t <= tMax; t++) {
      // Calculate the cost of the current partition and recurse
      const cost = g[i][t] + dfs(t + 1, r - 1)

      // Update the best cost if the current cost is lower
      if (cost < best) best = cost
    }

    // Cache the result for the current state
    memo[i][r] = best

    // Return the best cost for the current state
    return best
  }

  // Start the recursive function with the entire string and k partitions
  return dfs(0, k)
}
