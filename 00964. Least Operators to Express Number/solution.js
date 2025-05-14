/**
 * Problem: 964. Least Operators to Express Number
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operators needed to express target using only x
 *
 * @param {number} x - Base number
 * @param {number} target - Target value
 *
 * @returns {number} - Minimum operators required
 */
const leastOpsExpressTarget = (x, target) => {
  // Use dynamic programming approach with pos/neg costs
  let pos = 0,
    neg = 0,
    k = 0,
    posPrev,
    negPrev

  // Process target digit by digit in base x
  while (target > 0) {
    // Extract current digit in base x
    const cur = target % x
    target = Math.floor(target / x)

    if (k > 0) {
      // Calculate min cost to express current digit positively or negatively
      const pos2 = Math.min(cur * k + pos, (cur + 1) * k + neg)
      const neg2 = Math.min((x - cur) * k + pos, (x - cur - 1) * k + neg)

      // Update costs for this position
      ;(pos = pos2), (neg = neg2)
    } else {
      // Special case for least significant digit
      ;(pos = cur * 2), (neg = (x - cur) * 2)
    }

    // Store previous values for final calculation
    ;(posPrev = pos), (negPrev = neg)
    k++
  }

  // Return minimum operations (subtract 1 to account for initial operation)
  return Math.min(posPrev, k + negPrev) - 1
}
