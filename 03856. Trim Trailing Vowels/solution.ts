/**
 * Problem: 3856. Trim Trailing Vowels
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes trailing vowels from a string
 *
 * @param s - Input string
 *
 * @returns String with trailing vowels removed
 */
const trimTrailingVowels = (s: string): string => {
  // Array of vowels for lookup
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u']

  // Convert string to array for easy manipulation
  const characters: string[] = s.split('')

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
