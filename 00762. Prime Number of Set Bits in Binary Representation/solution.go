/**
 * Problem: 762. Prime Number of Set Bits in Binary Representation
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countPrimeSetBits(left int, right int) int {
	// Create a bitmask for prime numbers up to 32 bits
	// Since max set bits for int in range is 32
	mask := 0

	// Set bits for prime numbers: 2, 3, 5, 7, 11, 13, 17, 19
	mask |= (1 << 19) // 19 is prime
	mask |= (1 << 17) // 17 is prime
	mask |= (1 << 13) // 13 is prime
	mask |= (1 << 11) // 11 is prime
	mask |= (1 << 7)  // 7 is prime
	mask |= (1 << 5)  // 5 is prime
	mask |= (1 << 3)  // 3 is prime
	mask |= (1 << 2)  // 2 is prime

	// Initialize result counter
	count := 0

	// Iterate through each number in the range
	for i := left; i <= right; i++ {
		// Count set bits in current number using built-in function
		current := bits.OnesCount(uint(i))

		// Check if current set bits count is prime using bitmask
		if (mask>>current)&1 == 1 {
			count++
		}
	}

	// Return count
	return count
}
