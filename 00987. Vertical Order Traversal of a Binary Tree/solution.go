/**
 * Problem: 987. Vertical Order Traversal of a Binary Tree
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Represents a node in the traversal with its position
type item struct {
	node     *TreeNode
	row, col int
}

func verticalTraversal(root *TreeNode) [][]int {
	// Final result to return
	var result [][]int

	// Map to store values by column
	columnMap := make(map[int][]int)
	// Track column boundaries
	minCol, maxCol := 1<<63-1, -1<<63

	// Queue for level-order traversal
	var queue []item

	// Start with root node at position (0,0)
	queue = append(queue, item{
		node: root,
		row:  0,
		col:  0,
	})

	for len(queue) > 0 {
		levelSize := len(queue)
		// Map to store nodes at current level by column
		levelColumns := make(map[int][]int)

		for i := 0; i < levelSize; i++ {
			// Update column boundaries
			minCol = min(minCol, queue[i].col-1)
			maxCol = max(maxCol, queue[i].col+1)

			// Add current node to its column in level map
			levelColumns[queue[i].col] = append(levelColumns[queue[i].col], queue[i].node.Val)

			// Add left child to queue
			if queue[i].node.Left != nil {
				queue = append(queue, item{
					node: queue[i].node.Left,
					row:  queue[i].row + 1,
					col:  queue[i].col - 1,
				})
			}

			// Add right child to queue
			if queue[i].node.Right != nil {
				queue = append(queue, item{
					node: queue[i].node.Right,
					row:  queue[i].row + 1,
					col:  queue[i].col + 1,
				})
			}
		}

		// Sort nodes in each column and add to column map
		for col, nodes := range levelColumns {
			sort.Ints(nodes)
			columnMap[col] = append(columnMap[col], nodes...)
		}

		// Break if no more nodes to process
		if len(queue) == levelSize {
			break
		}

		// Remove processed nodes from queue
		queue = queue[levelSize:]
	}

	// Build result array by column order
	for col := minCol; col <= maxCol; col++ {
		if len(columnMap[col]) > 0 {
			result = append(result, columnMap[col])
		}
	}

	return result
}

// Returns the minimum of two integers
func min(a, b int) int {
	// If a is less than b, return a; otherwise return b
	if a < b {
		return a
	}

	return b
}

// Returns the maximum of two integers
func max(a, b int) int {
	// If a is greater than b, return a; otherwise return b
	if a > b {
		return a
	}

	return b
}