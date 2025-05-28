/**
 * Problem: 3372. Maximize the Number of Target Nodes After Connecting Trees I
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 54 ms (Beats 100%)
 */

func maxTargetNodes(edges1 [][]int, edges2 [][]int, k int) []int {
	// Function to count target nodes within distance k from a given node
	var dfs func(node, parent int, adjacencyList [][]int, distance int) int

	dfs = func(node, parent int, adjacencyList [][]int, distance int) int {
		// Base case: if distance is negative, return 0 (no more nodes to count)
		if distance < 0 {
			return 0
		}

		// Count the current node
		nodeTotal := 1 

		// Recursively count nodes within distance from each child
		for _, neighbor := range adjacencyList[node] {
			if neighbor == parent {
				continue // Skip the parent to avoid cycles
			}

			// Add nodes from subtrees, decreasing distance by 1
			nodeTotal += dfs(neighbor, node, adjacencyList, distance-1)
		}

		return nodeTotal
	}

	// Function to build count array for each possible root node
	build := func(edges [][]int, distance int) []int {
		// Get the total number of nodes from the edges
		numNodes := len(edges) + 1
		
		// Initialize the adjacency list to represent the tree
		adjList := make([][]int, numNodes)

		// Build the adjacency list from the undirected edges
		for _, edge := range edges {
			u, v := edge[0], edge[1]
			adjList[u] = append(adjList[u], v)
			adjList[v] = append(adjList[v], u)
		}

		// Array to store count of target nodes for each potential root
		targetCounts := make([]int, numNodes)

		// Calculate target node count for each node as root
		for i := 0; i < numNodes; i++ {
			targetCounts[i] = dfs(i, -1, adjList, distance)
		}

		return targetCounts
	}

	// Calculate total number of nodes in each tree
	numNodes := len(edges1) + 1

	// Get target node counts for both trees
	countsTree1 := build(edges1, k)
	// For tree2, use k-1 since we need to account for the connection edge
	countsTree2 := build(edges2, k-1)
	
	// Find maximum count in the second tree
	maxTree2Count := 0
	for _, count := range countsTree2 {
		if count > maxTree2Count {
			maxTree2Count = count
		}
	}

	// Calculate total target nodes for each possible connection point
	result := make([]int, numNodes)
	for i := 0; i < numNodes; i++ {
		result[i] = countsTree1[i] + maxTree2Count
	}
	
	return result
}