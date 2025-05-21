/**
 * Problem: 977. Squares of a Sorted Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Squares each element in the array, then returns them sorted in non-decreasing order
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} - Sorted array of squares
 */
const sortedSquares = (nums) => {
  // Get the length of the input array
  const { length } = nums
  // Initialize left pointer at the beginning
  let left = 0
  // Initialize right pointer at the end
  let right = length - 1
  // Initialize result array index (starting from end)
  let resultIndex = length - 1
  // Create new array to store results
  const result = new Array(length)

  while (left <= right) {
    // Calculate square of left and right values
    const leftSquare = nums[left] * nums[left],
      rightSquare = nums[right] * nums[right]

    if (leftSquare < rightSquare) {
      // Place larger value (right) at current result position
      result[resultIndex--] = rightSquare
      right--
    } else {
      // Place larger value (left) at current result position
      result[resultIndex--] = leftSquare
      left++
    }
  }

  return result
}
