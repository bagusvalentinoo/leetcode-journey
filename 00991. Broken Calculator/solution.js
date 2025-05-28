/**
 * Problem: 991. Broken Calculator
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to convert startValue to target
 *
 * @param {number} startValue - Initial calculator value
 * @param {number} target - Target value to reach
 *
 * @returns {number} - Minimum operations required
 */
const brokenCalc = (startValue, target) => {
  // Counter for tracking the number of operations
  let numOperations = 0

  // Work backwards from target to startValue
  while (target > startValue) {
    // If target is even, divide by 2 (reverse of multiply by 2)
    if (target % 2 === 0) target = Math.floor(target / 2)
    // If target is odd, add 1 (reverse of subtract 1)
    else target += 1

    numOperations++
  }

  // Add any remaining difference (for when target < startValue)
  return numOperations + (startValue - target)
}
