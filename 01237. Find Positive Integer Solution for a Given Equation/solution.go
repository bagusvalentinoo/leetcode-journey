/**
 * Problem: 1237. Find Positive Integer Solution for a Given Equation
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findSolution(customFunction func(int, int) int, z int) [][]int {
	// Initialize a 2D slice to store the result pairs [x, y]
	var result [][]int

	// Iterate x from 1 to 1000 (as per problem constraints)
	for x := 1; x <= 1000; x++ {
		// Set up binary search boundaries for y in [1, 1000]
		low, high, mid := 1, 1000, 0

		// Perform binary search to find y such that customFunction(x, y) == z
		for low <= high {
			mid = (low + high) / 2
			// Evaluate the custom function with current x and mid as y
			value := customFunction(x, mid)

			if value == z {
				// If the function result matches z, add the pair [x, mid] to result
				result = append(result, []int{x, mid})
				break // Move to next x since only one y per x is possible
			} else if value < z {
				// If the result is less than z, search in the higher half
				low = mid + 1
			} else {
				// If the result is greater than z, search in the lower half
				high = mid - 1
			}
		}
	}

	// Return all valid pairs [x, y] found
	return result
}
