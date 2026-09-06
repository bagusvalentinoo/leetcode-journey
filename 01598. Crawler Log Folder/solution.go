/**
 * Problem: 1598. Crawler Log Folder
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minOperations(logs []string) int {
	// Track current depth from main folder
	depth := 0

	// Process each log operation
	for _, log := range logs {
		// Stay in same folder: no depth change
		if log == "./" {
			continue
		}
		// Move to parent: decrement depth but never below main folder
		if log == "../" {
			if depth > 0 {
				depth--
			}
		} else {
			// Move to child folder: increment depth
			depth++
		}
	}

	// Return depth as operations needed to go back to main folder
	return depth
}
