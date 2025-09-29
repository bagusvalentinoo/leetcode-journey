/**
 * Problem: 1250. Check If It Is a Good Array
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isGoodArray(nums []int) bool {
	// If the array has only one element, check if it is 1.
	if len(nums) == 1 {
		return nums[0] == 1
	}

	// Initialize gcdResult with the first element of the array.
	gcdResult := nums[0]

	// Iterate through the array to compute the GCD of all elements.
	for i := 1; i < len(nums); i++ {
		// Update gcdResult by computing the GCD of the current element and gcdResult.
		gcdResult = gcd(nums[i], gcdResult)
		
		// If at any point the GCD becomes 1, return true immediately.
		if gcdResult == 1 {
			return true
		}
	}

	// If the loop completes and GCD is not 1, return false.
	return false
}

// gcd computes the greatest common divisor of two integers using recursion.
// It uses the Euclidean algorithm for efficient computation.
func gcd(a, b int) int {
	// If both numbers are equal, return either as the GCD.
	if a == b {
		return a
	}
	// Ensure the smaller number is the first argument for consistency.
	if a > b {
		return gcd(b, a)
	}
	// If the smaller number is 1, GCD is 1.
	if a == 1 {
		return 1
	}
	// If the larger number is divisible by the smaller, return the smaller.
	if b%a == 0 {
		return a
	}

	// Recursively compute GCD using the remainder.
	return gcd(b%a, a)
}
