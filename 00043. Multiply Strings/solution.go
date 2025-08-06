/**
 * Problem: 43. Multiply Strings
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func multiply(num1 string, num2 string) string {
	// Create new big.Int variables to hold the integer values of num1 and num2
	n1, n2 := new(big.Int), new(big.Int)

	// Set the value of n1 from the string num1 in base 10
	n1.SetString(num1, 10)
	// Set the value of n2 from the string num2 in base 10
	n2.SetString(num2, 10)

	// Multiply n1 and n2, store the result in a new big.Int variable
	result := new(big.Int).Mul(n1, n2)
	
	// Convert the result to a string and return it
	return result.String()
}
