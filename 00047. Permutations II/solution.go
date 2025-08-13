/**
 * Problem: 47. Permutations II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func permuteUnique(nums []int) [][]int {
	// ans will store all unique permutations
	ans := [][]int{}
	// freqMap keeps track of the frequency of each number in nums
	freqMap := make(map[int]int)

	// Populate freqMap with the count of each number in nums
	for _, num := range nums {
		freqMap[num]++
	}

	// backtrack is a recursive function to build permutations
	// comb: current permutation being built
	// n: total length of the permutation
	var backtrack func(comb []int, n int)
	backtrack = func(comb []int, n int) {
		// If the current combination has reached the required length, add a copy to ans
		if len(comb) == n {
			tmp := make([]int, n) // Create a new slice to avoid reference issues
			copy(tmp, comb)       // Copy the current combination
			ans = append(ans, tmp) // Add the copy to the result
			return
		}
		// Iterate over all numbers in freqMap
		for num, count := range freqMap {
			// Skip numbers that have been used up
			if count == 0 {
				continue
			}
			// Choose the current number
			comb = append(comb, num)
			freqMap[num]--

			// Continue building the permutation
			backtrack(comb, n)

			// Backtrack: undo the choice for the next iteration
			freqMap[num]++
			comb = comb[:len(comb)-1]
		}
	}

	// Start backtracking with an empty combination
	backtrack([]int{}, len(nums))

	// Return all unique permutations
	return ans
}
