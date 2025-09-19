/**
 * Problem: 2197. Replace Non-Coprime Numbers in Array
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// SIZE defines the size of the lookup table for GCD calculation optimization.
const SIZE = 64

// LUT is a lookup table to store precomputed GCD values for numbers less than SIZE.
var LUT [SIZE][SIZE]uint8

// init initializes the LUT with GCD values for all pairs (i, j) where i, j < SIZE.
func init() {
	for i := uint8(1); i < SIZE; i++ {
		LUT[i][i] = i // GCD of a number with itself is the number.

		for j := uint8(i + 1); j < SIZE; j++ {
			r := j % i // Compute remainder.

			if r == 0 {
				LUT[i][j] = i // If i divides j, GCD is i.
			} else {
				LUT[i][j] = LUT[r][i] // Use previously computed GCD.
			}

			LUT[j][i] = LUT[i][j] // GCD is symmetric.
		}
	}
}

// GCD computes the greatest common divisor of a and b using the LUT for small values.
func GCD(a, b int) int {
	for b != 0 {
		if a < SIZE && b < SIZE {
			return int(LUT[a][b]) // Use LUT if both numbers are small.
		}
		a, b = b, a%b // Euclidean algorithm.
	}

	return a // Return the GCD.
}

// replaceNonCoprimes replaces adjacent non-coprime numbers in the array with their LCM.
func replaceNonCoprimes(nums []int) []int {
	top := -1 // Initialize stack pointer.

	for _, value := range nums {
		curr := value // Current value to process.

		// Merge with previous numbers while not coprime.
		for top != -1 {
			gcd := GCD(nums[top], curr) // Compute GCD with top of stack.

			if gcd == 1 {
				break // Stop if coprime.
			}

			curr = nums[top] * curr / gcd // Merge using LCM.
			top-- // Pop the stack.
		}

		top++ // Push the merged/current value onto the stack.
		nums[top] = curr
	}

	return nums[:top+1] // Return the processed array.
}
