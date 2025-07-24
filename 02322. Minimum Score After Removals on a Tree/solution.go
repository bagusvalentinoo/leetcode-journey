/**
 * Problem: 2322. Minimum Score After Removals on a Tree
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

func calc(part1, part2, part3 int) int {
	// Calculate the minimum score after removing two edges
	return max(part1, max(part2, part3)) - min(part1, min(part2, part3))
}

func minimumScore(nums []int, edges [][]int) int {
	// Number of nodes in the tree
	n := len(nums)
	// Adjacency list to represent the tree
	adj := make([][]int, n)

	// Build the adjacency list from the edges
	for _, e := range edges {
		adj[e[0]] = append(adj[e[0]], e[1])
		adj[e[1]] = append(adj[e[1]], e[0])
	}

	// sum[i] stores the XOR sum of the subtree rooted at node i
	sum := make([]int, n)
	// in[i] stores the entry time of node i in DFS traversal
	in := make([]int, n)
	// out[i] stores the exit time of node i in DFS traversal
	out := make([]int, n)
	// cnt is a counter for DFS traversal time
	cnt := 0

	// dfs traverses the tree to calculate subtree XOR sums and entry/exit times
	var dfs func(node, parent int)
	dfs = func(node, parent int) {
		in[node] = cnt // mark entry time
		cnt++
		sum[node] = nums[node] // initialize subtree XOR sum with node value

		for _, neighbor := range adj[node] {
			if neighbor == parent {
				continue // skip parent to avoid cycling
			}

			dfs(neighbor, node) // DFS on child
			sum[node] ^= sum[neighbor] // accumulate XOR sum from child subtree
		}

		out[node] = cnt // mark exit time
	}

	// Start DFS from root node 0 with no parent
	dfs(0, -1)

	// Initialize result with maximum possible integer value
	res := math.MaxInt32
	
	// Try all pairs of nodes (u, v) to remove two edges and partition the tree
	for u := 1; u < n; u++ {
		for v := u + 1; v < n; v++ {
			// Check if v is in the subtree of u
			if in[v] > in[u] && in[v] < out[u] {
				// Partition: root excluding u, u excluding v, v subtree
				res = min(res, calc(sum[0]^sum[u], sum[u]^sum[v], sum[v]))
			} else if in[u] > in[v] && in[u] < out[v] {
				// Partition: root excluding v, v excluding u, u subtree
				res = min(res, calc(sum[0]^sum[v], sum[v]^sum[u], sum[u]))
			} else {
				// Partition: root excluding u and v, u subtree, v subtree
				res = min(res, calc(sum[0]^sum[u]^sum[v], sum[u], sum[v]))
			}
		}
	}
	
	// Return the minimum score found
	return res
}
