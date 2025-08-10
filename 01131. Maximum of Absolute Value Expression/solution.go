/**
 * Problem: 1131. Maximum of Absolute Value Expression
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxAbsValExpr(arr1 []int, arr2 []int) int {
	// dirs represents the direction multipliers for arr1 and arr2 to cover all sign combinations
	dirs := [5]int{1, -1, -1, 1, 1}

	// inf is a large constant used for initialization
	const inf = 1 << 30
	
	// maxDifference stores the maximum absolute value expression found
	maxDifference := -inf

	// Iterate over all 4 possible sign combinations
	for k := 0; k < 4; k++ {
		// a and b are the current direction multipliers for arr1 and arr2
		a, b := dirs[k], dirs[k+1]
		// maxValue and minValue track the max and min values for the current combination
		maxValue, minValue := -inf, inf

		// Iterate through all elements in arr1 and arr2
		for i, x := range arr1 {
			y := arr2[i]
			// Update maxValue and minValue for the current combination
			maxValue = max(maxValue, a*x+b*y+i)
			minValue = min(minValue, a*x+b*y+i)
			// Update maxDifference with the largest difference found so far
			maxDifference = max(maxDifference, maxValue-minValue)
		}
	}

	// Return the maximum absolute value expression found
	return maxDifference
}
