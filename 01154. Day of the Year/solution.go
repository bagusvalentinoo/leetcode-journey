/**
 * Problem: 1154. Day of the Year
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func dayOfYear(date string) int {
	// Parse the input date string using the standard date format "2006-01-02".
	// The time.Parse function returns a time.Time object and an error.
	// Here, we ignore the error for simplicity since the input is assumed valid.
	t, _ := time.Parse(time.DateOnly, date)
	
	// Return the day of the year for the parsed date.
	// The YearDay method returns an integer representing the day count in the year.
	return t.YearDay()
}
