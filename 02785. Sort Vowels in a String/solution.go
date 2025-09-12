/**
 * Problem: 2785. Sort Vowels in a String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

// VOWELS contains all uppercase and lowercase vowels for reference.
const VOWELS = "AEIOUaeiou"

// VOWELMASK is a bitmask used to quickly check if a character is a vowel (A, E, I, O, U).
const VOWELMASK = (1 << ('A' & 31)) + (1 << ('E' & 31)) + (1 << ('I' & 31)) + (1 << ('O' & 31)) + (1 << ('U' & 31))

// isVowel checks if the given byte represents a vowel (case-insensitive).
func isVowel(b byte) bool {
	return (VOWELMASK>>(b&31))&1 > 0
}

// sortVowels sorts the vowels in the input string s in ascending order, keeping consonants in their original positions.
func sortVowels(s string) string {
	// freq stores the frequency of each character in the input string.
	freq := ['z' + 1]int{}

	// Count the frequency of each character in the input string.
	for _, c := range s {
		freq[c]++
	}

	// vowelIdx is the index for iterating through VOWELS to find the next vowel to place.
	vowelIdx := 0

	// t is a mutable copy of the input string as a byte slice.
	t := []byte(s)

	// Iterate through each character in the input string.
	for i := range s {
		// Skip non-vowel characters.
		if !isVowel(s[i]) {
			continue
		}

		// Find the next vowel in VOWELS that still has remaining frequency.
		for freq[VOWELS[vowelIdx]] == 0 {
			vowelIdx++
		}
		
		// Replace the vowel at position i with the next sorted vowel.
		t[i] = VOWELS[vowelIdx]
		// Decrement the frequency of the used vowel.
		freq[VOWELS[vowelIdx]]--
	}

	// Return the modified string with sorted vowels.
	return string(t)
}
