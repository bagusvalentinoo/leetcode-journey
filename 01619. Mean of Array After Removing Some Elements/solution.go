/**
 * Problem: 1619. Mean of Array After Removing Some Elements
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func trimMean(arr []int) float64 {
	// Sort array in ascending order
	sort.Ints(arr)

	// Number of elements to remove from each end (5%)
	trim := len(arr) / 20

	// Accumulate sum of middle elements
	sum := 0

	// Loop over middle 90% excluding smallest and largest 5%
	for i := trim; i < len(arr)-trim; i++ {
		sum += arr[i]
	}

	// Return mean of remaining elements
	return float64(sum) / float64(len(arr)-trim*2)
}
