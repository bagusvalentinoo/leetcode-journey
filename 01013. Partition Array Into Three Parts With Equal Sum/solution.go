/**
 * Problem: 1013. Partition Array Into Three Parts With Equal Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canThreePartsEqualSum(arr []int) bool {
	// Get the length of the array
	size := len(arr)
	// Calculate the total sum of all elements
	var totalSum int

	for i := 0; i < size; i++ {
		totalSum += arr[i]
	}

	// If total sum is not divisible by 3, we can't partition equally
	if totalSum%3 != 0 {
		return false
	}

	// Use two pointers approach from both ends
	left, right := 0, size-1
	// Initialize sums for left and right partitions
	var leftSum, rightSum = arr[0], arr[size-1]

	// Find the first partition from the left
	for left < size-1 && leftSum != totalSum/3 {
		left++
		leftSum += arr[left]
	}

	// Find the first partition from the right
	for right > 0 && rightSum != totalSum/3 {
		right--
		rightSum += arr[right]
	}

	// Check if there's room for a middle partition
	return left+1 < right
}