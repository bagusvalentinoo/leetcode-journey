/**
 * Problem: 1588. Sum of All Odd Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumOddLengthSubarrays(arr []int) int {
	// Initialize result accumulator
	totalSum := 0

	// Get length of input array
	arrayLength := len(arr)

	// Iterate through each element in the array
	for i := 0; i < arrayLength; i++ {
		// Total number of subarrays containing arr[i]
		// Formula: (i+1) choices for start * (n-i) choices for end
		totalSubarrays := (i + 1) * (arrayLength - i)

		// Number of odd-length subarrays containing arr[i]
		// For odd lengths, count = ceil(totalSubarrays / 2)
		oddSubarrays := (totalSubarrays + 1) / 2

		// Add contribution of arr[i] to total sum
		totalSum += arr[i] * oddSubarrays
	}

	// Return the total sum of all odd-length subarrays
	return totalSum
}
