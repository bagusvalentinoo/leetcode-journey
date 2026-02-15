/**
 * Problem: 67. Add Binary
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func addBinary(a string, b string) string {
	// Convert binary strings to big.Int
	first := new(big.Int)
	second := new(big.Int)

	// Parse binary strings
	first.SetString(a, 2)
	second.SetString(b, 2)

	// Add the two big.Int values
	sum := new(big.Int)
	sum.Add(first, second)

	// Convert result back to binary string
	return sum.Text(2)
}
