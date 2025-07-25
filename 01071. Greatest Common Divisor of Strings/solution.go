/**
 * Problem: 1071. Greatest Common Divisor of Strings
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func gcdOfStrings(str1 string, str2 string) string {
	// Helper function to compute the GCD of two integers
	gcd := func(a, b int) int {
		for b != 0 {
			a, b = b, a%b
		}

		return a
	}

	// Check if str1 + str2 equals str2 + str1
	if str1+str2 != str2+str1 {
		return ""
	}

	// Calculate the GCD of the lengths of the two strings
	lengthGCD := gcd(len(str1), len(str2))

	// Return the substring of str1 from 0 to lengthGCD
	return str1[:lengthGCD]
}
