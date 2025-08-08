/**
 * Problem: 1124. Longest Well-Performing Interval
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Returns the length of the longest well-performing interval
 *
 * @param {number[]} hours - Hours worked per day
 *
 * @returns {number} - Longest interval length
 */
const longestWPI = (hours) => {
  // Initialize the prefix sum to track the net number of tiring days
  let prefixSum = 0,
    // Initialize the maximum length of well-performing interval found so far
    maxIntervalLength = 0

  // Map to store the earliest index for each prefix sum value
  const prefixSumIndexMap = new Map()

  // Set the initial prefix sum (0) at index -1 to handle intervals starting from index 0
  prefixSumIndexMap.set(0, -1)

  // Iterate through each day's hours
  for (let dayIndex = 0; dayIndex < hours.length; dayIndex++) {
    // If hours worked > 8, increment prefix sum by 1, else decrement by 1
    prefixSum += hours[dayIndex] > 8 ? 1 : -1

    // If prefix sum is positive, the interval from 0 to current day is well-performing
    if (prefixSum > 0) maxIntervalLength = dayIndex + 1
    else {
      // If (prefixSum - 1) exists in the map, update maxIntervalLength if this interval is longer
      if (prefixSumIndexMap.has(prefixSum - 1))
        maxIntervalLength = Math.max(
          maxIntervalLength,
          dayIndex - prefixSumIndexMap.get(prefixSum - 1)
        )
    }

    // Store the earliest index for each prefix sum value
    if (!prefixSumIndexMap.has(prefixSum))
      prefixSumIndexMap.set(prefixSum, dayIndex)
  }

  // Return the length of the longest well-performing interval
  return maxIntervalLength
}
