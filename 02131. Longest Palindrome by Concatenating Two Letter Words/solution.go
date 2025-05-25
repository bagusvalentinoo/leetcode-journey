/**
 * Problem: 2131. Longest Palindrome by Concatenating Two Letter Words
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func wordToNum(word string) int {
	char1, char2 := int(word[0])-int('a'), int(word[1])-int('a')
	
	return char1*26+char2
}

func minInt(a, b int) int {
	if a < b {
		return a
	}

	return b
}

func longestPalindrome(words []string) int {
	// Total possible combinations of two lowercase letters
	totalCombinations := 26*26
	// Track frequency of each word
	frequency := make([]int, totalCombinations)

	// Count occurrences of each word
	for _, word := range words {
		idx := wordToNum(word)
		frequency[idx]++
	}

	// Track the maximum palindrome length and count of words with same letters
	palindromeLength, sameLetterOddCount := 0, 0

	// Handle words with same letters (like "aa")
	for i := 0; i < 26; i++ {
		idx := 26*i+i
		
		if frequency[idx]%2==0 {
			palindromeLength += 2*frequency[idx]
		} else {
			sameLetterOddCount++
			palindromeLength += 2*(frequency[idx]-1)
		}
	}

	// One word with odd frequency can be placed at center
	if sameLetterOddCount > 0 {
		palindromeLength += 2
	}

	// Handle pairs of different letter words (like "ab" and "ba")
	for i := 0; i < 26; i++ {
		for j := i+1; j < 26; j++ {
			idx, reverseIdx := i*26+j, i+j*26
			matchingPairs := minInt(frequency[idx], frequency[reverseIdx])
			
			palindromeLength += matchingPairs*2*2
		}
	}
	
	return palindromeLength
}