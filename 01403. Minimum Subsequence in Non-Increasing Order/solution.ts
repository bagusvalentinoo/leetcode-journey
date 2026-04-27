/**
 * Problem: 1403. Minimum Subsequence in Non-Increasing Order
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Smallest subsequence with sum greater than remaining
 *
 * @param nums - Input array
 *
 * @returns Subsequence meeting condition
 */
const minSubsequence = (nums: number[]): number[] => {
  // Sort array in descending order to pick largest elements first
  nums.sort((a, b) => b - a)

  // Calculate total sum of all elements in the array
  const totalSum: number = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  // Track sum of the current subsequence
  let subsequenceSum: number = 0

  // Array to store the resulting subsequence
  const result: number[] = []

  // Iterate through sorted array from largest to smallest
  for (let i: number = 0; i < nums.length; i++) {
    // Add current element to subsequence sum
    subsequenceSum += nums[i]

    // Add current element to result array
    result.push(nums[i])

    // If subsequence sum exceeds remaining sum, return result
    if (subsequenceSum > totalSum - subsequenceSum) return result
  }

  // Return the result (should not reach here under normal conditions)
  return result
}
