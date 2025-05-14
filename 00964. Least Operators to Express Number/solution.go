/**
 * Problem: 964. Least Operators to Express Number
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func leastOpsExpressTarget(x int, target int) int {
	// Uses dynamic programming to find the minimum number of operations needed
	// pos tracks the cost when we add x^k terms, neg tracks cost when we subtract x^k terms
	pos := 0
	neg := 0
	k := 0

	var posPrev, negPrev int

	for target > 0 {
		// Extract the current digit in base x representation
		cur := target % x
		target /= x
		
		if k > 0 {
			// Calculate minimum cost for both strategies:
			// 1) Adding cur*x^k: min(cur*x^k + previous pos, (cur+1)*x^k - previous neg)
			// 2) Subtracting (x-cur)*x^k: min((x-cur)*x^k + previous pos, (x-cur-1)*x^k + previous neg)
			pos2 := min(cur*k+pos, (cur+1)*k+neg)
			neg2 := min((x-cur)*k+pos, (x-cur-1)*k+neg)
			pos, neg = pos2, neg2
		} else {
			// Base case: for least significant digit, calculate direct costs
			// For 0th power, we need to account for special case of division cost
			pos = cur * 2
			neg = (x - cur) * 2
		}
		
		// Store values for final calculation
		posPrev, negPrev = pos, neg
		k++
	}

	// Choose the minimum between using addition or using subtraction
	// Subtract 1 since one operation is already counted in the initialization
	return min(posPrev, k+negPrev) - 1
}

func min(a, b int) int {
	// Returns the smaller of two integers
	if a < b {
		return a
	}

	// If a is not less than b, return b
	return b
}
