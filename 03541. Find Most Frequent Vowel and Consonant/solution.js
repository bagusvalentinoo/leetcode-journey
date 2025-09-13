/**
 * Problem: 3541. Find Most Frequent Vowel and Consonant
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns sum of highest vowel and consonant frequencies in a string
 *
 * @param {string} s - Input string
 *
 * @returns {number} - Sum of max vowel and consonant frequencies
 */
const maxFreqSum = (s) => {
  // Map to store frequency of each vowel character
  const vowelFrequency = new Map(),
    // Map to store frequency of each consonant character
    consonantFrequency = new Map()

  // Variable to track the highest frequency among vowels
  let maxVowelFreq = 0,
    // Variable to track the highest frequency among consonants
    maxConsonantFreq = 0

  // Iterate through each character in the input string
  for (const char of s) {
    // Check if the character is a vowel
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      // Get current count for this vowel, increment by 1
      const currentVowelCount = (vowelFrequency.get(char) || 0) + 1

      // Update the vowel frequency map
      vowelFrequency.set(char, currentVowelCount)

      // Update max vowel frequency if current is higher
      if (currentVowelCount > maxVowelFreq) maxVowelFreq = currentVowelCount
    } else {
      // Get current count for this consonant, increment by 1
      const currentConsonantCount = (consonantFrequency.get(char) || 0) + 1

      // Update the consonant frequency map
      consonantFrequency.set(char, currentConsonantCount)

      // Update max consonant frequency if current is higher
      if (currentConsonantCount > maxConsonantFreq)
        maxConsonantFreq = currentConsonantCount
    }
  }

  // Return the sum of the highest vowel and consonant frequencies
  return maxVowelFreq + maxConsonantFreq
}
