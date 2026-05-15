/**
 * Problem: 3427. Sum of Variable Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates sum of all subarray elements within a dynamic range
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Total sum of selected elements
 */
const subarraySum = (nums) => {
  // Initialize total sum accumulator
  let totalSum = 0

  // Length of the input array
  const arrayLength = nums.length

  // Iterate through each element as the end index of subarray
  for (let endIndex = 0; endIndex < arrayLength; endIndex++) {
    // Calculate start index, ensuring it's not negative
    const startIndex = Math.max(0, endIndex - nums[endIndex])

    // Add all elements from startIndex to endIndex to total sum
    for (
      let currentIndex = startIndex;
      currentIndex <= endIndex;
      currentIndex++
    )
      totalSum += nums[currentIndex]
  }

  // Return the final total sum
  return totalSum
}
