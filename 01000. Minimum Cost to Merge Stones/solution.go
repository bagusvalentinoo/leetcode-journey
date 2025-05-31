/**
 * Problem: 1000. Minimum Cost to Merge Stones
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mergeStones(stones []int, k int) int {
	// Number of stones in the array
	numStones := len(stones)

	// Check if it's possible to merge all stones into one pile
	for numStones >= k { numStones = numStones/k + numStones%k }

	// If we can't reduce to exactly one pile, return -1
	if numStones != 1 { return -1 }

	// dp[i][j] represents minimum cost to merge stones[i:j+1]
	dp := make([][]int, len(stones))
	for i := range dp { dp[i] = make([]int, len(stones)) }

	// Precompute prefix sums for efficient range sum calculation
	prefixSums := make([]int, len(stones)+1)
	for i := 1; i < len(prefixSums); i++ { prefixSums[i] = prefixSums[i-1] + stones[i-1] }

	// Build dp table bottom-up by size of subarray
	for size := k; size <= len(stones); size += 1 {
		for i := 0; i+size-1 < len(stones); i++ {
			j := i + size - 1
			dp[i][j] = math.MaxInt32
			
			// Try different partitioning points
			for mid := i; mid < j; mid += k - 1 {
				dp[i][j] = min(dp[i][j], dp[i][mid]+dp[mid+1][j])
			}

			// Add cost of final merge if possible
			if (j-i)%(k-1) == 0 { dp[i][j] += prefixSums[j+1] - prefixSums[i] }
		}
	}
	
	// Return minimum cost to merge all stones
	return dp[0][len(stones)-1]
}