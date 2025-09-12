/**
 * Problem: 2785. Sort Vowels in a String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 15 ms (Beats 100%)
 */

/**
 * Sorts vowels in a s in lexicographical order
 *
 * @param {s} s - Input s
 *
 * @returns {s} - s with sorted vowels
 */
const sortVowels = (s) => {
  // Define a string containing all vowels in lexicographical order
  const VOWELS = 'AEIOUaeiou'

  // Initialize an array to count occurrences of each vowel
  const vowelCounts = new Array(VOWELS.length).fill(0)

  // Store the length of the input string for iteration
  const strLength = s.length

  // First pass: Count each vowel's occurrence in the input string
  for (let i = 0; i < strLength; i++) {
    // Find the index of the current character in the VOWELS string
    const vowelIdx = VOWELS.indexOf(s[i])

    // If the character is a vowel, increment its count
    if (vowelIdx > -1) vowelCounts[vowelIdx]++
  }

  // Initialize the result string to build the output
  let result = ''

  // Initialize a pointer to track the current vowel to use from VOWELS
  let currentVowelIdx = 0

  // Second pass: Construct the result string with sorted vowels
  for (let i = 0; i < strLength; i++) {
    // If the current character is a vowel
    if (VOWELS.includes(s[i])) {
      // Find the next vowel in VOWELS with a non-zero count
      while (vowelCounts[currentVowelIdx] === 0) currentVowelIdx++

      // Append the sorted vowel to the result string
      result += VOWELS[currentVowelIdx]

      // Decrement the count for this vowel
      vowelCounts[currentVowelIdx]--
    } else {
      // If not a vowel, append the original character
      result += s[i]
    }
  }

  // Return the final string with sorted vowels
  return result
}
