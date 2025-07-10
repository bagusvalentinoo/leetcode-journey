/**
 * Problem: 3440. Reschedule Meetings for Maximum Free Time II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxFreeTime(eventTime int, startTime []int, endTime []int) int {
	// Get the number of meetings
	numMeetings := len(startTime)
	
	// Track which meetings can be rescheduled (moved outside their original slots)
	canReschedule := make([]bool, numMeetings)
	
	// Maximum free time if we process meetings from left to right
	maxFreeTimeFromLeft := 0
	// Maximum free time if we process meetings from right to left  
	maxFreeTimeFromRight := 0

	// Process each meeting to determine rescheduling possibilities
	for i := 0; i < numMeetings; i++ {
		// Current meeting duration
		meetingDuration := endTime[i] - startTime[i]
		
		// Check if current meeting can fit in the accumulated free time from left
		if meetingDuration <= maxFreeTimeFromLeft {
			canReschedule[i] = true
		}

		// Update maximum free time from left side
		if i == 0 {
			// For first meeting, free time is from start of event to meeting start
			maxFreeTimeFromLeft = max(maxFreeTimeFromLeft, startTime[i])
		} else {
			// For subsequent meetings, free time is gap between previous meeting end and current meeting start
			maxFreeTimeFromLeft = max(maxFreeTimeFromLeft, startTime[i]-endTime[i-1])
		}

		// Process meetings from right to left (reverse order)
		rightIndex := numMeetings - i - 1
		meetingDurationFromRight := endTime[rightIndex] - startTime[rightIndex]
		
		// Check if current meeting (from right) can fit in accumulated free time from right
		if meetingDurationFromRight <= maxFreeTimeFromRight {
			canReschedule[rightIndex] = true
		}

		// Update maximum free time from right side
		if i == 0 {
			// For last meeting, free time is from meeting end to event end
			maxFreeTimeFromRight = max(maxFreeTimeFromRight, eventTime-endTime[numMeetings-1])
		} else {
			// For preceding meetings, free time is gap between current meeting end and next meeting start
			maxFreeTimeFromRight = max(maxFreeTimeFromRight, startTime[numMeetings-i]-endTime[rightIndex])
		}
	}

	// Find the maximum possible free time by checking each position
	maxPossibleFreeTime := 0

	for i := 0; i < numMeetings; i++ {
		// Determine the left boundary (start of available time slot)
		leftBoundary := 0
		if i != 0 {
			leftBoundary = endTime[i-1]
		}

		// Determine the right boundary (end of available time slot)
		rightBoundary := eventTime
		if i != numMeetings-1 {
			rightBoundary = startTime[i+1]
		}

		// Calculate maximum free time at this position
		if canReschedule[i] {
			// If meeting can be rescheduled, entire slot becomes free time
			maxPossibleFreeTime = max(maxPossibleFreeTime, rightBoundary-leftBoundary)
		} else {
			// If meeting cannot be rescheduled, subtract meeting duration from slot
			meetingDuration := endTime[i] - startTime[i]
			maxPossibleFreeTime = max(maxPossibleFreeTime, rightBoundary-leftBoundary-meetingDuration)
		}
	}
	
	return maxPossibleFreeTime
}
