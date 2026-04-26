/**
 * Problem: 1560. Most Visited Sector in a Circular Track
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mostVisited(n int, rounds []int) []int {
	// Get the starting sector of the first round
	startSector := rounds[0]

	// Get the ending sector of the last round
	endSector := rounds[len(rounds)-1]

	// Slice to store the most visited sectors
	visitedSectors := make([]int, 0)

	// Check each sector from 1 to n
	for sector := 1; sector <= n; sector++ {
		// Condition 1: No wrap around (start ≤ end) and sector is between start and end
		// Condition 2: Wrap around (start > end) and sector is either ≥ start or ≤ end
		if (sector >= startSector && sector <= endSector && startSector <= endSector) ||
			(startSector > endSector && (sector >= startSector || sector <= endSector)) {
			// Add sector to result if it's in the visited range
			visitedSectors = append(visitedSectors, sector)
		}
	}

	// Return the slice of most visited sectors
	return visitedSectors
}
