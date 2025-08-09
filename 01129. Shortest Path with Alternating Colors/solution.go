/**
 * Problem: 1129. Shortest Path with Alternating Colors
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// PathPoint represents a node in the path along with the color of the last edge used to reach it.
// node: the current node index
// isRed: true if the last edge used was red, false if blue
type PathPoint struct {
	node  byte
	isRed bool
}

// fillConnections populates the adjacency list for the given edges.
// connections: adjacency list to fill
// edges: list of edges where each edge is [from, to]
func fillConnections(connections [][]byte, edges [][]int) {
	for _, edge := range edges {
		connections[edge[0]] = append(connections[edge[0]], byte(edge[1]))
	}
}

func shortestAlternatingPaths(n int, redEdges [][]int, blueEdges [][]int) []int {
	// redConnections and blueConnections store adjacency lists for red and blue edges respectively
	redConnections := make([][]byte, n)
	blueConnections := make([][]byte, n)

	// Fill adjacency lists for red and blue edges
	fillConnections(redConnections, redEdges)
	fillConnections(blueConnections, blueEdges)

	// cur holds the current BFS frontier, starting from node 0 with both red and blue as last edge
	cur := []PathPoint{{0, true}, {0, false}}

	// next will hold the next BFS frontier
	var next []PathPoint

	// result stores the shortest path length to each node, initialized to -1 (unreachable)
	result := make([]int, n)

	// Set all nodes except the start node to -1
	for i := 1; i < n; i++ {
		result[i] = -1
	}

	// BFS traversal with alternating edge colors
	for depth := 1; len(cur) != 0; cur, next, depth = next, cur[:0], depth+1 {
		for _, pathPoint := range cur {
			// Select the opposite color connections for the next step
			connections := redConnections
			if pathPoint.isRed {
				connections = blueConnections
			}
			// If there are outgoing edges of the required color
			if connections[pathPoint.node] != nil {
				for _, nextNode := range connections[pathPoint.node] {
					// If this node hasn't been reached before, record the shortest path length
					if result[nextNode] == -1 {
						result[nextNode] = depth
					}
					// Add the next node to the BFS frontier, toggling the edge color
					next = append(next, PathPoint{nextNode, !pathPoint.isRed})
				}
				// Mark these edges as visited by setting to nil
				connections[pathPoint.node] = nil
			}
		}
	}

	return result
}
