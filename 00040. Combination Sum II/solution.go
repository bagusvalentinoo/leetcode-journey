/**
 * Problem: 40. Combination Sum II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func combinationSum2(candidates []int, target int) [][]int {
	// Get the length of the candidates slice
	n := len(candidates)
	// Initialize the result slice to store all unique combinations
	res := make([][]int, 0)
	// Initialize a slice to store the current combination
	sub := make([]int, 0)

	// Sort the candidates to facilitate skipping duplicates
	sort.Ints(candidates)

	// Define the DFS function for backtracking
	var dfs func(int, int)
	dfs = func(idx, curSum int) {
		// If the current sum equals the target, add a copy of the current combination to the result
		if curSum == target {
			temp := make([]int, len(sub))
			copy(temp, sub)
			res = append(res, temp)
			return
		}

		// If index is out of bounds or current sum exceeds target, stop recursion
		if idx == n || curSum > target {
			return
		}

		// Include the current candidate in the combination
		sub = append(sub, candidates[idx])
		// Recurse to the next index with updated sum
		dfs(idx+1, curSum+candidates[idx])
		// Backtrack: remove the last candidate added
		sub = sub[:len(sub)-1]

		// Skip duplicate candidates to avoid duplicate combinations
		for idx+1 < n && candidates[idx] == candidates[idx+1] {
			idx++
		}

		// Recurse to the next index without including the current candidate
		dfs(idx+1, curSum)
	}

	// Start the DFS from index 0 and sum 0
	dfs(0, 0)

	// Return the result containing all unique combinations
	return res
}
