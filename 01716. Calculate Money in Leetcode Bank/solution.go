/**
 * Problem: 1716. Calculate Money in Leetcode Bank
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func totalMoney(n int) int {
	// Calculate the number of complete weeks in the given days
	weeks := n / 7

	// Calculate the remaining days after accounting for complete weeks
	remainingDays := n % 7

	// Compute the total money saved during the complete weeks
	// Each week starts with an incremented base value
	fullWeeksSum := weeks*28 + 7*(weeks*(weeks-1)/2)

	// Compute the total money saved during the remaining days
	// Remaining days start from the base value of the next week
	remainingSum := remainingDays*(1+weeks) + (remainingDays*(remainingDays-1)/2)

	// Return the total money saved by summing up both parts
	return fullWeeksSum + remainingSum
}
