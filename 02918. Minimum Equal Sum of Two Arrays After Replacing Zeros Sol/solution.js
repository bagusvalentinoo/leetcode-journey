/**
 * Problem: 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 56 ms (Beats 100%)
 */

/**
 * Finds minimum equal sum by replacing zeros with positive integers.
 *
 * @param {number[]} nums1 - First array of non-negative integers
 * @param {number[]} nums2 - Second array of non-negative integers
 *
 * @returns {number} - Minimum possible equal sum or -1 if impossible
 */
const minSum = (nums1, nums2) => {
  // Helper function to calculate the sum of non-zero elements and count of zeros in an array
  const computeStats = (arr) => {
    let sum = 0,
      zeros = 0

    for (const num of arr)
      if (num === 0) zeros++
      else sum += num

    return { sum, zeros }
  }

  // Calculate statistics for both arrays
  const { sum: sum1, zeros: zeros1 } = computeStats(nums1)
  const { sum: sum2, zeros: zeros2 } = computeStats(nums2)

  // Minimum possible sum for each array (replacing zeros with 1s)
  const minSum1 = sum1 + zeros1,
    minSum2 = sum2 + zeros2

  // Case 1: No zeros in either array - sums must already be equal
  if (zeros1 === 0 && zeros2 === 0) return sum1 === sum2 ? sum1 : -1
  // Case 2: No zeros in first array - its sum must be >= minimum possible sum of second array
  if (zeros1 === 0) return sum1 >= minSum2 ? sum1 : -1
  // Case 3: No zeros in second array - its sum must be >= minimum possible sum of first array
  if (zeros2 === 0) return sum2 >= minSum1 ? sum2 : -1

  // Case 4: Both arrays have zeros - return the larger of the two minimum possible sums
  return Math.max(minSum1, minSum2)
}
