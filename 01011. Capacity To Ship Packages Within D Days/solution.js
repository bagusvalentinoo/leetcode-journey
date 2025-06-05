/**
 * Problem: 1011. Capacity To Ship Packages Within D Days
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Checks if packages can be shipped within given days using specified capacity
 *
 * @param {number[]} weights - Package weights
 * @param {number} weight - Ship capacity to test
 * @param {number} days - Days limit
 *
 * @returns {boolean} - True if deliverable within days limit
 */
const isEnoughWeight = (weights, weight, days) => {
  // Track days used so far
  let daysUsed = 0,
    currentDayWeight = 0

  for (let i = 0; i < weights.length; i++) {
    currentDayWeight += weights[i]

    if (currentDayWeight === weight) {
      // Current day filled exactly to capacity
      daysUsed += 1
      currentDayWeight = 0
    } else if (currentDayWeight > weight) {
      // Current day exceeds capacity, start new day with current package
      daysUsed += 1
      currentDayWeight = weights[i]
    }

    // Early exit if we've already exceeded allowed days
    if (daysUsed > days) return false
  }

  // Add final day if there are remaining packages
  if (currentDayWeight !== 0) daysUsed += 1

  // Return true if we can ship within the given days
  return daysUsed <= days
}

/**
 * Find the minimum ship capacity needed to deliver all packages within the given days
 *
 * @param {number[]} weights - Package weights
 * @param {number} days - Maximum shipping days
 *
 * @returns {number} - Minimum capacity required
 */
const shipWithinDays = (weights, days) => {
  // Calculate total weight and find heaviest package
  let totalWeight = 0,
    heaviestPackage = 0

  for (let i = 0; i < weights.length; i++) {
    heaviestPackage = Math.max(heaviestPackage, weights[i])
    totalWeight += weights[i]
  }

  // Initialize result and binary search boundaries
  let minCapacity = totalWeight
  let low = heaviestPackage
  let high = totalWeight

  // Binary search to find minimum capacity
  while (low <= high) {
    // Calculate middle capacity to test
    const midCapacity = low + Math.floor((high - low) / 2)

    // Check if this capacity can deliver packages within days limit
    if (isEnoughWeight(weights, midCapacity, days)) {
      minCapacity = Math.min(minCapacity, midCapacity)
      high = midCapacity - 1
    } else {
      low = midCapacity + 1
    }
  }

  return minCapacity
}
