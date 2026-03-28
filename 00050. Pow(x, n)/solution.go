/**
 * Problem: 50. Pow(x, n)
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func myPow(x float64, n int) float64 {
	// Base case: any number to power 0 is 1
	if n == 0 {
		return 1
	}

	// Handle negative exponent by taking reciprocal
	if n < 0 {
		// Convert x to its reciprocal
		x = 1 / x
		// Make exponent positive (use long to avoid overflow with int.MinValue)
		exp := int64(-n)

		// Return result of positive exponent
		return myPowPositive(x, exp)
	}

	// Return result of positive exponent
	return myPowPositive(x, int64(n))
}

// Helper function for positive exponents
func myPowPositive(x float64, n int64) float64 {
	// Base case: any number to power 0 is 1
	if n == 0 {
		return 1
	}

	// Recursively calculate half power
	half := myPowPositive(x, n/2)

	// If n is even: result = half^2
	if n%2 == 0 {
		return half * half
	}

	// If n is odd: result = half^2 * x
	return half * half * x
}
