/**
 * Problem: 1042. Flower Planting With No Adjacent
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func gardenNoAdj(n int, paths [][]int) []int {
	// Create adjacency list representation of the graph
	// Each index represents a garden (0-indexed), containing list of connected gardens
	graph := make([][]int, n)

	// Build the graph by processing each path (edge between gardens)
	for _, path := range paths {
		// Convert from 1-indexed to 0-indexed garden numbers
		u, v := path[0]-1, path[1]-1

		// Add bidirectional edges since paths are undirected
		graph[u] = append(graph[u], v)
		graph[v] = append(graph[v], u)
	}
	
	// Initialize result array to store flower type for each garden
	// flowers[i] will contain the flower type (1-4) for garden i
	flowers := make([]int, n)
	
	// Process each garden to assign a flower type
	for i := 0; i < n; i++ {
		// Track which flower types are already used by neighboring gardens
		// Index 0 is unused, indices 1-4 represent flower types 1-4
		used := [5]bool{}

		// Mark flower types used by adjacent gardens as unavailable
		for _, neighbor := range graph[i] {
			used[flowers[neighbor]] = true
		}

		// Find the first available flower type (1-4) for current garden
		for f := 1; f <= 4; f++ {
			// If this flower type is not used by any neighbor
			if !used[f] {
				// Assign this flower type to current garden
				flowers[i] = f
				
				// Break since we found a valid flower type
				break
			}
		}
	}

	// Return the array containing flower type assignments
	return flowers
}
