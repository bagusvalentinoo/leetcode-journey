/**
 * Problem: 3842. Toggle Light Bulbs
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func toggleLightBulbs(bulbs []int) []int {
	// Get number of bulbs to process
	n := len(bulbs)

	// Create boolean array to track toggle state (index 0 unused)
	freq := make([]bool, 101)

	// Toggle each bulb that appears in the array
	for i := 0; i < n; i++ {
		// If bulb is currently on, turn it off
		if freq[bulbs[i]] {
			freq[bulbs[i]] = false
		} else {
			// If bulb is currently off, turn it on
			freq[bulbs[i]] = true
		}
	}

	// Slice to store bulbs that are on
	ans := make([]int, 0)

	// Check all possible bulbs from 1 to 100
	for i := 0; i < 101; i++ {
		// If bulb is on, add to result
		if freq[i] {
			ans = append(ans, i)
		}
	}

	// Return the bulbs that are on
	return ans
}
