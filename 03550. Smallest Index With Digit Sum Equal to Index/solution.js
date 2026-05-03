/**
 * Problem: 3550. Smallest Index With Digit Sum Equal to Index
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds smallest index where index equals digit sum of the element
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Smallest valid index or -1 if not found
 */
const smallestIndex = (nums) => {
  // Helper function to calculate sum of digits
  const digitSum = (number) => {
    // Initialize sum accumulator
    let sumOfDigits = 0

    // Process each digit until number becomes 0
    while (number > 0) {
      // Add last digit to sum
      sumOfDigits += number % 10
      // Remove last digit
      number = Math.floor(number / 10)
    }

    return sumOfDigits
  }

  // Iterate through the array to find matching index
  for (let index = 0; index < nums.length; index++) {
    // Check if current index equals digit sum of the element
    if (index === digitSum(nums[index])) return index
  }

  // No matching index found
  return -1
}
