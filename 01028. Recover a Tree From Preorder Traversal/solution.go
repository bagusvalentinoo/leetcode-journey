/**
 * Problem: 1028. Recover a Tree From Preorder Traversal
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func recoverFromPreorder(traversal string) *TreeNode {
	// prv stores nodes at each level to track parent-child relationships
	prv := make(map[int]*TreeNode)
	
	// Parse the root node (level 0) from the traversal string
	_, rootValue := next(&traversal)
	prv[0] = &TreeNode{rootValue, nil, nil}

	// Process remaining nodes in the traversal string
	for len(traversal) > 0 {
		// Parse the next node's level and value
		level, nodeValue := next(&traversal)
		
		// Create new node and store it at its corresponding level
		prv[level] = &TreeNode{nodeValue, nil, nil}

		// Find the parent node at the previous level and attach current node
		if parentNode := prv[level-1]; (*parentNode).Left == nil {
			// If parent's left child is empty, attach as left child
			(*parentNode).Left = prv[level]
		} else {
			// Otherwise, attach as right child
			(*parentNode).Right = prv[level]
		}
	}

	// Return the root node
	return prv[0]
}

func next(traversalString *string) (int, int) {
	// Initialize parsing position, level counter, and value accumulator
	position, level, value := 0, 0, 0

	// Count dashes to determine the node's level in the tree
	for (*traversalString)[position] == '-' {
		position, level = position+1, level+1
	}
	
	// Parse the numeric value after the dashes
	for position < len(*traversalString) && (*traversalString)[position] != '-' {
		// Convert character to digit and build the complete number
		position, value = position+1, value*10+int((*traversalString)[position]-'0')
	}

	// Update the traversal string by removing the processed part
	*traversalString = (*traversalString)[position:]

	// Return the parsed level and value
	return level, value
}
