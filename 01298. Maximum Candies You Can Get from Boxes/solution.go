/**
 * Problem: 1298. Maximum Candies You Can Get from Boxes
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxCandies(status []int, candies []int, keys [][]int, containedBoxes [][]int, initialBoxes []int) int {
	// Total candies collected
	totalCandies := 0
	// Track which boxes have already had their candies collected
	collectedBoxes := make([]bool, len(candies))
	// Track which boxes are in our possession
	ownedBoxes := make([]bool, len(candies))
	
	// Mark initially given boxes as owned
	for _, box := range initialBoxes {
		ownedBoxes[box] = true
	}

	// Process each box in our queue
	for i := 0; i < len(initialBoxes); i++ {
		box := initialBoxes[i]

		// Skip if we've already collected candies from this box
		if collectedBoxes[box] {
			continue
		}
		// Process only unlocked boxes
		if status[box] == 1 {
			// Collect candies from the current box
			totalCandies += candies[box]
			collectedBoxes[box] = true
			
			// Use any keys found in the box
			for _, key := range keys[box] {
				if status[key] == 0 { 
					status[key] = 1

					// If we own the box this key unlocks and haven't collected its candies, add to queue
					if ownedBoxes[key] && !collectedBoxes[key] {
						initialBoxes = append(initialBoxes, key)
					}
				}
			}
			// Add any contained boxes to our possession
			for _, containedBox := range containedBoxes[box] { 
				ownedBoxes[containedBox] = true

				// If we haven't collected candies from this new box, add to queue
				if !collectedBoxes[containedBox] {
					initialBoxes = append(initialBoxes, containedBox)
				}
			}
		}
	}

	return totalCandies
}