/**
 * Problem: 3333. Find the Original Typed String II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 221 ms (Beats 100%)
 */

const mod = 1000000007

func possibleStringCount(word string, k int) int {
	n := len(word)
	// Count consecutive characters starting with 1
	consecutiveCount := 1
	var frequencies []int

	// Group consecutive identical characters
	for i := 1; i < n; i++ {
		if word[i] == word[i-1] {
			consecutiveCount++
		} else {
			frequencies = append(frequencies, consecutiveCount)
			consecutiveCount = 1
		}
	}

	frequencies = append(frequencies, consecutiveCount)

	// Calculate total possible strings without length constraint
	totalStrings := 1

	for _, frequency := range frequencies {
		totalStrings = totalStrings * frequency % mod
	}

	// If groups >= k, all strings are valid
	if len(frequencies) >= k {
		return totalStrings
	}

	// DP arrays for calculating invalid strings (length < k)
	dpCurrent, dpPrefixSum := make([]int, k), make([]int, k)
	
	dpCurrent[0] = 1

	for i := range dpPrefixSum {
		dpPrefixSum[i] = 1
	}

	// Process each group of consecutive characters
	for i := 0; i < len(frequencies); i++ {
		dpNew := make([]int, k)

		// Calculate new DP values using sliding window technique
		for j := 1; j < k; j++ {
			dpNew[j] = dpPrefixSum[j-1]

			if j-frequencies[i]-1 >= 0 {
				dpNew[j] = (dpNew[j] - dpPrefixSum[j-frequencies[i]-1] + mod) % mod
			}
		}

		// Update prefix sum array
		prefixSumNew := make([]int, k)
		prefixSumNew[0] = dpNew[0]

		for j := 1; j < k; j++ {
			prefixSumNew[j] = (prefixSumNew[j-1] + dpNew[j]) % mod
		}
		
		dpCurrent, dpPrefixSum = dpNew, prefixSumNew
	}

	// Return valid strings (total - invalid strings with length < k)
	return (totalStrings - dpPrefixSum[k-1] + mod) % mod
}
