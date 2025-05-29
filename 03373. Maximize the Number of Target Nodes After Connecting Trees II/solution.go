/**
 * Problem: 3373. Maximize the Number of Target Nodes After Connecting Trees II
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 55 ms (Beats 100%)
 */

func maxTargetNodes(edges1 [][]int, edges2 [][]int) []int {
	// Get the number of nodes in each tree
	nodeCount1, nodeCount2 := len(edges1)+1, len(edges2)+1

	// Initialize adjacency lists for both trees
	graph1, graph2 := make([][]int, nodeCount1), make([][]int, nodeCount2)

	// Pre-allocate capacity for adjacency lists in first tree
	for i := 0; i < nodeCount1; i++ {
		graph1[i] = make([]int, 0, 2)
	}

	// Pre-allocate capacity for adjacency lists in second tree
	for i := 0; i < nodeCount2; i++ {
		graph2[i] = make([]int, 0, 2)
	}

	// Build adjacency list for the first tree
	for _, edge := range edges1 {
		from, to := edge[0], edge[1]

		graph1[from] = append(graph1[from], to)
		graph1[to] = append(graph1[to], from)
	}

	// Build adjacency list for the second tree
	for _, edge := range edges2 {
		from, to := edge[0], edge[1]
		
		graph2[from] = append(graph2[from], to)
		graph2[to] = append(graph2[to], from)
	}

	// Get parity and count of nodes in each parity for first tree
	parity1, count1 := bfs(nodeCount1, graph1)
	// Get parity and count of nodes in each parity for second tree
	_, count2 := bfs(nodeCount2, graph2)

	// Find the best parity count from the second tree
	bestParityCount := count2[0]
	if count2[1] > bestParityCount {
		bestParityCount = count2[1]
	}

	// Calculate result for each possible connection point
	result := make([]int, nodeCount1)
	for i := 0; i < nodeCount1; i++ {
		result[i] = count1[parity1[i]] + bestParityCount
	}

	return result
}

func bfs(nodeCount int, graph [][]int) ([]int, [2]int) {
	// Track parity (even/odd distance) of each node
	parity := make([]int, nodeCount)
	// Count of nodes in each parity group
	countByParity := [2]int{}
	// Track visited nodes
	visited := make([]bool, nodeCount)
	// Queue for BFS traversal
	queue := make([]int, nodeCount)
	head, tail := 0, 0

	// Start BFS from node 0
	queue[tail] = 0
	tail++

	visited[0] = true
	countByParity[0] = 1

	// Process BFS queue
	for head < tail {
		node := queue[head]
		head++
		nodeParity := parity[node]

		// Process all neighbors
		for _, neighbor := range graph[node] {
			if !visited[neighbor] {
				visited[neighbor] = true

				// Neighbor has opposite parity
				neighborParity := nodeParity ^ 1

				parity[neighbor] = neighborParity
				countByParity[neighborParity]++
				
				queue[tail] = neighbor
				tail++
			}
		}
	}

	return parity, countByParity
}