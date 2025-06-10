/**
 * Problem: 3442. Maximum Difference Between Even and Odd Frequency I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxDifference(s string) int {
	// Initialize frequency array for 26 lowercase letters
	freq := [26]int{}

	// Count frequency of each character
	for _, r := range s {
		freq[r-'a']++
	}

	// Track highest odd frequency and lowest even frequency
	maxOddFreq, minEvenFreq := math.MinInt, math.MaxInt

	// Find maximum odd frequency and minimum even frequency
	for _, count := range freq {
		if count == 0 {
			continue
		}
		if count%2 == 0 {
			minEvenFreq = min(minEvenFreq, count)
		} else {
			maxOddFreq = max(maxOddFreq, count)
		}
	}

	// Return the difference between max odd and min even frequencies
	return maxOddFreq - minEvenFreq
}
