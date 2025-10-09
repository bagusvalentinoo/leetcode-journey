/**
 * Problem: 2300. Successful Pairs of Spells and Potions
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

func successfulPairs(spells []int, potions []int, success int64) []int {
	// Find the maximum value in potions to determine the size of the check array.
	maxPotion := potions[0]
	for _, potion := range potions {
		if potion > maxPotion {
			maxPotion = potion
		}
	}

	// Initialize an array to count occurrences of each potion strength.
	potionCount := make([]int, maxPotion+1)
	// Prepare the result array to store the number of successful pairs for each spell.
	result := make([]int, len(spells))

	// Count how many potions have each strength.
	for _, potion := range potions {
		potionCount[potion]++
	}

	// Build a suffix sum so potionCount[i] holds the number of potions >= i.
	for i := len(potionCount) - 2; i >= 0; i-- {
		potionCount[i] += potionCount[i+1]
	}

	// For each spell, calculate the minimum required potion strength for success.
	for i := 0; i < len(spells); i++ {
		var minPotionRequired int64

		// Compute the minimum potion strength needed for the spell to succeed.
		if success%int64(spells[i]) != 0 {
			minPotionRequired = success/int64(spells[i]) + 1
		} else {
			minPotionRequired = success / int64(spells[i])
		}

		// If the required strength exceeds available potions, set result to 0.
		if minPotionRequired >= int64(len(potionCount)) {
			result[i] = 0
		} else {
			// Otherwise, set result to the count of potions meeting the requirement.
			result[i] = potionCount[minPotionRequired]
		}
	}

	// Return the array containing the number of successful pairs for each spell.
	return result
}
