/**
 * Problem: 1276. Number of Burgers with No Waste of Ingredients
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numOfBurgers(tomatoSlices int, cheeseSlices int) []int {
	// Check if the number of tomato slices is odd or if the number of
	// tomato slices divided by 2 is less than the number of cheese slices,
	// or if the number of tomato slices divided by 4 is greater than the
	// number of cheese slices. If any of these conditions are true, return
	// an empty slice as no solution is possible.
	if tomatoSlices%2 == 1 || tomatoSlices/2 < cheeseSlices || tomatoSlices/4 > cheeseSlices {
		return []int{}
	}
	
	// Calculate the number of jumbo burgers (tomatoSlices/2 - cheeseSlices)
	// and small burgers (2*cheeseSlices - tomatoSlices/2) and return them
	// as a slice.
	return []int{tomatoSlices/2 - cheeseSlices, 2*cheeseSlices - tomatoSlices/2}
}
