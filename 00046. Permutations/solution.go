/**
 * Problem: 46. Permutations
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// permute generates all possible permutations of the input slice nums
func permute(nums []int) [][]int {
	// res stores all the permutations we'll generate
	var res [][]int
	
	// permutation will store the current permutation we're building
	// initialized with same length as input slice
	permutation := make([]int, len(nums))
	
	// visit keeps track of which numbers we've used in current permutation
	// using a boolean array where true means the number at that index is used
	visit := make([]bool, len(nums))
	
	// backtrack is our recursive helper function
	// index represents the current position we're filling in permutation
	var backtrack func(int)
	backtrack = func(index int) {
		// Base case: if we've filled all positions (index == len(nums))
		// we've completed one permutation
		if index == len(nums) {
			// Create a deep copy of current permutation
			// We need to copy because permutation slice will be modified
			copiedPermutation := make([]int, len(nums))
			copy(copiedPermutation, permutation)
			
			// Add the completed permutation to our results
			res = append(res, copiedPermutation)
			
			return
		}   
		
		// Try placing each number at the current index
		for i := 0; i < len(nums); i++ {
			// If this number hasn't been used in current permutation
			if visit[i] == false {
				// Mark this number as used
				visit[i] = true
				// Place this number at current index
				permutation[index] = nums[i]
				// Recursively fill the next position
				backtrack(index+1)   
				// Backtrack: mark number as unused for next iteration
				visit[i] = false
			}
		}
	}
	
	// Start the backtracking process from index 0
	backtrack(0)
	
	return res
}
