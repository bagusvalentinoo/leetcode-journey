/**
 * Problem: 2294. Partition Array Such That Maximum Difference Is K
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 98 ms (Beats 100%)
 */

/**
 * Partitions array into minimum subsequences with max difference <= k
 *
 * @param {number[]} nums - Array to partition
 * @param {number} k - Max difference allowed
 *
 * @returns {number} - Minimum number of subsequences
 */
const partitionArray = (nums, k) => {
  // Sort array in ascending order to group similar values
  nums.sort((a, b) => a - b)

  // Initialize subsequence count and track minimum value of current subsequence
  let subsequenceCount = 1
  let currentMin = nums[0]

  // Iterate through sorted array to find partition points
  for (let i = 1; i < nums.length; i++) {
    // Start new subsequence if difference exceeds k
    if (nums[i] - currentMin > k) {
      currentMin = nums[i]
      subsequenceCount++
    }
  }

  return subsequenceCount
}
