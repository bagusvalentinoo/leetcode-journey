/**
 * Problem: 1221. Split a String in Balanced Strings
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the maximum number of balanced substrings in a string
 *
 * @param {string} s - String of 'L' and 'R'
 *
 * @returns {number} - Count of balanced substrings
 */
const balancedStringSplit = (s) => {
  // Initialize a counter to track the balance between 'L' and 'R'
  let balanceCounter = 0,
    // Initialize the result to count the number of balanced substrings
    balancedSubstringCount = 0

  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    // Increment balanceCounter for 'R', decrement for 'L'
    balanceCounter += s[i] === 'R' ? 1 : -1

    // If balanceCounter is zero, a balanced substring is found
    if (balanceCounter === 0) balancedSubstringCount++
  }

  // Return the total count of balanced substrings
  return balancedSubstringCount
}
