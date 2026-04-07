/**
 * Problem: 1328. Break a Palindrome
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Breaks a palindrome by changing one character
 *
 * @param {string} palindrome - Input palindrome
 *
 * @returns {string} Smallest non-palindromic string
 */
const breakPalindrome = (palindrome) => {
  // Single character palindrome cannot be broken
  if (palindrome.length === 1) return ''

  // Convert string to array for manipulation
  const characters = palindrome.split('')

  // Check first half of palindrome (only need to check up to middle)
  for (let i = 0; i <= Math.floor(characters.length / 2) - 1; i++) {
    // If character is not 'a', change it to 'a' for smallest result
    if (characters[i] !== 'a') {
      // Change character to 'a'
      characters[i] = 'a'

      // Return modified string
      return characters.join('')
    }
  }

  // All characters in first half are 'a', change last character to 'b'
  characters[characters.length - 1] = 'b'

  // Return the modified string
  return characters.join('')
}
