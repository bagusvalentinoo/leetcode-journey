/**
 * Problem: 3591. Check if Any Element Has Prime Frequency
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Helper function to check if a number is prime
func isPrime(num int) bool {
	// 0 and 1 are not prime numbers
	if num == 0 || num == 1 {
		return false
	}
	// 2 is the only even prime number
	if num == 2 {
		return true
	}

	// Start checking divisibility from 2
	divisor := 2

	// Check all potential divisors up to the number itself
	for num > divisor {
		// If divisible, number is not prime
		if num%divisor == 0 {
			return false
		}

		// Move to next divisor
		divisor++
	}

	// No divisors found, number is prime
	return true
}

// Helper function to count frequency of a specific number in the array
func countFrequency(numArr []int, num int) int {
	// Initialize frequency counter
	frequency := 0

	// Iterate through array to count occurrences
	for _, element := range numArr {
		// Increment count if element matches target number
		if element == num {
			frequency++
		}
	}

	// Return total frequency
	return frequency
}

func checkPrimeFrequency(nums []int) bool {
	// Map to store already processed numbers
	frequencyMap := make(map[int]int)

	// Iterate through each element in the array
	for index := 0; index < len(nums); index++ {
		// Check if current number has been processed before
		if _, exists := frequencyMap[nums[index]]; !exists {
			// Count frequency of current number in the entire array
			frequencyValue := countFrequency(nums, nums[index])

			// If frequency is prime, return true immediately
			if isPrime(frequencyValue) {
				return true
			}

			// Store processed number to avoid re-processing
			frequencyMap[nums[index]] = frequencyValue
		}
	}

	// No prime frequencies found
	return false
}
