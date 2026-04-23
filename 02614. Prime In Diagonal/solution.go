/**
 * Problem: 2614. Prime In Diagonal
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func diagonalPrime(nums [][]int) int {
	// Get the size of the square matrix
	matrixSize := len(nums)

	// Helper function to check if a number is prime
	isPrime := func(num int) bool {
		// Numbers less than 2 are not prime
		if num <= 1 {
			return false
		}

		// Calculate square root for loop bound
		sqrtLimit := int(math.Sqrt(float64(num)))

		// Check divisibility from 2 up to square root
		for divisor := 2; divisor <= sqrtLimit; divisor++ {
			// If divisible, number is not prime
			if num%divisor == 0 {
				return false
			}
		}

		// Number is prime
		return true
	}

	// Track the maximum prime number found
	maxPrimeFound := 0

	// Iterate through each cell in the matrix
	for row := 0; row < matrixSize; row++ {
		for col := 0; col < matrixSize; col++ {
			// Check if cell is on main diagonal or secondary diagonal
			if row == col || row == matrixSize-1-col {
				// Get current cell value
				currentValue := nums[row][col]

				// Update maxPrimeFound if current value is larger and prime
				if currentValue > maxPrimeFound && isPrime(currentValue) {
					maxPrimeFound = currentValue
				}
			}
		}
	}

	// Return the largest prime found, or 0 if none
	return maxPrimeFound
}
