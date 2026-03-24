/**
 * Problem: 1319. Number of Operations to Make Network Connected
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func makeConnected(n int, connections [][]int) int {
	// Initialize parent array for Union-Find
	parent := make([]int, n)

	// Set each node as its own parent initially
	for i := 0; i < n; i++ {
		parent[i] = -1
	}

	// Initially, we need n-1 connections to connect all computers
	remainingConnectionsNeeded := n - 1
	// Count of redundant connections (connections that create cycles)
	redundantConnections := 0

	// Find function with path compression
	var find func(int) int
	find = func(node int) int {
		// If node is its own parent, return it
		if parent[node] == -1 {
			return node
		}

		// Path compression: make the node's parent the root
		parent[node] = find(parent[node])

		// Return the root
		return parent[node]
	}

	// Process each connection
	for _, conn := range connections {
		// Get the two nodes
		nodeA, nodeB := conn[0], conn[1]

		// Find root of both nodes
		rootA, rootB := find(nodeA), find(nodeB)

		// If nodes are in different components, union them
		if rootA != rootB {
			parent[rootB] = rootA
			remainingConnectionsNeeded--
		} else {
			// If nodes are already connected, this is a redundant connection
			redundantConnections++
		}
	}

	// If we have enough redundant connections to connect remaining components
	if remainingConnectionsNeeded <= redundantConnections {
		return remainingConnectionsNeeded
	}

	// Not enough redundant connections
	return -1
}
