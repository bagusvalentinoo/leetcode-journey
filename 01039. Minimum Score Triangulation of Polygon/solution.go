/**
 * Problem: 1039. Minimum Score Triangulation of Polygon
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minScoreTriangulation(A []int) int {
	// Get the number of vertices in the polygon
	n := len(A)
	
	// Create a 2D DP table where dp[i][j] represents the minimum score
	// to triangulate the polygon from vertex i to vertex j
	dp := make([][]int, n)

	// Initialize each row of the DP table
	for i := range dp {
		dp[i] = make([]int, n)
	}

	// Iterate through all possible lengths of sub-polygons (starting from 3 vertices)
	// length represents the number of vertices in the current sub-polygon
	for length := 3; length <= n; length++ {
		// For each possible starting position i of the sub-polygon
		for i := 0; i <= n-length; i++ {
			// Calculate the ending position j of the sub-polygon
			j := i + length - 1
			
			// Initialize with a large value (infinity) to find minimum
			dp[i][j] = int(1e9)
			
			// Try all possible middle vertices k to form triangles with vertices i and j
			// k must be between i and j (exclusive) to form a valid triangle
			for k := i + 1; k < j; k++ {
				// Calculate the score of triangle formed by vertices i, k, j
				score := A[i] * A[k] * A[j]
				
				// Update dp[i][j] with minimum of current value and
				// the sum of: left sub-polygon cost + right sub-polygon cost + current triangle score
				dp[i][j] = min(dp[i][j], dp[i][k]+dp[k][j]+score)
			}
		}
	}

	// Return the minimum score to triangulate the entire polygon (from vertex 0 to n-1)
	return dp[0][n-1]
}
