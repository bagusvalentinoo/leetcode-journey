/**
 * Problem: 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func gcd(a, b int) int {
	// Loop until the second number becomes zero
	for b != 0 {
		// Update 'a' to 'b' and 'b' to the remainder of 'a' divided by 'b'
		a, b = b, a%b
	}

	// If the result 'a' is negative, return its absolute value
	if a < 0 {
		return -a
	}

	// Return the greatest common divisor
	return a
}

func minOperations(nums []int) int {
	// Get the length of the input array
	n := len(nums)

	// Initialize a counter for the number of ones in the array
	ones := 0

	// Count the number of ones in the array
	for _, x := range nums {
		if x == 1 {
			ones++
		}
	}

	// If there are any ones, return the number of non-one elements
	if ones > 0 {
		return n - ones
	}

	// Initialize the gcd accumulator
	g := 0

	// Compute the gcd of all elements in the array
	for _, x := range nums {
		g = gcd(g, x)
	}

	// If the gcd of all elements is greater than 1, return -1
	if g > 1 {
		return -1
	}

	// Define a large constant to represent infinity
	const INF = int(1e9)

	// Initialize the best length to infinity
	best := INF

	// Iterate over all possible starting indices
	for i := 0; i < n; i++ {
		// Initialize the current gcd for the subarray
		cur := 0

		// Iterate over all possible ending indices
		for j := i; j < n; j++ {
			// Update the gcd for the current subarray
			cur = gcd(cur, nums[j])

			// If the gcd becomes 1, update the best length
			if cur == 1 {
				if length := j - i + 1; length < best {
					best = length
				}

				// Break out of the loop as we found a valid subarray
				break
			}
		}
	}

	// Return the total operations needed to make all elements 1
	return (best - 1) + (n - 1)
}
