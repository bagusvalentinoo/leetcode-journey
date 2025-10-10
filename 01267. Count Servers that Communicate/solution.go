/**
 * Problem: 1267. Count Servers that Communicate
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countServers(grid [][]int) int {
	// Get the number of rows and columns in the grid
	n, m := len(grid), len(grid[0])

	// Initialize the answer to store the count of communicating servers
	ans := 0

	// rowCount stores the number of servers in each column
	rowCount := make([]int, m)

	// lastServerCol stores the column index of the last server in each row, or -1 if not applicable
	lastServerCol := make([]int, n)

	// Set all values in lastServerCol to -1 initially
	for i := range lastServerCol {
		lastServerCol[i] = -1
	}

	// Iterate through each row to count servers and update rowCount and lastServerCol
	for r := 0; r < n; r++ {
		// serverCount stores the number of servers in the current row
		serverCount := 0

		for c := 0; c < m; c++ {
			// If there is a server at grid[r][c]
			if grid[r][c] == 1 {
				serverCount++
				rowCount[c]++
				lastServerCol[r] = c
			}
		}

		// If there is more than one server in the row, add to answer and reset lastServerCol
		if serverCount != 1 {
			ans += serverCount
			lastServerCol[r] = -1
		}
	}

	// Check for servers that are the only one in their row but share a column with others
	for r := 0; r < n; r++ {
		if lastServerCol[r] != -1 && rowCount[lastServerCol[r]] > 1 {
			ans++
		}
	}

	// Return the total count of communicating servers
	return ans
}
