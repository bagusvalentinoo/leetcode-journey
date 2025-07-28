/**
 * Problem: 1081. Smallest Subsequence of Distinct Characters
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the smallest lexicographical subsequence with unique characters
 *
 * @param {string} s - Input string
 *
 * @returns {string} - Unique character subsequence
 */
const smallestSubsequence = (s) => {
  // Initialize an empty stack to store the result characters
  const stk = []

  // Iterate over each character in the input string
  for (let i = 0; i < s.length; i++) {
    const letter = s[i] // Get the current character

    // Skip the character if it's already in the stack (to ensure uniqueness)
    if (stk.includes(letter)) continue

    // Remove characters from the stack if:
    // 1. The top character is lexicographically larger than the current character
    // 2. The top character appears later in the string (so it can be added again)
    while (
      stk[stk.length - 1] > letter &&
      s.substring(i).includes(stk[stk.length - 1])
    )
      stk.pop()

    // Add the current character to the stack
    stk.push(letter)
  }

  // Join the stack into a string and return as the result
  return stk.join('')
}
