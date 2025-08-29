/**
 * Problem: 1185. Day of the Week
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */


func dayOfTheWeek(day int, month int, year int) string {
	// If the month is January or February, adjust month and year for Zeller's congruence
	if month < 3 {
		month += 12 // January and February are counted as months 13 and 14 of the previous year
		year -= 1   // Decrement year since months are shifted
	}

	// Array of day names starting from Saturday as per Zeller's congruence
	days := [7]string{"Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"}

	// Extract the last two digits of the year
	k := year % 100   

	// Extract the century part of the year
	j := year / 100   

	// Calculate the day of the week using Zeller's congruence formula
	h := (day + (13*(month+1))/5 + k + (k/4) + (j/4) + 5*j) % 7

	// Return the corresponding day name
	return days[h]
}
