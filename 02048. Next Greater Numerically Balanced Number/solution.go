/**
 * Problem: 2048. Next Greater Numerically Balanced Number
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// nextBeautifulNumber finds the next greater numerically balanced number
// after the given input `n`.
func nextBeautifulNumber(n int) int {
	// Generate all possible numerically balanced numbers.
	beautifulNumbers := generator()

	// Iterate through the generated numbers to find the next greater one.
	for _, bn := range beautifulNumbers {
		if n < bn {
			return bn
		}
	}

	// Return 0 if no greater number is found (should not happen).
	return 0
}

// generator generates a list of numerically balanced numbers.
func generator() []int {
	// Initialize a slice to store the balanced numbers.
	numbers := make([]int, 0)

	// Add predefined balanced numbers to the slice.
	numbers = append(numbers, 1, 22, 122, 212, 221, 333, 1224444)
	numbers = append(numbers, 1333, 3133, 3313, 3331, 4444)
	numbers = append(numbers, 14444, 41444, 44144, 44414, 44441, 55555)

	// Generate additional balanced numbers by modifying the base number 33333.
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			// Skip cases where the same digit is subtracted twice.
			if i == j {
				continue
			}

			// Subtract specific powers of 10 to create new balanced numbers.
			base := 33333
			base -= 1 * int(math.Pow10(i) + math.Pow10(j))
			numbers = append(numbers, base)
		}
	}

	// Add more predefined balanced numbers to the slice.
	numbers = append(numbers, 155555, 515555, 551555, 555155, 555515, 555551, 666666)

	// Generate additional balanced numbers by modifying the base number 333333.
	for i := 0; i < 6; i++ {
		for j := 0; j < 6; j++ {
			for k := 0; k < 6; k++ {
				// Skip cases where the same digit is subtracted multiple times.
				if i == j || i == k || j == k {
					continue
				}

				// Subtract specific powers of 10 to create new balanced numbers.
				base := 333333
				base -= 1 * int(math.Pow10(i) + math.Pow10(j))
				base -= 2 * int(math.Pow10(k))

				numbers = append(numbers, base)
			}
		}
	}

	// Generate additional balanced numbers by modifying the base number 444444.
	for i := 0; i < 6; i++ {
		for j := 0; j < 6; j++ {
			// Skip cases where the same digit is subtracted twice.
			if i == j {
				continue
			}

			// Subtract specific powers of 10 to create new balanced numbers.
			base := 444444
			base -= 2 * int(math.Pow10(i) + math.Pow10(j))
			numbers = append(numbers, base)
		}
	}

	// Sort the generated balanced numbers in ascending order.
	sort.Ints(numbers)

	// Return the sorted list of balanced numbers.
	return numbers
}
