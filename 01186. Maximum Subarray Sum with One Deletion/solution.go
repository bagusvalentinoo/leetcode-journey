/**
 * Problem: 1186. Maximum Subarray Sum with One Deletion
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumSum(arr []int) int {
	// Initialize the result (ans), max subarray sum ending here without deletion (maxEnd),
	// and max subarray sum ending here with one deletion allowed (maxEndWithDeletion)
	ans, maxEnd, maxEndWithDeletion := arr[0], arr[0], arr[0]

	// Iterate through the array starting from the second element
	for i := 1; i < len(arr); i++ {
		// Update maxEndWithDeletion:
		// - maxEndWithDeletion + arr[i]: extend previous subarray with one deletion
		// - arr[i]: start new subarray from current element
		// - maxEnd: delete current element (use previous maxEnd)
		maxEndWithDeletion = max(maxEndWithDeletion+arr[i], arr[i], maxEnd)
		// Update maxEnd:
		// - maxEnd + arr[i]: extend previous subarray
		// - arr[i]: start new subarray from current element
		maxEnd = max(maxEnd+arr[i], arr[i])
		// Update the answer with the maximum of current ans, maxEnd, and maxEndWithDeletion
		ans = max(ans, maxEnd, maxEndWithDeletion)
	}

	// Return the maximum subarray sum with at most one deletion
	return ans
}
