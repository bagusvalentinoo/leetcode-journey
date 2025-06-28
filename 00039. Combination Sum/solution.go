/**
 * Problem: 39. Combination Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func combinationSum(candidates []int, target int) [][]int {
	var result [][]int
	var currentCombination []int

	// Helper function to perform backtracking
	var backtrack func(start int, remaining int)
	backtrack = func(start int, remaining int) {
		if remaining == 0 {
			// Found a valid combination
			combination := make([]int, len(currentCombination))
			copy(combination, currentCombination)
			result = append(result, combination)

			return
		}
		if remaining < 0 {
			// Exceeded the target, no need to continue
			return
		}

		for i := start; i < len(candidates); i++ {
			// Choose the candidate
			currentCombination = append(currentCombination, candidates[i])
			// Recur with the updated remaining target
			backtrack(i, remaining-candidates[i])
			// Backtrack by removing the last candidate
			currentCombination = currentCombination[:len(currentCombination)-1]
		}
	}

	// Start backtracking from index 0 and target value
	backtrack(0, target)

	return result
}
