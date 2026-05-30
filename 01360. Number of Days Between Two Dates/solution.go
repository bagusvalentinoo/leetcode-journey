/**
 * Problem: 1360. Number of Days Between Two Dates
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func daysBetweenDates(date1 string, date2 string) int {
	// Convert both date strings to Time objects
	firstDate, secondDate := convertStringToDateTime(date1), convertStringToDateTime(date2)

	// Calculate difference in hours and convert to days
	diff := firstDate.Sub(secondDate).Hours() / 24

	// Return absolute difference in days
	return int(math.Abs(diff))
}

// Helper method to convert date string to Time
func convertStringToDateTime(dateString string) time.Time {
	// Extract year from positions 0-3
	year, _ := strconv.Atoi(dateString[0:4])
	// Extract month from positions 5-6
	month, _ := strconv.Atoi(dateString[5:7])
	// Extract day from positions 8-end
	day, _ := strconv.Atoi(dateString[8:10])

	// Create and return Time object
	return time.Date(year, time.Month(month), day, 0, 0, 0, 0, time.UTC)
}
