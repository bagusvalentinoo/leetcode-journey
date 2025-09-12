/**
 * Problem: 3227. Vowels Game in a String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Returns true if the string has a vowel
 *
 * @param {string} s - Input string
 *
 * @returns {boolean} - True if the string has a vowel, false otherwise
 */
const doesAliceWin = (s) => {
  // Loop through each character in the input string 's'
  for (let i = 0; i < s.length; i++) {
    // Check if the current character is a vowel ('a', 'e', 'i', 'o', or 'u')
    if (
      s[i] === 'a' ||
      s[i] === 'e' ||
      s[i] === 'i' ||
      s[i] === 'o' ||
      s[i] === 'u'
    )
      // If a vowel is found, return true immediately
      return true
  }

  // If no vowels are found after checking all characters, return false
  return false
}
