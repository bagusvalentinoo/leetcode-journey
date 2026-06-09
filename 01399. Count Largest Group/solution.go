/**
 * Problem: 1399. Count Largest Group
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countLargestGroup(n int) int {
	// Hash map to store frequency of each digit sum
	digitSumFrequency := make(map[int]int)

	// Track the maximum frequency found
	maxFrequency := 0

	// Calculate digit sums for all numbers from 1 to n
	for currentNum := 1; currentNum <= n; currentNum++ {
		// Calculate sum of digits for current number
		digitSum := 0
		tempNum := currentNum

		// Extract each digit and add to sum
		for tempNum > 0 {
			// Add last digit to sum
			digitSum += tempNum % 10
			// Remove last digit
			tempNum /= 10
		}

		// Increment frequency for this digit sum
		digitSumFrequency[digitSum]++

		// Update maximum frequency if current is larger
		if digitSumFrequency[digitSum] > maxFrequency {
			maxFrequency = digitSumFrequency[digitSum]
		}
	}

	// Count how many digit sums have the maximum frequency
	maxFrequencyCount := 0

	// Iterate through all entries in the hash map
	for _, frequency := range digitSumFrequency {
		// If current frequency equals max frequency, increment count
		if frequency == maxFrequency {
			maxFrequencyCount++
		}
	}

	// Return number of groups with the largest size
	return maxFrequencyCount
}
