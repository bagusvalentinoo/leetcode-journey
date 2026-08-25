/**
 * Problem: 1337. The K Weakest Rows in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kWeakestRows(mat [][]int, k int) []int {
	// Create slice of [index, soldierCount] pairs
	mp := [][2]int{}

	// Iterate through each row and count soldiers
	for i, row := range mat {
		// Append [rowIndex, soldierCount] pair
		mp = append(mp, [2]int{i, countOnes(row)})
	}

	// Sort by soldier count ascending, then by index ascending for ties
	sort.Slice(mp, func(a, b int) bool {
		// If soldier counts are equal, compare by row index
		if mp[a][1] == mp[b][1] {
			return mp[a][0] < mp[b][0]
		}

		// Otherwise compare by soldier count
		return mp[a][1] < mp[b][1]
	})

	// Create result array for k weakest rows
	res := make([]int, k)

	// Copy first k indices to result
	for i := 0; i < k; i++ {
		res[i] = mp[i][0]
	}

	// Return k weakest row indices
	return res
}

// Count soldiers (1s) in a row
func countOnes(num []int) int {
	// Initialize soldier count
	ones := 0

	// Iterate through row and count each 1
	for _, n := range num {

		// Increment count if cell is a soldier
		if n == 1 {
			ones++
		}
	}

	// Return total soldier count
	return ones
}
