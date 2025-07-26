/**
 * Problem: 3480. Maximize Subarrays After Removing One Conflicting Pair
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 74 ms (Beats 100%)
 */

func maxSubarrays(n int, conflictingPairs [][]int) int64 {
	// Initialize constraints slice to store the two smallest conflicting indices for each position.
	constraints := make([][]int, n+2)

	// Set default values for constraints: both elements are n+1 (out of bounds).
	for i := range constraints {
		constraints[i] = []int{n + 1, n + 1}
	}

	// Set the first constraint for index 0 to 0.
	constraints[0][0] = 0

	// Populate constraints with the two smallest conflicting indices for each position.
	for _, pair := range conflictingPairs {
		a, b := min(pair[0], pair[1]), max(pair[0], pair[1])

		// Update the smallest and second smallest conflicting index for position a.
		if b < constraints[a][0] {
			constraints[a][1] = constraints[a][0]
			constraints[a][0] = b
		} else if b < constraints[a][1] {
			constraints[a][1] = b
		}
	}

	// Initialize pointer for subarray calculation.
	i := n

	// rawCount stores the total number of subarrays without removing any conflicting pair.
	rawCount := int64(0)
	// maxIncrease stores the maximum increase in subarrays after removing one conflicting pair.
	maxIncrease := int64(0)

	// Iterate backwards through the array to update constraints and calculate subarrays.
	for j := n; j > 0; j-- {
		// Update constraints for current position using next position's constraints.
		constraints[j][0] = min(constraints[j][0], constraints[j+1][0])
		constraints[j][1] = min(constraints[j][1], constraints[j+1][0])

		// Add the number of valid subarrays ending at position j.
		rawCount += int64(constraints[j][0] - j)

		// Skip if both constraints are equal (no improvement possible).
		if constraints[j][0] == constraints[j][1] {
			continue
		}

		// Variable to store the increase in subarrays for current position.
		increase := int64(0)

		// Move pointer i to the left to find the valid range.
		i = min(i, j-1)

		// Move i left while the smallest constraint at i is greater than the second smallest at j.
		for constraints[i][0] > constraints[j][1] {
			i--
		}

		// Calculate the increase in subarrays by removing the conflicting pair.
		increase += int64(j-i) * int64(constraints[j][1]-constraints[j][0])

		// Store the smallest constraint at i for further calculation.
		iConstraint := constraints[i][0]

		// Further increase calculation by moving i left and updating iConstraint.
		for iConstraint > constraints[j][0] {
			increase += int64(iConstraint - constraints[j][0])
			i--
			iConstraint = min(iConstraint, constraints[i][0])
		}

		// Update maxIncrease if the current increase is greater.
		if increase > maxIncrease {
			maxIncrease = increase
		}
	}
	
	// Return the total number of subarrays after removing one conflicting pair.
	return rawCount + maxIncrease
}
