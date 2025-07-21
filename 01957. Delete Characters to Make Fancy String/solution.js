/**
 * Problem: 1957. Delete Characters to Make Fancy String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 40 ms (Beats 100%)
 */

/**
 * Removes characters when there are 3+ consecutive identical ones
 *
 * @param {string} s - The input string
 *
 * @returns {string} - String with max 2 consecutive identical characters
 */
const makeFancyString = (s) => {
  // Initialize previous two characters as placeholders that won't match any actual character
  let l1 = '.', // Last character processed
    l2 = '.' // Second to last character processed

  // Initialize result string to build the fancy string
  let ans = ''

  // Get the length of input string for loop boundary
  const n = s.length
  // Initialize index counter for while loop
  let i = 0

  // Iterate through each character in the input string
  while (i < n) {
    // Get current character at index i
    const temp = s[i]

    // Check if current character is same as both previous characters (3 consecutive identical)
    if (temp === l1 && temp === l2) {
      // Skip this character to avoid 3+ consecutive identical characters
      i += 1

      continue
    } else {
      // Add current character to result since it doesn't create 3+ consecutive
      ans += temp
      // Update tracking variables: shift l1 to l2, and current char to l1
      l2 = l1 // Move last char to second-to-last position
      l1 = temp // Update last char to current character
    }

    // Move to next character
    i += 1
  }

  // Return the fancy string with no more than 2 consecutive identical characters
  return ans
}
