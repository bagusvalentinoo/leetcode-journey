/**
 * Problem: 1187. Make Array Strictly Increasing
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func makeArrayIncreasing(arr1 []int, arr2 []int) int {
	// Sort arr2 to enable binary search and deduplication
	sort.Ints(arr2)
	m := 0 // m will track the number of unique elements in arr2

	// Deduplicate arr2 in-place
	for _, x := range arr2 {
		if m == 0 || x != arr2[m-1] {
			arr2[m] = x
			m++
		}
	}

	// Resize arr2 to contain only unique elements
	arr2 = arr2[:m]
	const inf = 1 << 30 // Define a large constant to represent infinity

	// Add -inf at the beginning and inf at the end of arr1 for boundary handling
	arr1 = append([]int{-inf}, arr1...)
	arr1 = append(arr1, inf)

	n := len(arr1) // n is the length of the modified arr1
	f := make([]int, n) // f[i] stores the minimum operations to make arr1[0:i] strictly increasing

	// Initialize all values in f to infinity
	for i := range f {
		f[i] = inf
	}

	f[0] = 0 // No operation needed for the first element (-inf)

	// Dynamic programming to fill f
	for i := 1; i < n; i++ {
		// If previous element is less than current, carry forward the operation count
		if arr1[i-1] < arr1[i] {
			f[i] = f[i-1]
		}

		// Find the insertion point for arr1[i] in arr2 using binary search
		j := sort.SearchInts(arr2, arr1[i])

		// Try replacing up to k elements before i with elements from arr2
		for k := 1; k <= min(i-1, j); k++ {
			// Check if replacement maintains strictly increasing order
			if arr1[i-k-1] < arr2[j-k] {
				// Update f[i] with the minimum operations required
				f[i] = min(f[i], f[i-k-1]+k)
			}
		}
	}

	// If it's impossible to make arr1 strictly increasing, return -1
	if f[n-1] >= inf {
		return -1
	}

	// Return the minimum number of operations required
	return f[n-1]
}
