/**
 * Problem: 407. Trapping Rain Water II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 11 ms (Beats 100%)
 */

// Cell represents a cell in the height map with its height and coordinates.
type Cell struct {
	height, row, col int
}

// PriorityQueue implements a min-heap for Cell pointers.
type PriorityQueue []*Cell

// Len returns the number of elements in the priority queue.
func (pq PriorityQueue) Len() int { return len(pq) }

// Less compares the heights of two cells to maintain min-heap property.
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].height < pq[j].height }

// Swap exchanges two elements in the priority queue.
func (pq PriorityQueue) Swap(i, j int) { pq[i], pq[j] = pq[j], pq[i] }

// Push adds a new cell to the priority queue.
func (pq *PriorityQueue) Push(x interface{}) {
	*pq = append(*pq, x.(*Cell))
}

// Pop removes and returns the cell with the smallest height from the queue.
func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil
	*pq = old[:n-1]
	
	return item
}

// trapRainWater calculates the total amount of trapped rain water in the height map.
func trapRainWater(heightMap [][]int) int {
	// Get the number of rows in the height map.
	rowCount := len(heightMap)

	// If there are less than 3 rows, no water can be trapped.
	if rowCount < 3 {
		return 0
	}

	// Get the number of columns in the height map.
	colCount := len(heightMap[0])

	// If there are less than 3 columns, no water can be trapped.
	if colCount < 3 {
		return 0
	}

	// visited keeps track of cells that have been processed.
	visited := make([][]bool, rowCount)
	for i := range visited {
		visited[i] = make([]bool, colCount)
	}

	// Initialize the priority queue for boundary cells.
	pq := make(PriorityQueue, 0)
	heap.Init(&pq)

	// Add all boundary cells to the priority queue and mark them as visited.
	for r := 0; r < rowCount; r++ {
		for c := 0; c < colCount; c++ {
			if r == 0 || r == rowCount-1 || c == 0 || c == colCount-1 {
				heap.Push(&pq, &Cell{height: heightMap[r][c], row: r, col: c})
				visited[r][c] = true
			}
		}
	}

	// totalWater accumulates the amount of trapped water.
	totalWater := 0
	// dirs defines the four possible directions to move: up, down, left, right.
	dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	// Process cells in order of increasing height.
	for pq.Len() > 0 {
		cell := heap.Pop(&pq).(*Cell)

		// Explore all neighboring cells.
		for _, dir := range dirs {
			neighborRow, neighborCol := cell.row+dir[0], cell.col+dir[1]
			// Check if the neighbor is within bounds and not visited.
			if neighborRow >= 0 && neighborRow < rowCount && neighborCol >= 0 && neighborCol < colCount && !visited[neighborRow][neighborCol] {
				visited[neighborRow][neighborCol] = true
				neighborHeight := heightMap[neighborRow][neighborCol]

				// If the current cell is higher, water can be trapped.
				if cell.height > neighborHeight {
					totalWater += cell.height - neighborHeight
				}

				// Push the neighbor cell into the priority queue with updated height.
				heap.Push(&pq, &Cell{
					height: max(cell.height, neighborHeight),
					row:    neighborRow,
					col:    neighborCol,
				})
			}
		}
	}

	// Return the total trapped water.
	return totalWater
}
