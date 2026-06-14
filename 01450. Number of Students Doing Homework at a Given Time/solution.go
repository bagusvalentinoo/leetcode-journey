/**
 * Problem: 1450. Number of Students Doing Homework at a Given Time
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func busyStudent(startTime []int, endTime []int, queryTime int) int {
	// Initialize counter for busy students
	busyCount := 0

	// Iterate through each student's time range
	for studentIndex := 0; studentIndex < len(startTime); studentIndex++ {
		// Check if queryTime falls within the student's interval (inclusive)
		if startTime[studentIndex] <= queryTime && endTime[studentIndex] >= queryTime {
			busyCount++
		}
	}

	// Return total number of students studying at queryTime
	return busyCount
}
