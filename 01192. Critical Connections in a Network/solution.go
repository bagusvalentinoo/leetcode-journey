/**
 * Problem: 1192. Critical Connections in a Network
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 38 ms (Beats 100%)
 */

// Declare package-level variables for adjacency list, discovery times, low-link values, counter, and result
var (
	adj   [][]int // Adjacency list representing the graph
	low   []int   // Low-link values for each node
	num   []int   // Discovery times for each node during DFS
	count int     // Counter for discovery time
	ans   [][]int // Stores the critical connections (bridges)
)

// dfs performs Depth-First Search to find bridges in the graph
func dfs(u, par int) {
	count++         // Increment discovery time counter
	num[u] = count  // Set discovery time for node u
	low[u] = count  // Initialize low-link value for node u

	for _, v := range adj[u] { // Iterate over all adjacent nodes of u
		if v == par { // Skip the parent node to avoid traversing back
			continue
		}
		if num[v] == 0 { // If node v is not visited
			dfs(v, u) // Recursively visit v
			low[u] = min(low[u], low[v]) // Update low-link value for u

			// If the lowest reachable vertex from v is after u, then (u, v) is a bridge
			if low[v] > num[u] {
				ans = append(ans, []int{u, v}) // Add the bridge to the result
			}
		} else {
			// If v is already visited, update low-link value for u
			low[u] = min(low[u], num[v])
		}
	}
}

// criticalConnections finds all critical connections (bridges) in the network
func criticalConnections(n int, connections [][]int) [][]int {
	adj = make([][]int, n)      // Initialize adjacency list for n nodes
	low = make([]int, n)        // Initialize low-link values
	num = make([]int, n)        // Initialize discovery times
	count = 0                   // Reset discovery time counter
	ans = make([][]int, 0, n)   // Initialize result slice

	for _, conn := range connections { // Build the adjacency list from connections
		u, v := conn[0], conn[1]
		adj[u] = append(adj[u], v)
		adj[v] = append(adj[v], u)
	}

	// Start DFS from node 0 with no parent
	dfs(0, -1)

	return ans // Return the list of critical connections
}
