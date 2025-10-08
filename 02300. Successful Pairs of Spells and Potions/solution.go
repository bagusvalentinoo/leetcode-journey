/**
 * Problem: 2300. Successful Pairs of Spells and Potions
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 15 ms (Beats 100%)
 */

func successfulPairs(spells []int, potions []int, success int64) []int {
	// Sort the potions slice in ascending order to enable binary search.
	sort.Ints(potions)

	// Iterate over each spell in the spells slice.
	for spellIdx := 0; spellIdx < len(spells); spellIdx++ {
		// Initialize binary search boundaries for potions.
		left, right := 0, len(potions)

		// Perform binary search to find the first potion that forms a successful pair.
		for left < right {
			// Calculate the middle index of the current search range.
			mid := (left + right) / 2

			// Check if the product of the current spell and potion meets or exceeds success.
			if int64(potions[mid])*int64(spells[spellIdx]) >= success {
				// If successful, narrow the search to the left half.
				right = mid
			} else {
				// Otherwise, search the right half.
				left = mid + 1
			}
		}

		// Store the count of successful pairs for the current spell.
		spells[spellIdx] = len(potions) - left
	}

	// Return the updated spells slice containing counts of successful pairs.
	return spells
}
