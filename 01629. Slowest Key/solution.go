/**
 * Problem: 1629. Slowest Key
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func slowestKey(releaseTimes []int, keysPressed string) byte {
	// Initialize longest duration with first keypress duration
	longestDuration := releaseTimes[0]

	// Initialize answer with first pressed key
	answerKey := keysPressed[0]

	// Iterate through each subsequent keypress
	for i := 1; i < len(releaseTimes); i++ {
		// Compute current keypress duration as difference of consecutive release times
		duration := releaseTimes[i] - releaseTimes[i-1]

		// Update answer if duration is longer, or equal with lexicographically larger key
		if duration > longestDuration || (duration == longestDuration && keysPressed[i] > answerKey) {
			// Record the new longest duration
			longestDuration = duration
			// Record the key holding the longest duration
			answerKey = keysPressed[i]
		}
	}

	// Return the key with the longest duration
	return answerKey
}
