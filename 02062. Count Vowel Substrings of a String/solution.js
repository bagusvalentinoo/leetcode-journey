/**
 * Problem: 2062. Count Vowel Substrings of a String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count vowel-only substrings containing all five vowels
 *
 * @param {string} word - Lowercase string to search
 *
 * @returns {number} Number of qualifying vowel substrings
 */
const countVowelSubstrings = (word) => {
  // Store the word length for loop bounds
  const wordLength = word.length
  // Store each vowel's frequency in the current vowel-only segment
  const vowelCounts = new Int32Array(5)
  // Track qualifying substrings and the current window boundaries
  let vowelSubstringCount = 0,
    vowelSegmentStart = 0,
    leftPointer = 0,
    distinctVowelCount = 0

  // Process each character as the right boundary of the current window
  for (let i = 0; i < wordLength; i++) {
    // Read the character code at the current right boundary
    const characterCode = word.charCodeAt(i)

    // Store the frequency-array index for the current vowel
    let vowelIndex

    // Map the vowel 'a' to index 0
    if (characterCode === 97) vowelIndex = 0
    // Map the vowel 'e' to index 1
    else if (characterCode === 101) vowelIndex = 1
    // Map the vowel 'i' to index 2
    else if (characterCode === 105) vowelIndex = 2
    // Map the vowel 'o' to index 3
    else if (characterCode === 111) vowelIndex = 3
    // Map the vowel 'u' to index 4
    else if (characterCode === 117) vowelIndex = 4
    // Reset the current vowel-only segment after a consonant
    else {
      // Clear the frequency of every vowel in the previous segment
      vowelCounts[0] =
        vowelCounts[1] =
        vowelCounts[2] =
        vowelCounts[3] =
        vowelCounts[4] =
          0

      // Reset the number of distinct vowels in the current segment
      distinctVowelCount = 0
      // Start the next vowel-only segment after the consonant
      vowelSegmentStart = leftPointer = i + 1

      // Skip counting because no vowel-only substring ends here
      continue
    }

    // Record the current vowel and track newly represented vowels
    if (vowelCounts[vowelIndex]++ === 0) distinctVowelCount++

    // Move the left boundary past each minimal valid window
    while (distinctVowelCount === 5) {
      // Read the vowel at the current left boundary
      const leftCharacterCode = word.charCodeAt(leftPointer)
      // Map the left-boundary vowel to its frequency-array index
      const leftVowelIndex =
        leftCharacterCode === 97
          ? 0
          : leftCharacterCode === 101
            ? 1
            : leftCharacterCode === 105
              ? 2
              : leftCharacterCode === 111
                ? 3
                : 4

      // Remove the leftmost vowel and update the distinct vowel count
      if (--vowelCounts[leftVowelIndex] === 0) distinctVowelCount--

      // Advance to the next possible start of a valid substring
      leftPointer++
    }

    // Count valid starts within the current vowel-only segment
    vowelSubstringCount += leftPointer - vowelSegmentStart
  }

  // Return the total number of qualifying substrings
  return vowelSubstringCount
}
