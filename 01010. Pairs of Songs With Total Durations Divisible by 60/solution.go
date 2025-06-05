/**
 * Problem: 1010. Pairs of Songs With Total Durations Divisible by 60
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numPairsDivisibleBy60(time []int) int {
	// Stores the count of each remainder when dividing by 60
	remainders := make([]int, 60)
	pairs := 0

	// For each song, find complementary songs that make the sum divisible by 60
	for _, duration := range time {
		// Calculate remainder when current duration is divided by 60
		remainder := duration % 60
		// Find the complementary remainder needed to sum to a multiple of 60
		complement := (60 - remainder) % 60

		// Add existing complementary songs to our pair count
		pairs += remainders[complement]
		// Increment count for current remainder
		remainders[remainder]++
	}

	return pairs
}