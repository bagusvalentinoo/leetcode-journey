/**
 * Problem: 1544. Make The String Great
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes adjacent same-letter opposite-case pairs from a string
 *
 * @param {string} s - Input string of lower and upper case English letters
 *
 * @returns {string} The string after all adjacent bad pairs are removed
 */
const makeGood = (s) => {
  // Initialize an empty array to use as a stack
  const stack = []

  // Iterate through each character in the input string
  for (const character of s) {
    // Get the last character on the stack
    const top = stack[stack.length - 1]

    // Same letter in opposite case differs by 32 in ASCII code
    // (e.g., 'a' = 97 and 'A' = 65, 'z' = 122 and 'Z' = 90)
    if (top && Math.abs(character.charCodeAt(0) - top.charCodeAt(0)) === 32)
      // Bad pair found, remove the top character
      stack.pop()
    else
      // No conflict, push the current character onto the stack
      stack.push(character)
  }

  // Join the remaining characters back into a string
  return stack.join('')
}
