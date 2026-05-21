/**
 * Problem: 3289. The Two Sneaky Numbers of Digitville
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds two duplicates using XOR
 *
 * @param {number[]} nums - Array with two duplicates
 *
 * @returns {number[]} The two duplicate numbers
 */
const getSneakyNumbers = (nums) => {
  // Object to track seen numbers
  const seenNumbers = {},
    duplicateResult = []

  // Iterate through each number in the array
  for (let index = 0; index < nums.length; index++) {
    // Check if number already exists in seen object
    if (seenNumbers.hasOwnProperty(nums[index])) {
      // Add to result array
      if ((duplicateResult.push(nums[index]), 2 === duplicateResult.length))
        break
    }
    // Mark number as seen
    else seenNumbers[nums[index]] = 1
  }

  // Return the two duplicate numbers
  return duplicateResult
}
