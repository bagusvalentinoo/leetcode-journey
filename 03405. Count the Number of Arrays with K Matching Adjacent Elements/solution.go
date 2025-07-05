/**
 * Problem: 3405. Count the Number of Arrays with K Matching Adjacent Elements
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Modulo constant for calculations
const (
	MOD = 1e9 + 7
	MX  = 100000
)

var (
	// Precomputed factorials for combination calculations
	factorials    = make([]int64, MX)
	// Precomputed inverse factorials for combination calculations
	inverseFactorials = make([]int64, MX)
)

// Fast exponentiation with modular arithmetic
func qpow(x int64, n int) int64 {
	// Compute x^n mod MOD using binary exponentiation for efficient modular arithmetic
	res := int64(1)

	for n > 0 {
		if n&1 == 1 {
			res = res * x % MOD
		}

		x = x * x % MOD
		n >>= 1
	}

	return res
}

// Initialize factorials and inverse factorials arrays
func initFact() {
	// Check if factorials are already computed to avoid recomputation
	if factorials[0] != 0 {
		return
	}

	// Initialize factorial[0] = 1
	factorials[0] = 1

	// Compute factorials: factorial[i] = i!
	for i := 1; i < MX; i++ {
		factorials[i] = factorials[i-1] * int64(i) % MOD
	}

	// Compute inverse of the largest factorial using Fermat's little theorem
	inverseFactorials[MX-1] = qpow(factorials[MX-1], MOD-2)

	// Compute remaining inverse factorials using the relation: inv[i-1] = inv[i] * i
	for i := MX - 1; i > 0; i-- {
		inverseFactorials[i-1] = inverseFactorials[i] * int64(i) % MOD
	}
}

// Calculate combination C(n,m) using precomputed factorials
func comb(n, m int) int64 {
	return factorials[n] * inverseFactorials[m] % MOD * inverseFactorials[n-m] % MOD
}

// Count arrays with exactly k matching adjacent elements
func countGoodArrays(n, m, k int) int {
	initFact()

	return int(comb(n-1, k) * int64(m) % MOD * qpow(int64(m-1), n-k-1) % MOD)
}
