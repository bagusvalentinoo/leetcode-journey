/**
 * Problem: 2341. Maximum Number of Pairs in Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count equal-number pairs and remaining values
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} Number of pairs and leftover integers
 */
const numberOfPairs = (nums) => {
  // Track values waiting to be matched with an equal value
  const unmatched = new Set()

  // Count each completed pair
  let pairs = 0

  // Match each number with an earlier unmatched equal number when possible
  for (const number of nums) {
    if (unmatched.has(number)) {
      unmatched.delete(number)
      pairs++
    } else unmatched.add(number)
  }

  // Return the completed pairs and remaining unmatched integers
  return [pairs, unmatched.size]
}
