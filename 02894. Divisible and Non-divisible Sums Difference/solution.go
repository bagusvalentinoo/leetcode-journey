/**
 * Problem: 2894. Divisible and Non-divisible Sums Difference
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func differenceOfSums(n int, m int) int {
	// Initialize variables to track divisible sum, non-divisible sum, and result
	divisibleSum, nonDivisibleSum, result := 0, 0, 0

	// Iterate from 1 to n (inclusive)
	for i := 1; i <= n; i++ {
		// If i is divisible by m, add to divisibleSum
		if i%m == 0 {
			divisibleSum = divisibleSum + i
		} else {
			// If i is not divisible by m, add to nonDivisibleSum
			nonDivisibleSum = nonDivisibleSum + i
		}
	}

	// Calculate the difference between non-divisible and divisible sums
	result = nonDivisibleSum - divisibleSum

	return result
}