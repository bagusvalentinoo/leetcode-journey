/**
 * Problem: 3300. Minimum Element After Replacement With Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minElement(nums []int) int {
	// Initialize answer to maximum value to track minimum digit sum
	minimumDigitSum := int(^uint(0) >> 1) // Max int

	// Iterate through each number in the array
	for _, currentNumber := range nums {
		// Calculate sum of digits for current number
		digitSumOfNumber := 0
		temp := currentNumber

		// Extract each digit and sum them
		for temp > 0 {
			digitSumOfNumber += temp % 10
			temp /= 10
		}

		// Update minimum digit sum if current digit sum is smaller
		if digitSumOfNumber < minimumDigitSum {
			minimumDigitSum = digitSumOfNumber
		}
	}

	// Return the smallest digit sum found
	return minimumDigitSum
}
