/**
 * Problem: 3068. Find the Maximum Sum of Node Values
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Calculates maximum sum of values after optional XOR operations
 *
 * @param {number[]} nums - Node values
 * @param {number} k - XOR value
 * @param {number[][]} edges - Tree edges
 *
 * @returns {number} - Maximum possible sum
 */
const maximumValueSum = (nums, k, edges) => {
  // Track total sum of values and number of XOR operations applied
  let totalSum = 0,
    xorOperationCount = 0

  // Track minimum positive gain and maximum negative impact from XOR operations
  let minPositiveGain = Infinity,
    maxNegativeLoss = -Infinity

  for (const nodeValue of nums) {
    // Calculate value after applying XOR with k
    const valueAfterXor = nodeValue ^ k

    // Add original value to total sum
    totalSum += nodeValue

    // Calculate net change from XOR operation
    const netChange = valueAfterXor - nodeValue

    if (netChange > 0) {
      // Track smallest positive gain
      minPositiveGain = Math.min(minPositiveGain, netChange)
      totalSum += netChange
      xorOperationCount += 1
    } else {
      // Track largest negative impact
      maxNegativeLoss = Math.max(maxNegativeLoss, netChange)
    }
  }

  // Return total sum if even number of XOR operations (balanced)
  if (xorOperationCount % 2 === 0) return totalSum

  // For odd count, remove smallest gain or add largest loss to balance operations
  return Math.max(totalSum - minPositiveGain, totalSum + maxNegativeLoss)
}
