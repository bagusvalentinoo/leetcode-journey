/**
 * Problem: 1103. Distribute Candies to People
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func distributeCandies(candies int, num_people int) []int {
	// Initialize a slice to store the result, with length equal to the number of people
	result := make([]int, num_people)
	// Initialize a counter to track the current round and person
	i := 0
	
	// Continue distributing candies until none are left
	for candies > 0 {
		// Determine the number of candies to give in this turn: either the next increment or the remaining candies
		toGive := min(candies, i+1)
		// Add the candies to the current person's total (using modulo to cycle through people)
		result[i%num_people] += toGive
		// Subtract the given candies from the total remaining
		candies -= toGive
		// Move to the next round/person
		i++
	}

	// Return the final distribution of candies
	return result
}
