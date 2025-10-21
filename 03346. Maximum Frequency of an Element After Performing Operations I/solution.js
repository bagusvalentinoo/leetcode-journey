/**
 * Problem: 3346. Maximum Frequency of an Element After Performing Operations I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 28 ms (Beats 100%)
 */

/**
 * Calculate max frequency in an array after operations
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Range modifier
 * @param {number} numOperations - Max operations
 *
 * @returns {number} - Max achievable frequency
 */
const maxFrequency = (nums, k, numOperations) => {
  // Calculate the maximum possible value in the array after operations
  const maxVal = Math.max(...nums) + k + 2

  // Initialize a frequency array to count occurrences of each number
  const count = new Array(maxVal).fill(0)

  // Populate the frequency array with counts of each number in the input array
  for (const v of nums) count[v]++

  // Convert the frequency array into a prefix sum array for range queries
  for (let i = 1; i < maxVal; i++) count[i] += count[i - 1]

  // Initialize the result variable to store the maximum frequency
  let res = 0

  // Iterate through all possible values to calculate the maximum frequency
  for (let i = 0; i < maxVal; i++) {
    // Define the left and right boundaries of the range based on the modifier k
    const left = Math.max(0, i - k),
      right = Math.min(maxVal - 1, i + k)

    // Calculate the total count of numbers within the range [left, right]
    const total = count[right] - (left ? count[left - 1] : 0)

    // Calculate the frequency of the current number
    const freq = count[i] - (i ? count[i - 1] : 0)

    // Update the result with the maximum achievable frequency
    res = Math.max(res, freq + Math.min(numOperations, total - freq))
  }

  // Return the maximum frequency as the result
  return res
}
