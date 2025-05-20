/**
 * Problem: 3355. Zero Array Transformation I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

/**
 * Determines if all array elements can be reduced to zero using the given queries
 *
 * @param {number[]} nums - Input array
 * @param {number[][]} queries - Operations to apply
 *
 * @returns {boolean} - Whether all elements can be zeroed
 */
const isZeroArray = (nums, queries) => {
  // Create array to track difference in coverage
  const coverageDiffs = new Array(nums.length + 1).fill(0)

  // Process each query to update coverage differences
  for (let i = 0; i < queries.length; i++) {
    const startIdx = queries[i][0]
    const endIdx = queries[i][1]

    coverageDiffs[startIdx] += 1
    coverageDiffs[endIdx + 1] -= 1
  }

  // Track current accumulated coverage
  let currentCoverage = 0

  // Check if every element in nums has sufficient coverage
  for (let i = 0; i < coverageDiffs.length; i++) {
    currentCoverage += coverageDiffs[i]

    if (nums[i] > currentCoverage) return false
  }

  return true
}
