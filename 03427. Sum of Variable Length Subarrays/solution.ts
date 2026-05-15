/**
 * Problem: 3427. Sum of Variable Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates sum of all subarray elements within a dynamic range
 *
 * @param nums - Input array of integers
 *
 * @returns Total sum of selected elements
 */
const subarraySum = (nums: number[]): number => {
  // Initialize total sum accumulator
  let totalSum: number = 0

  // Length of the input array
  const arrayLength: number = nums.length

  // Iterate through each element as the end index of subarray
  for (let endIndex: number = 0; endIndex < arrayLength; endIndex++) {
    // Calculate start index, ensuring it's not negative
    const startIndex: number = Math.max(0, endIndex - nums[endIndex])

    // Add all elements from startIndex to endIndex to total sum
    for (
      let currentIndex: number = startIndex;
      currentIndex <= endIndex;
      currentIndex++
    )
      totalSum += nums[currentIndex]
  }

  // Return the final total sum
  return totalSum
}
