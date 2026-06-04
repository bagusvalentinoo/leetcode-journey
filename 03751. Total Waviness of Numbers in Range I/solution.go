/**
 * Problem: 3751. Total Waviness of Numbers in Range I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Maximum value limit for array size
const MAX = 100005

// DP array to store waviness count for each number
var dp [MAX]int

// Prefix sum array to efficiently calculate range sums
var prefixSum [MAX]int

// init function runs automatically to precompute waviness values
func init() {
	// Precompute waviness for all numbers from 100 to MAX-1
	for number := 100; number < MAX; number++ {
		// Extract last digit (units place)
		lastDigit := number % 10
		// Extract middle digit (tens place)
		middleDigit := (number / 10) % 10
		// Extract first digit (hundreds place)
		firstDigit := (number / 100) % 10

		// Initialize wave point flag to 0 (false)
		isWavePoint := 0

		// Check if middle digit is a wave peak (greater than both neighbors)
		// or a wave valley (less than both neighbors)
		if middleDigit > int(math.Max(float64(firstDigit), float64(lastDigit))) ||
			middleDigit < int(math.Min(float64(firstDigit), float64(lastDigit))) {
			// Set flag to 1 (true) if condition is satisfied
			isWavePoint = 1
		}

		// DP recurrence: waviness of current number = waviness of number without last digit + wave check
		dp[number] = dp[number/10] + isWavePoint
		// Build prefix sum for range queries
		prefixSum[number] = prefixSum[number-1] + dp[number]
	}
}

func totalWaviness(startNumber int, endNumber int) int {
	// Returns total waviness sum for numbers in range [startNumber, endNumber]
	return prefixSum[endNumber] - prefixSum[startNumber-1]
}
