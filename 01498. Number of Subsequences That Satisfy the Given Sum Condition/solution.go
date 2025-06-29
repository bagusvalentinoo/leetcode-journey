/**
 * Problem: 1498. Number of Subsequences That Satisfy the Given Sum Condition
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 17 ms (Beats 100%)
 */

func numSubseq(nums []int, target int) int {
	// Define modulo constant for result calculation
	const MOD = int(1e9 + 7)

	// Sort array to enable two-pointer approach
	sort.Ints(nums)

	// Get array length
	arrayLength := len(nums)
	
	// Precompute powers of 2 to avoid repeated calculations
	powersOfTwo := make([]int, arrayLength)
	powersOfTwo[0] = 1

	// Calculate powers of 2 up to array length
	for i := 1; i < arrayLength; i++ {
		powersOfTwo[i] = (powersOfTwo[i-1] * 2) % MOD
	}

	// Initialize result counter
	result := 0
	
	// Set up two pointers for sliding window
	leftPointer, rightPointer := 0, arrayLength-1

	// Use two-pointer technique to find valid subsequences
	for leftPointer <= rightPointer {
		if nums[leftPointer]+nums[rightPointer] <= target {
			// Add count of valid subsequences starting at leftPointer
			result = (result + powersOfTwo[rightPointer-leftPointer]) % MOD
			leftPointer++
		} else {
			rightPointer--
		}
	}

	return result
}
