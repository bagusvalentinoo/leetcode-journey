/**
 * Problem: 1191. K-Concatenation Maximum Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kConcatenationMaxSum(arr []int, k int) int {
	// Initialize variables:
	// totalSum: cumulative sum of array elements
	// maxPrefixSum: maximum prefix sum found so far
	// minPrefixSum: minimum prefix sum found so far
	// maxSubarraySum: maximum subarray sum found so far
	var totalSum, maxPrefixSum, minPrefixSum, maxSubarraySum int

	// Iterate through each element in arr
	for _, num := range arr {
		// Update cumulative sum
		totalSum += num
		// Update maximum prefix sum
		maxPrefixSum = max(maxPrefixSum, totalSum)
		// Update minimum prefix sum
		minPrefixSum = min(minPrefixSum, totalSum)
		// Update maximum subarray sum using the difference between current sum and minimum prefix sum
		maxSubarraySum = max(maxSubarraySum, totalSum-minPrefixSum)
	}

	const mod = 1e9 + 7 // Define modulo constant for result

	// Initialize answer with maximum subarray sum found in single array
	ans := maxSubarraySum

	// If k == 1, only one copy of arr is used, so return answer modulo mod
	if k == 1 {
		return ans % mod
	}

	// Calculate maximum suffix sum (sum from some index to end)
	maxSuffixSum := totalSum - minPrefixSum
	// Update answer considering concatenation of two arrays
	ans = max(ans, maxSuffixSum+maxPrefixSum)

	// If totalSum > 0, consider using more than two arrays for maximum sum
	if totalSum > 0 {
		// Update answer considering k arrays: prefix + (k-2) * totalSum + suffix
		ans = max(ans, maxSuffixSum+(k-2)*totalSum+maxPrefixSum)
	}

	// Return final answer modulo mod
	return ans % mod
}
