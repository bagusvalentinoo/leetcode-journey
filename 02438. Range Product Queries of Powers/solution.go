/**
 * Problem: 2438. Range Product Queries of Powers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func productQueries(n int, queries [][]int) []int {
	// Define the modulo constant as required by the problem statement
	const mod = 1000000007

	// Initialize a slice to store the powers of 2 present in the binary representation of n
	var powersOfTwo []int
	currentPower := 1

	// Decompose n into its binary representation and collect the corresponding powers of 2
	for n > 0 {
		// If the least significant bit is set, append the current power of 2
		if n%2 == 1 {
			powersOfTwo = append(powersOfTwo, currentPower)
		}
		// Shift n to the right by 1 (divide by 2)
		n /= 2
		// Move to the next power of 2
		currentPower *= 2
	}

	// Get the number of powers of 2 found
	numPowers := len(powersOfTwo)
	// Initialize a 2D slice to store the product results for all possible ranges
	rangeProducts := make([][]int, numPowers)

	// Precompute the product for every possible range in powersOfTwo
	for i := range rangeProducts {
		rangeProducts[i] = make([]int, numPowers)
		product := 1

		// Calculate the product for the range starting at i and ending at j
		for j := i; j < numPowers; j++ {
			product = (product * powersOfTwo[j]) % mod
			rangeProducts[i][j] = product
		}
	}

	// Initialize the answer slice to store the results for each query
	answers := make([]int, len(queries))

	// For each query, retrieve the precomputed product from rangeProducts
	for i, query := range queries {
		answers[i] = rangeProducts[query[0]][query[1]]
	}

	// Return the final answers for all queries
	return answers
}
