/**
 * Problem: 2264. Largest 3-Same-Digit Number in String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the largest substring of three identical digits in a string
 *
 * @param {string} num - Input string of digits
 *
 * @returns {string} - Largest good integer found, or empty string
 */
const largestGoodInteger = (num) => {
  // Initialize variable to keep track of the largest good integer found
  let largestGoodInteger = ''

  // Loop through the string starting from the third character
  for (let i = 2; i < num.length; i++) {
    // Check if the current digit and the previous two digits are the same
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      // Create a substring of three identical digits
      const currentGoodInteger = num[i].repeat(3)

      // Update the largest good integer if the current one is greater
      if (currentGoodInteger > largestGoodInteger)
        largestGoodInteger = currentGoodInteger
    }
  }

  // Return the largest good integer found, or an empty string if none found
  return largestGoodInteger
}
