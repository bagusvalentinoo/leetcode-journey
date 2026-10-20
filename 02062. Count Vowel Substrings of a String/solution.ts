/**
 * Problem: 2062. Count Vowel Substrings of a String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count vowel-only substrings that contain every vowel
 *
 * @param word - Lowercase string to search
 *
 * @returns Number of qualifying vowel substrings
 */
const countVowelSubstrings = (word: string): number => {
  // Track the most recent position of each vowel
  const lastSeen: Record<string, number> = {
    a: -1,
    e: -1,
    i: -1,
    o: -1,
    u: -1
  }

  // Track the most recent consonant and total qualifying substrings
  let lastConsonant: number = -1
  let count: number = 0

  // Process each character as the end of a potential vowel substring
  for (let i: number = 0; i < word.length; i++) {
    // Read the current character
    const char: string = word[i]

    // Update the position of a vowel or reset the vowel-only boundary
    if (char in lastSeen) {
      lastSeen[char] = i

      // Find the earliest latest-occurring vowel
      const earliestVowel: number = Math.min(
        lastSeen.a,
        lastSeen.e,
        lastSeen.i,
        lastSeen.o,
        lastSeen.u
      )

      // Count valid starts after the most recent consonant
      if (earliestVowel > lastConsonant) count += earliestVowel - lastConsonant
    }
    // Update the last consonant position if the character is not a vowel
    else lastConsonant = i
  }

  // Return the total number of qualifying vowel substrings
  return count
}
