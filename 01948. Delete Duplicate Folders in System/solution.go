/**
 * Problem: 1949. Delete Duplicate Folders in System
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 83 ms (Beats 100%)
 */

// Trie represents a node in the trie data structure
type Trie struct {
	serial   string           // Serialized representation of the current node's subtree structure
	children map[string]*Trie // Map of folder names to their corresponding child nodes
}

func deleteDuplicateFolder(paths [][]string) [][]string {
	// Initialize root node of the trie with empty children map
	root := &Trie{children: make(map[string]*Trie)}
	
	// Build trie tree from all given paths
	for _, path := range paths {
		currentNode := root // Start from root for each path

		// Traverse each folder in the current path
		for _, folderName := range path {
			// Create new node if folder doesn't exist in current level
			if _, exists := currentNode.children[folderName]; !exists {
				currentNode.children[folderName] = &Trie{children: make(map[string]*Trie)}
			}

			// Move to the child node
			currentNode = currentNode.children[folderName]
		}
	}

	// Map to count frequency of each serialized representation
	serialFrequency := make(map[string]int)
	
	// Post-order DFS traversal to calculate serialized representation of each node structure
	var constructSerial func(*Trie)
	constructSerial = func(node *Trie) {
		// Base case: leaf nodes don't need serialization
		if len(node.children) == 0 {
			return
		}
		
		// Collect serialized representations of all children
		childSerials := make([]string, 0, len(node.children))
		for folderName, childNode := range node.children {
			// Recursively construct child's serial first (post-order)
			constructSerial(childNode)
			// Create serialized format: "folderName(childSerial)"
			childSerials = append(childSerials, folderName+"("+childNode.serial+")")
		}
		
		// Sort to ensure consistent serialization regardless of map iteration order
		sort.Strings(childSerials)
		// Join all child serials to create current node's serial
		node.serial = strings.Join(childSerials, "")
		// Increment frequency count for this serialization
		serialFrequency[node.serial]++
	}

	constructSerial(root)

	// Result slice to store valid folder paths
	result := make([][]string, 0)
	// Current path being constructed during traversal
	currentPath := make([]string, 0)
	
	// Traverse trie and collect non-duplicate folder paths
	var collectValidPaths func(*Trie)
	collectValidPaths = func(node *Trie) {
		// Skip nodes with duplicate serializations (frequency > 1)
		if serialFrequency[node.serial] > 1 {
			return
		}

		// Add current path to result if it's not empty (skip root)
		if len(currentPath) > 0 {
			// Create deep copy of current path to avoid reference issues
			pathCopy := make([]string, len(currentPath))
			copy(pathCopy, currentPath)
			result = append(result, pathCopy)
		}

		// Recursively process all children
		for folderName, childNode := range node.children {
			// Add current folder to path
			currentPath = append(currentPath, folderName)
			// Recursively process child
			collectValidPaths(childNode)
			// Backtrack: remove current folder from path
			currentPath = currentPath[:len(currentPath)-1]
		}
	}

	collectValidPaths(root)

	return result
}
