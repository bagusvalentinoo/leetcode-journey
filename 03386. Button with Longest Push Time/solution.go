/**
 * Problem: 3386. Button with Longest Push Time
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func buttonWithLongestTime(events [][]int) int {
	// Initialize variables to store button and duration for the longest press
	longestButton, longestDuration := events[0][0], events[0][1]

	// Iterate through each event starting from the second one
	for eventIndex := 1; eventIndex < len(events); eventIndex++ {
		// Get current event
		currentEvent := events[eventIndex]

		// Calculate duration of current press (time difference from previous event)
		pressDuration := currentEvent[1] - events[eventIndex-1][1]

		// If duration is greater than current maximum, update
		if pressDuration > longestDuration {
			longestButton = currentEvent[0]
			longestDuration = pressDuration
		} else if pressDuration == longestDuration && currentEvent[0] < longestButton {
			// If duration equals current maximum and button number is smaller, update
			longestButton = currentEvent[0]
		}
	}

	// Return the button number with the longest press time
	return longestButton
}
