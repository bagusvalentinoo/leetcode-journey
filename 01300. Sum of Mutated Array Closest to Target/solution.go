/**
 * Problem: 1300. Sum of Mutated Array Closest to Target
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findBestValue(arr []int, target int) int {
	// Get array length
	arrayLength := len(arr)

	// Binary search boundaries
	left := 0

	// Find maximum value in array for right boundary
	right := 0
	for _, val := range arr {
		if val > right {
			right = val
		}
	}

	// Track closest sum and corresponding value
	smallestDiff := int(^uint(0) >> 1) // Max int
	bestValue := 0

	// Helper to calculate sum with cap
	calculateSum := func(limit int) int {
		// Initialize total sum
		totalSum := 0

		// Iterate through array and add capped values to total sum
		for i := 0; i < arrayLength; i++ {
			// Add capped value to total sum
			if arr[i] > limit {
				totalSum += limit
			} else {
				// Add uncapped value to total sum
				totalSum += arr[i]
			}
		}

		// Return total sum
		return totalSum
	}

	// Binary search for best value
	for left <= right {
		// Calculate mid value
		mid := (left + right) >> 1

		// Calculate sum with mid value
		currentSum := calculateSum(mid)

		// Calculate difference between current sum and target
		currentDiff := currentSum - target
		if currentDiff < 0 {
			currentDiff = -currentDiff
		}

		// Update best result if current is better
		if currentDiff < smallestDiff ||
			(currentDiff == smallestDiff && mid < bestValue) {
			// Update best value
			bestValue = mid
			// Update smallest difference
			smallestDiff = currentDiff
		}

		// Adjust search range based on sum comparison
		if currentSum < target {
			// Move left boundary up
			left = mid + 1
		} else {
			// Move right boundary down
			right = mid - 1
		}
	}

	// Return best value
	return bestValue
}
