/**
 * Problem: 3343. Count Number of Balanced Permutations
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 47 ms (Beats 100%)
 */

func countBalancedPermutations(num string) int {
	// Modulo constant for large number calculations
	const mod = 1000000007

	// Get the length of input number
	n := len(num)

	// Count frequency of each digit and calculate total sum
	freq := make([]int, 10)
	totalSum := 0

	for i := 0; i < n; i++ {
		d := int(num[i] - '0')
		freq[d]++
		totalSum += d
	}

	// Calculate number of digits in even and odd positions
	nEven := (n + 1) / 2
	nOdd := n - nEven

	// If sum is odd, balanced permutation is impossible
	if totalSum%2 != 0 {
		return 0
	}

	// Target sum for each half (even and odd positions)
	target := totalSum / 2

	// Precompute factorials and inverse factorials for combinations
	maxN := 80
	fact := make([]int, maxN+1)
	invfact := make([]int, maxN+1)
	fact[0] = 1

	for i := 1; i <= maxN; i++ {
		fact[i] = (fact[i-1] * i) % mod
	}

	invfact[maxN] = modPow(fact[maxN], mod-2, mod)

	for i := maxN; i > 0; i-- {
		invfact[i-1] = (invfact[i] * i) % mod
	}

	// Initialize dynamic programming table
	dp := make([][]int, nEven+1)

	for i := 0; i <= nEven; i++ {
		dp[i] = make([]int, target+1)
	}

	dp[0][0] = 1

	// DP calculation for each digit
	for d := 0; d < 10; d++ {
		newDP := make([][]int, nEven+1)

		for i := 0; i <= nEven; i++ {
			newDP[i] = make([]int, target+1)
		}

		f := freq[d]
		
		// Update DP values considering all possible ways to place digit d
		for c := 0; c <= nEven; c++ {
			for s := 0; s <= target; s++ {
				if dp[c][s] == 0 {
					continue
				}

				// Try placing x instances of digit d in even positions
				for x := 0; x <= f; x++ {
					if c+x > nEven {
						break
					}

					ns := s + d*x

					if ns > target {
						break
					}

					// Calculate combinations and update DP table
					factor := (invfact[x] * invfact[f-x]) % mod
					newDP[c+x][ns] = (newDP[c+x][ns] + dp[c][s]*factor) % mod
				}
			}
		}

		dp = newDP
	}

	// Calculate final answer using factorial for permutations
	ways := dp[nEven][target]
	ans := ways
	ans = (ans * fact[nEven]) % mod
	ans = (ans * fact[nOdd]) % mod

	return ans
}

func modPow(a, b, mod int) int {
	// Calculate (a^b) % mod using binary exponentiation for efficient large number calculations
	result := 1
	a %= mod

	for b > 0 {
		// If current bit of b is 1, multiply result with current power of a
		if b&1 != 0 {
			result = (result * a) % mod
		}

		// Square the current power of a for next iteration
		a = (a * a) % mod
		// Shift b right to check next bit
		b >>= 1
	}

	return result
}