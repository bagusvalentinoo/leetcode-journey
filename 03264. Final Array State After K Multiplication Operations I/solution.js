/**
 * Problem: 3264. Final Array State After K Multiplication Operations I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Applies multiplier to the smallest element k times
 *
 * @param {number[]} nums - Input array of integers
 * @param {number} k - Number of operations to perform
 * @param {number} multiplier - Value to multiply with smallest element
 *
 * @returns {number[]} Final array after k operations
 */
const getFinalState = (nums, k, multiplier) => {
  // Perform k operations
  while (k--) {
    // Assume first element is the smallest
    let smallestValue = nums[0]
    let smallestIndex = 0

    // Find the smallest element in the array
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
      // Update smallest if current element is smaller
      if (nums[currentIndex] < smallestValue) {
        smallestValue = nums[currentIndex]
        smallestIndex = currentIndex
      }
    }

    // Multiply the smallest element by multiplier
    nums[smallestIndex] *= multiplier
  }

  // Return the modified array
  return nums
}
