/**
 * Problem: 3541. Find Most Frequent Vowel and Consonant
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxFreqSum(s string) int {
	// Create a map to store the frequency of each rune in the string
	frequencyMap := make(map[rune]int)
	// Initialize variables to store the maximum frequency of consonants and vowels
	maxConsonantFreq, maxVowelFreq := 0, 0

	// Iterate over each character in the string and update its frequency in the map
	for _, char := range s {
		frequencyMap[char]++
	}

	// Iterate over the frequency map to find the highest frequency of vowels and consonants
	for ch, count := range frequencyMap {
		// Check if the character is a vowel
		if strings.ContainsRune("aeiou", ch) {
			// Update maxVowelFreq if the current vowel's frequency is higher
			if count > maxVowelFreq {
				maxVowelFreq = count
			}
		} else {
			// Update maxConsonantFreq if the current consonant's frequency is higher
			if count > maxConsonantFreq {
				maxConsonantFreq = count
			}
		}
	}

	// Return the sum of the highest vowel and consonant frequencies
	return maxConsonantFreq + maxVowelFreq
}
