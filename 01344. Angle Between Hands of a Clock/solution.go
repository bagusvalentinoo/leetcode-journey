/**
 * Problem: 1344. Angle Between Hands of a Clock
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func angleClock(hour int, minutes int) float64 {
	// Calculate the exact hour hand position (including minutes)
	hourHandPosition := float64(hour) + float64(minutes)/60.0

	// Calculate the difference in "hour units" between hour and minute hands
	// Minute hand moves 12x faster than hour hand
	hourDifference := math.Mod(11.0*hourHandPosition, 12.0)

	// Convert to degrees: each hour unit = 30 degrees
	return math.Min(hourDifference, 12-hourDifference) * 30
}
