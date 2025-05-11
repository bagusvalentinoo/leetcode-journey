func isCompleteTree(root *TreeNode) bool {
	// A complete binary tree has no gaps in node positions up to the last level
	if root == nil {
		return true
	}

	// Use BFS to traverse level by level
	queue := []*TreeNode{root}
	seenNull := false

	for len(queue) > 0 {
		// Process the front node in the queue
		node := queue[0]
		queue = queue[1:]

		// Mark when we encounter a nil node
		if node == nil {
			seenNull = true
		} else {
			// If we see a node after seeing nil, tree is not complete
			if seenNull {
				return false
			}

			// Add children to queue (including nil nodes)
			queue = append(queue, node.Left)
			queue = append(queue, node.Right)
		}
	}

	// If we processed all nodes without finding issues, the tree is complete
	return true
}