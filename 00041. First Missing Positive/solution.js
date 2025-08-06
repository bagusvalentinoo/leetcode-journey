/**
 * Problem: 41. First Missing Positive
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the smallest missing positive integer in the array
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} - Smallest missing positive integer
 */
const firstMissingPositive = (nums) => {
  // Get the length of the input array
  const arrayLength = nums.length

  // Place each number in its correct position if possible
  for (let index = 0; index < arrayLength; index++) {
    // Continue swapping until the current number is in the correct position,
    // or it is out of the valid range, or a duplicate is found
    while (
      nums[index] > 0 && // Only consider positive numbers
      nums[index] <= arrayLength && // Only consider numbers within the array length
      nums[nums[index] - 1] !== nums[index] // Avoid infinite loop for duplicates
    ) {
      // Temporarily store the value at the target position
      const tempValue = nums[nums[index] - 1]

      // Swap the current number to its correct position
      nums[nums[index] - 1] = nums[index]
      nums[index] = tempValue
    }
  }

  // After rearrangement, find the first index where the value is incorrect
  for (let index = 0; index < arrayLength; index++) {
    // If the value at the current index is not equal to index + 1,
    // then index + 1 is the smallest missing positive integer
    if (nums[index] !== index + 1) return index + 1
  }

  // If all positions are correct, the missing integer is arrayLength + 1
  return arrayLength + 1
}
