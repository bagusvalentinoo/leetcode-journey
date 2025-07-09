/**
 * Problem: 3439. Reschedule Meetings for Maximum Free Time I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxFreeTime(eventTime int, k int, startTime []int, endTime []int) int {
	// Get the number of meetings
	numMeetings := len(startTime)
	
	// Track the maximum free time found
	maxFreeTimePeriod := 0
	
	// Track the total duration of meetings in the current sliding window
	totalMeetingDuration := 0

	// Iterate through each meeting to find the optimal window for cancellation
	for currentMeetingIndex := 0; currentMeetingIndex < numMeetings; currentMeetingIndex++ {
		// Add the current meeting's duration to the sliding window
		totalMeetingDuration += endTime[currentMeetingIndex] - startTime[currentMeetingIndex]

		// Determine the left boundary of the free time period
		var leftBoundary int
		if currentMeetingIndex <= k-1 {
			// If we haven't filled the sliding window yet, start from time 0
			leftBoundary = 0
		} else {
			// Otherwise, start from the end of the meeting that's k positions back
			leftBoundary = endTime[currentMeetingIndex-k]
		}

		// Determine the right boundary of the free time period
		var rightBoundary int
		if currentMeetingIndex == numMeetings-1 {
			// If this is the last meeting, extend to the end of the event
			rightBoundary = eventTime
		} else {
			// Otherwise, extend to the start of the next meeting
			rightBoundary = startTime[currentMeetingIndex+1]
		}

		// Calculate the potential free time if we cancel k meetings in this window
		potentialFreeTime := rightBoundary - leftBoundary - totalMeetingDuration
		
		// Update the maximum free time if this window is better
		if potentialFreeTime > maxFreeTimePeriod {
			maxFreeTimePeriod = potentialFreeTime
		}
		
		// Remove the oldest meeting from the sliding window once we have k meetings
		if currentMeetingIndex >= k-1 {
			oldestMeetingIndex := currentMeetingIndex - k + 1
			totalMeetingDuration -= endTime[oldestMeetingIndex] - startTime[oldestMeetingIndex]
		}
	}

	return maxFreeTimePeriod
}
