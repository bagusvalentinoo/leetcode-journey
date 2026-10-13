/**
 * Problem: 1704. Determine if String Halves Are Alike
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two string halves contain equal vowel counts
 *
 * @param s - Even-length string to split into halves
 *
 * @returns True if halves are alike
 */
const halvesAreAlike = (s: string): boolean => {
  // Define vowel set for O(1) lookup including uppercase variants
  const vowels: Set<string> = new Set([
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U'
  ])

  // Calculate half length as split point between halves
  const half: number = s.length / 2

  // Track vowel count difference between first and second half
  let vowelDifference: number = 0

  // Compare vowels at mirrored positions in both halves
  for (let i: number = 0; i < half; i++) {
    // Increment difference when first-half character is a vowel
    if (vowels.has(s[i])) vowelDifference++
    // Decrement difference when second-half character is a vowel
    if (vowels.has(s[half + i])) vowelDifference--
  }

  // Return true when vowel counts balance to zero
  return vowelDifference === 0
}
