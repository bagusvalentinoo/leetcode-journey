/**
 * Problem: 955. Delete Columns to Make Sorted II
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minDeletionSize(strs []string) int {
	// Length of the input array
	n := len(strs)
	
	// Early return if the array is empty
	if n == 0 {
		return 0
	}

	// Length of each string
	m := len(strs[0])
	// Count of columns to delete
	res := 0
	// Track which adjacent string pairs are already sorted
	sorted := make([]bool, n-1)

	// Iterate through each column
	for j := 0; j < m; j++ {
		i := 0

		// Check if current column needs deletion
		for ; i < n-1; i++ {
			if !sorted[i] && strs[i][j] > strs[i+1][j] {
				res++
				break
			}
		}

		// If we found a column to delete, skip to next column
		if i < n-1 {
			continue
		}

		// Update sorted status for pairs that are now sorted by this column
		for i := 0; i < n-1; i++ {
			if strs[i][j] < strs[i+1][j] {
				sorted[i] = true
			}
		}
	}
	
	return res
}