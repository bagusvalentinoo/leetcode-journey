/**
 * Problem: 3833. Count Dominant Indices
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts indices where first element dominates sum of remaining
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Number of dominant indices
 */
const dominantIndices = (nums) => {
  // Get length of the array
  const n = nums.length

  // Counter for dominant indices found
  let count = 0

  // Calculate total sum of all elements in the array
  let totalSum = 0

  // Sum all elements in the array
  for (let i = 0; i < n; i++) totalSum += nums[i]

  // Initialize suffix sum as total sum (will subtract elements as we go)
  let suffixSum = totalSum

  // Iterate through each element except the last one
  for (let i = 0; i < n - 1; i++) {
    // Remove current element from suffix sum (elements to the right)
    suffixSum -= nums[i]

    // Calculate number of elements to the right of current index
    const suffixLength = n - i - 1

    // Check if current element multiplied by suffix length is greater than suffix sum
    // This is equivalent to nums[i] > suffixSum / suffixLength
    if (nums[i] * suffixLength > suffixSum) count++
  }

  // Return the count of dominant indices
  return count
}
