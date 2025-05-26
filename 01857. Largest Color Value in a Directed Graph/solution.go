/**
 * Problem: 1857. Largest Color Value in a Directed Graph
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 163 ms (Beats 100%)
 */

func largestPathValue(colors string, edges [][]int) int {
	// Number of nodes in the graph
	n := len(colors)
	// Adjacency list representation of the graph
	adjacencyList := make([][]int, n)
	// Track incoming edges for each node
	inDegree := make([]int, n)

	// Build the graph
	for _, edge := range edges {
		from, to := edge[0], edge[1]
		inDegree[to]++
		adjacencyList[from] = append(adjacencyList[from], to)
	}

	// Initialize result to the minimum possible value
	maxColorValue := 1
	// Queue for topological sort
	queue := []int{}

	// Find all nodes with no incoming edges as starting points
	for i, degree := range inDegree {
		if degree == 0 {
			queue = append(queue, i)
		}
	}

	// If no starting nodes found, graph has a cycle
	if len(queue) == 0 {
		return -1
	}

	// DP array to track max color values for each node and color
	colorCounts := make([][]int, n)

	// Initialize color counts for each node
	for i := range n {
		colorCounts[i] = make([]int, 26)
		colorCounts[i][int(colors[i]-'a')] = 1
	}

	// Counter for visited nodes
	visitedCount := 0

	// Perform topological sort
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		visitedCount++

		// Process neighbors
		for _, neighbor := range adjacencyList[current] {
			inDegree[neighbor]--

			// Add to queue when all prerequisites are processed
			if inDegree[neighbor] == 0 {
				queue = append(queue, neighbor)
			}

			// Update color counts for all possible colors
			for color := 0; color < 26; color++ {
				colorGain := 0
				if int(colors[neighbor]-'a') == color {
					colorGain = 1
				}

				colorCounts[neighbor][color] = max(colorCounts[neighbor][color], colorCounts[current][color]+colorGain)
				maxColorValue = max(maxColorValue, colorCounts[neighbor][color])
			}
		}
	}
	
	// If not all nodes were visited, there's a cycle in the graph
	if visitedCount != n {
		return -1
	}

	return maxColorValue
}