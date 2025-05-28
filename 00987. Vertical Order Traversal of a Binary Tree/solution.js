/**
 * Problem: 987. Vertical Order Traversal of a Binary Tree
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Vertical traversal of a binary tree
 *
 * @param {TreeNode} root - Root node
 *
 * @returns {number[][]} - Nodes grouped by vertical position
 */
const verticalTraversal = (root) => {
  // Return empty array if tree is empty
  if (!root) return []

  // Store nodes by their coordinates (column, row)
  const nodesByColumn = new Map()

  // Recursive function to traverse the tree and map nodes by position
  const traverseTree = (node, column, row) => {
    if (!node) return
    // Initialize column map if it doesn't exist
    if (!nodesByColumn.has(column)) nodesByColumn.set(column, new Map())
    // Initialize row array if it doesn't exist
    if (!nodesByColumn.get(column).has(row))
      nodesByColumn.get(column).set(row, [])

    // Add current node value to its position
    nodesByColumn.get(column).get(row).push(node.val)

    // Traverse left (decrease column, increase row)
    traverseTree(node.left, column - 1, row + 1)
    // Traverse right (increase column, increase row)
    traverseTree(node.right, column + 1, row + 1)
  }

  // Start traversal from the root at position (0,0)
  traverseTree(root, 0, 0)

  // Sort columns from left to right
  const sortedColumns = new Map(
    [...nodesByColumn.entries()].sort((a, b) => a[0] - b[0])
  )
  const result = []

  // Process each column
  sortedColumns.forEach((rowsMap) => {
    const columnValues = []
    // Sort rows from top to bottom
    const sortedRows = new Map(
      [...rowsMap.entries()].sort((a, b) => a[0] - b[0])
    )

    // Process nodes in each row
    sortedRows.forEach((values) => {
      // Sort values in same position
      values.sort((a, b) => a - b)
      columnValues.push(...values)
    })

    // Add column values to result
    result.push(columnValues)
  })

  return result
}
