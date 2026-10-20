/**
 * Problem: 2062. Count Vowel Substrings of a String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countVowelSubstrings(word string) int {
  // Count substrings containing all five vowels
  vowelSubstringCount := 0

  // Start a substring at every character
  for startIndex := 0; startIndex < len(word); startIndex++ {
    // Track the occurrence count of each vowel in the current substring
    vowelCounts := [5]int{}
    // Track how many distinct vowels are present
    distinctVowelCount := 0

    // Extend the substring until it contains a consonant
    for endIndex := startIndex; endIndex < len(word); endIndex++ {
      // Read the newly included character
      currentCharacter := word[endIndex]
      // Map the vowel to its occurrence-count index
      vowelIndex := -1

      // Find the index for the current vowel
      switch currentCharacter {
      case 'a':
        vowelIndex = 0
      case 'e':
        vowelIndex = 1
      case 'i':
        vowelIndex = 2
      case 'o':
        vowelIndex = 3
      case 'u':
        vowelIndex = 4
      }

      // No longer substrings from this start can be vowel-only
      if vowelIndex == -1 {
        break
      }

      // Record the first occurrence of the vowel
      if vowelCounts[vowelIndex] == 0 {
        distinctVowelCount++
      }
      // Record this occurrence of the vowel
      vowelCounts[vowelIndex]++

      // Count every vowel-only substring containing all five vowels
      if distinctVowelCount == len(vowelCounts) {
        vowelSubstringCount++
      }
    }
  }

  // Return the total number of qualifying substrings
  return vowelSubstringCount
}
