/**
 * Problem: 2099. Find Subsequence of Length K With the Largest Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSubsequence(nums []int, k int) []int {
	// Define a struct to store value and its original index
	type pair struct {
		val int
		idx int
	}

	// Create slice of pairs to track values with their indices
	pairs := make([]pair, len(nums))
	for i, num := range nums {
		pairs[i] = pair{num, i}
	}
	
	// Sort pairs by value in descending order to get largest values first
	sort.Slice(pairs, func(i, j int) bool {
		return pairs[i].val > pairs[j].val
	})

	// Get the top k largest values
	topK := pairs[:k]
	
	// Sort top k pairs by original index to maintain order
	sort.Slice(topK, func(i, j int) bool {
		return topK[i].idx < topK[j].idx
	})

	// Build result slice with values in original order
	result := make([]int, k)
	for i, p := range topK {
		result[i] = p.val
	}

	return result
}
