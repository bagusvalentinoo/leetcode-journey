/**
 * Problem: 37. Sudoku Solver
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

// Define constants for Sudoku puzzle dimensions and Dancing Links X constraints
const (
	N           = 9
	Rows        = 9
	Cols        = 9
	Nums        = 9
	BoardSize   = Rows * Cols
	Options     = BoardSize * N
	Constraints = BoardSize * 4
)

// Column represents a constraint column in the Dancing Links X matrix
type Column struct {
	Node
	name int
	size int
}

// Node represents a matrix element in the Dancing Links X structure
type Node struct {
	up, down, left, right *Node
	col                   *Column
	rowID                 int
}

// DLX implements the Dancing Links X algorithm for exact cover problems
type DLX struct {
	head    *Node
	columns []*Column
	answer  []*Node
}

// newDLX creates a new Dancing Links X solver with specified number of columns
func newDLX(numCols int) *DLX {
	// Create header node for circular doubly-linked list
	header := &Node{}
	header.left = header
	header.right = header

	// Initialize DLX structure
	dlx := &DLX{
		head:    header,
		columns: make([]*Column, numCols),
		answer:  []*Node{},
	}

	// Build column headers in circular list
	lastCol := header

	for i := 0; i < numCols; i++ {
		// Create new column with circular vertical links
		col := &Column{name: i}
		col.up = &col.Node
		col.down = &col.Node
		col.left = lastCol
		col.right = header
		lastCol.right = &col.Node
		header.left = &col.Node
		col.col = col
		dlx.columns[i] = col
		lastCol = &col.Node
	}

	return dlx
}

// addRow adds a new row to the matrix with nodes in specified columns
func (dlx *DLX) addRow(rowID int, columns []int) {
	var firstNode *Node

	for _, colIdx := range columns {
		// Get column and create new node
		col := dlx.columns[colIdx]
		node := &Node{col: col, rowID: rowID}

		if firstNode == nil {
			// First node becomes circular list head
			firstNode = node
			node.left = node
			node.right = node
		} else {
			// Insert node into horizontal circular list
			node.left = firstNode.left	
			node.right = firstNode
			firstNode.left.right = node
			firstNode.left = node
		}

		// Insert node into vertical column list
		node.up = col.up
		node.down = &col.Node
		col.up.down = node
		col.up = node
		col.size++
	}
}

// cover removes column and all intersecting rows from the matrix
func (dlx *DLX) cover(col *Column) {
	// Remove column header from horizontal list
	col.Node.right.left = col.Node.left
	col.Node.left.right = col.Node.right

	// Remove all rows that intersect this column
	for rowNode := col.down; rowNode != &col.Node; rowNode = rowNode.down {
		for colNode := rowNode.right; colNode != rowNode; colNode = colNode.right {
			colNode.down.up = colNode.up
			colNode.up.down = colNode.down
			colNode.col.size--
		}
	}
}

// uncover restores column and all intersecting rows to the matrix
func (dlx *DLX) uncover(col *Column) {
	// Restore all rows that intersect this column
	for rowNode := col.up; rowNode != &col.Node; rowNode = rowNode.up {
		for colNode := rowNode.left; colNode != rowNode; colNode = colNode.left {
			colNode.col.size++
			colNode.down.up = colNode
			colNode.up.down = colNode
		}
	}

	// Restore column header to horizontal list
	col.Node.right.left = &col.Node
	col.Node.left.right = &col.Node
}

// search performs recursive backtracking to find exact cover solution
func (dlx *DLX) search(depth int) bool {
	// Base case: all columns covered, solution found
	if dlx.head.right == dlx.head {
		return true
	}

	// Choose column with minimum size (branching heuristic)
	minCol := dlx.head.right.col

	for colNode := dlx.head.right; colNode != dlx.head; colNode = colNode.right {
		if colNode.col.size < minCol.size {
			minCol = colNode.col
		}
	}

	// Cover chosen column
	dlx.cover(minCol)

	// Try each row in the chosen column
	for rowNode := minCol.down; rowNode != &minCol.Node; rowNode = rowNode.down {
		// Add row to partial solution
		dlx.answer = append(dlx.answer, rowNode)

		// Cover all other columns in this row
		for colNode := rowNode.right; colNode != rowNode; colNode = colNode.right {
			dlx.cover(colNode.col)
		}

		// Recursively search for solution
		if dlx.search(depth + 1) {
			return true
		}

		// Backtrack: uncover columns and remove row from solution
		for colNode := rowNode.left; colNode != rowNode; colNode = colNode.left {
			dlx.uncover(colNode.col)
		}

		dlx.answer = dlx.answer[:len(dlx.answer)-1]
	}

	// Uncover column before backtracking
	dlx.uncover(minCol)

	return false
}

// sudokuIndex converts Sudoku coordinates to unique row identifier
func sudokuIndex(row, col, num int) int {
	return row*81 + col*9 + num
}

// solveSudoku solves the Sudoku puzzle using Dancing Links X algorithm
func solveSudoku(board [][]byte) {
	// Create DLX solver with 4 types of constraints
	dlx := newDLX(Constraints)

	// Add rows for each possible cell-number combination
	for row := 0; row < 9; row++ {
		for col := 0; col < 9; col++ {
			for num := 0; num < 9; num++ {
				// Skip if cell is filled and doesn't match current number
				if board[row][col] != '.' && board[row][col] != byte(num+'1') {
					continue
				}
				
				// Create unique row ID and add constraints
				rowID := sudokuIndex(row, col, num)
				dlx.addRow(rowID, []int{
					row*9 + col,                    // Cell constraint
					81 + row*9 + num,               // Row constraint
					162 + col*9 + num,              // Column constraint
					243 + ((row/3)*3+(col/3))*9 + num, // Box constraint
				})
			}
		}
	}

	// Find solution using DLX algorithm
	dlx.search(0)

	// Fill board with solution values
	for _, solutionNode := range dlx.answer {
		rowID := solutionNode.rowID
		row := rowID / 81
		col := (rowID % 81) / 9
		num := (rowID % 9)
		board[row][col] = byte(num + '1')
	}
}
