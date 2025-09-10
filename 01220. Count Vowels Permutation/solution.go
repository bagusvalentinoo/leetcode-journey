/**
 * Problem: 1220. Count Vowels Permutation
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countVowelPermutation(n int) int {
	// Initialize counts for each vowel for strings of length 1
	var countA, countE, countI, countO, countU int64 = 1, 1, 1, 1, 1

	// Iterate for the remaining n-1 positions
	for n--; n > 0; n-- {
		// Update counts for each vowel based on the rules:
		// 'a' can follow 'e', 'i', 'u'
		// 'e' can follow 'a', 'i'
		// 'i' can follow 'e', 'o'
		// 'o' can follow 'i'
		// 'u' can follow 'i', 'o'
		countA, countE, countI, countO, countU = 
			(countE + countI + countU) % 1000000007, // new countA
			(countA + countI) % 1000000007,          // new countE
			(countE + countO) % 1000000007,          // new countI
			countI,                                  // new countO
			(countI + countO) % 1000000007           // new countU
	}

	// Return the total number of valid strings modulo 1e9+7
	return int((countA + countE + countI + countO + countU) % 1000000007)
}
