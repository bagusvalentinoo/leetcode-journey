/**
 * Problem: 3607. Power Grid Maintenance
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 30 ms (Beats 100%)
 */

// DSU (Disjoint Set Union) structure to manage connected components
type DSU struct {
	// Array to store parent of each node
	parents []int
	// Array to store size of each component
	count []int
}

// Find function to find the root of a node with path compression
func (d *DSU) Find(x int) int {
	// If the node is its own parent, return it
	if x == d.parents[x] {
		return x
	}

	// Recursively find the root and compress the path
	d.parents[x] = d.Find(d.parents[x])

	return d.parents[x]
}

// Union function to merge two components
func (d *DSU) Union(x, y int) {
	// Find the roots of both nodes
	px, py := d.Find(x), d.Find(y)

	// If roots are different, merge the components
	if px != py {
		// Attach smaller tree under larger tree
		if d.count[px] >= d.count[py] {
			d.parents[py] = px
			d.count[px] += d.count[py]
		} else {
			d.parents[px] = py
			d.count[py] += d.count[px]
		}
	}
}

// Constructor function to initialize a new DSU
func newDSU(c int) DSU {
	// Create DSU with size c+1 (1-based indexing)
	dsu := DSU{
		parents: make([]int, c+1),
		count:   make([]int, c+1),
	}

	// Initialize each node as its own parent and size as 1
	for i := 1; i <= c; i++ {
		dsu.parents[i] = i
		dsu.count[i] = 1
	}

	return dsu
}

// Function to process queries on the power grid
func processQueries(c int, connections [][]int, queries [][]int) []int {
	// Initialize DSU for the given number of nodes
	dsu := newDSU(c)

	// Union all connections to form initial components
	for _, conn := range connections {
		dsu.Union(conn[0], conn[1])
	}

	// Create adjacency lists for each component
	graphs := make([][]int, c+1)
	// Array to store the parent of each node
	parents := make([]int, c+1)

	// Populate the graphs and parents arrays
	for i := 1; i <= c; i++ {
		// Find the root of the current node
		parent := dsu.Find(i)
		parents[i] = parent

		// Initialize the component list if not already done
		if graphs[parent] == nil {
			graphs[parent] = make([]int, 0)
		}

		// Add the node to its component
		graphs[parent] = append(graphs[parent], i)
	}

	// Array to track offline nodes
	offlineMap := make([]bool, c+1)
	// Result array to store query results
	result := make([]int, 0, len(queries))

	// Process each query
	for _, query := range queries {
		// Extract the query type and node ID
		id := query[1]

		switch query[0] {
		// Query type 1: Find an online node in the component
		case 1:
			// If the node is online, return it
			if !offlineMap[id] {
				result = append(result, id)
			} else {
				// Otherwise, find an online node in the component
				root := parents[id]
				component := graphs[root]

				// Search for the first online node in the component
				foundIndex := -1
				for i, member := range component {
					if !offlineMap[member] {
						foundIndex = i
						break
					}
				}

				// If no online node is found, clear the component
				if foundIndex == -1 {
					graphs[root] = []int{}
					result = append(result, -1)
				} else {
					// Otherwise, return the first online node
					onlineMember := component[foundIndex]
					graphs[root] = component[foundIndex:]
					result = append(result, onlineMember)
				}
			}
		// Query type 2: Mark a node as offline
		case 2:
			offlineMap[id] = true
		}
	}

	return result
}
