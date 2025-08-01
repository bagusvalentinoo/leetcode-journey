/**
 * Problem: 898. Bitwise ORs of Subarrays
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 355 ms (Beats 100%)
 */

// IntSet is a set data structure for integers using a map with empty struct values.
type IntSet map[int]struct{}

// Add inserts an integer value into the IntSet.
func (set IntSet) Add(value int) {
	set[value] = struct{}{}
}

func subarrayBitwiseORs(arr []int) int {
	// allResults stores all unique bitwise OR results from subarrays.
	allResults := IntSet{}
	// previousResults stores the OR results from the previous iteration (previous subarray ends).
	previousResults := IntSet{}

	// Iterate through each element in arr.
	for _, num := range arr {
		// currentResults stores OR results for subarrays ending at the current element.
		currentResults := IntSet{}
		// Add the current number itself as a subarray of length 1.
		currentResults.Add(num)
		allResults.Add(num)

		// For each result in previousResults, OR it with the current number and add to sets.
		for prev := range previousResults {
			orResult := prev | num
			currentResults.Add(orResult)
			allResults.Add(orResult)
		}

		// Update previousResults for the next iteration.
		previousResults = currentResults
	}

	// Return the count of unique OR results.
	return len(allResults)
}
