/**
 * Problem: 1625. Lexicographically Smallest String After Applying Operations
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findLexSmallestString(s string, a int, b int) string {
	// Get the length of the input string
	n := len(s)

	// Initialize the result with the original string
	res := s

	// Concatenate the string with itself to simulate rotations
	s = s + s

	// Calculate the greatest common divisor of b and n
	g := gcd(b, n)

	// Define a helper function to perform the addition operation
	add := func(t []byte, start int) {
		// Initialize variables to track the minimum value and times to add
		minVal, times := 10, 0

		// Get the original digit at the starting position
		original := int(t[start] - '0')

		// Iterate through all possible additions (0 to 9)
		for i := 0; i < 10; i++ {
			// Calculate the new digit after addition
			added := (original + i*a) % 10

			// Update the minimum value and times if a smaller value is found
			if added < minVal {
				minVal, times = added, i
			}
		}

		// Apply the addition operation to all relevant positions
		for i := start; i < n; i += 2 {
			t[i] = byte('0' + (int(t[i]-'0')+times*a)%10)
		}
	}

	// Iterate through all possible rotations based on the GCD
	for i := 0; i < n; i += g {
		// Extract the substring for the current rotation
		t := []byte(s[i : i+n])

		// Apply the addition operation to odd indices
		add(t, 1)

		// If b is odd, apply the addition operation to even indices
		if b%2 != 0 {
			add(t, 0)
		}

		// Convert the modified byte slice back to a string
		tStr := string(t)

		// Update the result if the new string is lexicographically smaller
		if tStr < res {
			res = tStr
		}
	}

	// Return the lexicographically smallest string
	return res
}

func gcd(a, b int) int {
	// Continue looping until the remainder (b) becomes zero
	for b != 0 {
		// Update 'a' to the value of 'b' and 'b' to the remainder of 'a' divided by 'b'
		a, b = b, a%b
	}

	// Return the greatest common divisor (GCD), which is the final value of 'a'
	return a
}
