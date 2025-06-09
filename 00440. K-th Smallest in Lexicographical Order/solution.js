/**
 * Problem: 440. K-th Smallest in Lexicographical Order
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the k-th lexicographically smallest number in range [1,n]
 *
 * @param {number} n - Upper bound of the range
 * @param {number} k - Position of the number to find
 *
 * @returns {number} - The k-th lexicographically smallest number
 */
const findKthNumber = (n, k) => {
  // Start with the first lexicographically smallest number
  let current = 1
  // Decrement k since we're starting at the first number
  k--

  while (k > 0) {
    // Count numbers in current prefix's subtree
    let nodesInSubtree = 0
    // Define the range boundaries for current prefix
    let rangeStart = current,
      rangeEnd = current + 1

    // Calculate how many numbers in range [1,n] start with current prefix
    while (rangeStart <= n) {
      nodesInSubtree += Math.min(n + 1, rangeEnd) - rangeStart
      rangeStart *= 10
      rangeEnd *= 10
    }

    // If k is beyond current subtree, move to next prefix
    if (k >= nodesInSubtree) {
      current++
      k -= nodesInSubtree
    } else {
      // Move down to first child of current node
      current *= 10
      k--
    }
  }

  return current
}
