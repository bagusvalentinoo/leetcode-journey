/**
 * Problem: 3342. Find Minimum Time to Reach Last Room II
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 33 ms (Beats 100%)
 */

// node represents a position in the grid with time and cost information
type node struct {
	r, c  int // row and column
	t     int // current time
	cost  int // cost to move
}

// direction vectors for up, right, down, left
var d = []int{0, 1, 0, -1, 0}

// minTimeToReach finds the minimum time to reach the bottom-right corner
// using Dijkstra's algorithm with a priority queue
func minTimeToReach(grid [][]int) int {
	n, m := len(grid), len(grid[0])
	seen := make([][]bool, n)
	for i := range seen {
		seen[i] = make([]bool, m)
	}

	// Initialize priority queue with starting position
	seen[0][0] = true
	h := &IntHeap{}
	heap.Init(h)
	heap.Push(h, &node{r: 0, c: 0, t: 0, cost: 1})

	for h.Len() > 0 {
		// Get node with minimum time
		top := heap.Pop(h).(*node)
		r, c, t, cost := top.r, top.c, top.t, top.cost
		nextCost := 3 - top.cost // Toggle between 1 and 2

		// Try all four directions
		for i := 0; i < 4; i++ {
			nr, nc := r+d[i], c+d[i+1]

			// Skip if out of bounds or already visited
			if isOutOfBounds(grid, nr, nc) || seen[nr][nc] {
				continue
			}

			// Calculate arrival time (current cost + max of current time or required time)
			arrive := cost + max(t, grid[nr][nc])

			// Return if destination reached
			if nr == n-1 && nc == m-1 {
				return arrive
			}

			// Add new position to queue
			heap.Push(h, &node{r: nr, c: nc, t: arrive, cost: nextCost})
			seen[nr][nc] = true
		}
	}

	return -1 // No path found
}

// isOutOfBounds checks if a position is outside the grid
func isOutOfBounds(grid [][]int, r, c int) bool {
	return r < 0 || c < 0 || r >= len(grid) || c >= len(grid[0])
}

// IntHeap is a min-heap of nodes prioritized by time
type IntHeap []*node

func (h IntHeap) Len() int { return len(h) }

// Less compares nodes by their time value
func (h IntHeap) Less(i, j int) bool {
	return h[i].t < h[j].t
}

func (h IntHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

// Push adds a node to the heap
func (h *IntHeap) Push(x any) {
	*h = append(*h, x.(*node))
}

// Pop removes and returns the minimum time node
func (h *IntHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}