/**
 * Problem: 2410. Maximum Matching of Players With Trainers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 15 ms (Beats 100%)
 */

func matchPlayersAndTrainers(players []int, trainers []int) int {
	// Sort players array in ascending order to process from weakest to strongest
	sort.Ints(players)
	// Sort trainers array in ascending order to process from lowest to highest ability
	sort.Ints(trainers)

	// Initialize pointer for players and trainers array
	playerIndex, trainerIndex := 0, 0
	// Initialize counter for successful matches
	matchCount := 0

	// Two-pointer approach: iterate while both arrays have unprocessed elements
	for playerIndex < len(players) && trainerIndex < len(trainers) {
		// Check if current trainer can train current player (trainer ability >= player ability)
		if trainers[trainerIndex] >= players[playerIndex] {
			// Match found: move both pointers forward
			playerIndex++
			trainerIndex++
			// Increment the match counter
			matchCount++

			continue
		}

		// Current trainer cannot train current player, try next trainer
		trainerIndex++
	}
	
	// Return the total number of successful matches
	return matchCount
}
