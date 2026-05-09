/**
 * Problem: 3471. Find the Largest Almost Missing Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Largest integer appearing exactly once in all k-length subarrays
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Subarray length
 *
 * @returns {number} Largest unique number or -1
 */
const largestInteger = (nums, k) => {
  // Length of the input array
  const arrayLength = nums.length

  // If k equals array length, return maximum element
  if (k === arrayLength) return Math.max(...nums)

  // Frequency map for all numbers in the array
  const frequencyMap = {}

  // Count occurrences of each number in the entire array
  for (const currentNum of nums)
    frequencyMap[currentNum] = (frequencyMap[currentNum] ?? 0) + 1

  // Special case: k equals 1 (each subarray is a single element)
  if (k === 1) {
    // Variable to store maximum value with frequency 1
    let maxUniqueValue = -1

    // Iterate through all numbers in frequency map
    for (const numStr in frequencyMap) {
      // If number appears exactly once, update max
      if (frequencyMap[numStr] === 1)
        maxUniqueValue = Math.max(maxUniqueValue, parseInt(numStr))
    }

    // Return largest unique number or -1 if none found
    return maxUniqueValue
  }

  // For k > 1, only first and last elements can be candidates
  let maxResult = -1

  // Check if first element appears exactly once in the array
  if (frequencyMap[nums[0]] === 1) maxResult = Math.max(maxResult, nums[0])
  // Check if last element appears exactly once in the array
  if (frequencyMap[nums[arrayLength - 1]] === 1)
    maxResult = Math.max(maxResult, nums[arrayLength - 1])

  // Return largest unique number or -1 if none found
  return maxResult
}
