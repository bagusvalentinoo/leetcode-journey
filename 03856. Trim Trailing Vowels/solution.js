/**
 * Problem: 3856. Trim Trailing Vowels
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes trailing vowels from a string
 *
 * @param {string} s - Input string
 *
 * @returns {string} String with trailing vowels removed
 */
const trimTrailingVowels = (s) => {
  // Array of vowels for lookup
  const vowels = ['a', 'e', 'i', 'o', 'u']

  // Convert string to array for easy manipulation
  const characters = s.split('')

  // Remove trailing vowels from the end
  while (characters.length >= 0) {
    // Check if last character is a vowel
    if (vowels.includes(characters[characters.length - 1])) characters.pop()
    // Stop when non-vowel is found
    else break
  }

  // Join array back to string and return
  return characters.join('')
}
