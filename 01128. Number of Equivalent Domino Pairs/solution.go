/**
 * Problem: 1128. Number of Equivalent Domino Pairs
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numEquivDominoPairs(dominoes [][]int) int {
	// Create a slice to count occurrences of each unique domino key (0-99)
	count := make([]int, 100)
	// Initialize the result to store the number of equivalent domino pairs
	res := 0

	// Iterate through each domino in the input slice
	for _, domino := range dominoes {
		// Generate a unique key for the domino by combining its two numbers
		key := domino[0]*10 + domino[1]
		
		// Ensure the smaller number comes first for equivalence (e.g., [2,1] == [1,2])
		if domino[0] > domino[1] {
			key = domino[1]*10 + domino[0]
		}
		
		// Add the current count of this key to the result (number of pairs formed)
		res += count[key]
		// Increment the count for this key
		count[key]++
	}

	// Return the total number of equivalent domino pairs
	return res
}
