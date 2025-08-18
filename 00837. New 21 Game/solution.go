/**
 * Problem: 837. New 21 Game
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func new21Game(n int, k int, maxPts int) float64 {
	// If k is 0 or n is large enough to always win, return 1.0 directly.
	if k == 0 || n >= k-1+maxPts {
		return 1.0
	}

	// Initialize a slice to store probabilities for each possible sum modulo maxPts.
	probabilities := make([]float64, maxPts)
	// The probability of starting at 0 is 1.
	probabilities[0] = 1.0

	// windowSum keeps track of the sum of probabilities in the current window.
	windowSum := 1.0
	// result accumulates the total probability of winning.
	result := 0.0

	// Iterate through all possible sums from 1 to n.
	for currentSum := 1; currentSum <= n; currentSum++ {
		// Calculate the probability for the current sum.
		currentProb := windowSum / float64(maxPts)

		// If currentSum is less than k, add currentProb to windowSum for future calculations.
		if currentSum < k {
			windowSum += currentProb
		} else {
			// If currentSum is at least k, add currentProb to the result as a winning probability.
			result += currentProb
		}

		// If the window exceeds maxPts, subtract the probability that falls out of the window.
		if currentSum >= maxPts {
			windowSum -= probabilities[currentSum%maxPts]
		}

		// Store the current probability in the probabilities slice.
		probabilities[currentSum%maxPts] = currentProb
	}

	// Return the total probability of winning.
	return result
}
