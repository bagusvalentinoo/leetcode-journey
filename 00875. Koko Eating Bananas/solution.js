/**
 * Problem: 875. Koko Eating Bananas
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.95%)
 */

/**
 * Checks if the sum of quotients of piles is greater than the limit
 *
 * @param {number[]} piles - Array of banana pile sizes
 * @param {number} divisor - Divisor to calculate quotients
 * @param {number} limit - Limit to compare against
 *
 * @returns {boolean} - True if sum of quotients is greater than limit, false otherwise
 */
const isSumOfQuotientsGreaterThanLimit = (piles, divisor, limit) => {
  // Initialize sum of quotients
  let sum = 0

  // Iterate through piles and calculate sum of quotients
  for (const pile of piles) {
    sum += Math.ceil(pile / divisor)

    // If sum exceeds limit, return true
    if (sum > limit) return true
  }

  // If sum is within limit, return false
  return false
}

/**
 * Finds minimum eating speed k to eat all bananas within h hours
 *
 * @param {number[]} piles - Array of banana pile sizes
 * @param {number} h - Maximum hours to eat all bananas
 *
 * @returns {number} - Minimum eating speed in bananas/hour
 */
const minEatingSpeed = (piles, h) => {
  // Initialize binary search bounds
  let left = 1,
    right = Infinity,
    ans = null,
    prevLeft = null

  // Perform binary search
  while (left <= right) {
    // Calculate the middle point
    const divisor = right === Infinity ? left : Math.floor((left + right) / 2)

    // Check if sum of quotients is greater than limit
    const sumOfQuotientsGreaterThanLimit = isSumOfQuotientsGreaterThanLimit(
      piles,
      divisor,
      h
    )

    // If sum of quotients is greater than limit, increase divisor
    if (sumOfQuotientsGreaterThanLimit) {
      prevLeft = left
      left = right === Infinity ? left * 2 : divisor + 1
    } else {
      // If sum of quotients is within limit, decrease divisor
      ans = divisor
      right = ans - 1
      left = prevLeft + 1
    }
  }

  // Return the minimum eating speed
  return ans
}
