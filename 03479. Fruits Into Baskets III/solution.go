/**
 * Problem: 3479. Fruits Into Baskets III
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 22 ms (Beats 100%)
 */

func numOfUnplacedFruits(fruits []int, baskets []int) int {
	// Get the number of baskets
	basketCount := len(baskets)
	// Initialize segTreeSize to find the next power of 2 greater than basketCount for segment tree
	segTreeSize := 1

	// Find the smallest power of 2 that is greater than or equal to basketCount
	for segTreeSize <= basketCount {
		segTreeSize <<= 1 // Left shift by 1 (multiply by 2)
	}

	// Create segment tree array with size 2*segTreeSize (standard segment tree size)
	segTree := make([]int, segTreeSize<<1)

	// Initialize leaf nodes of segment tree with basket capacities
	for i := 0; i < basketCount; i++ {
		segTree[segTreeSize+i] = baskets[i] // Place baskets at leaf positions
	}

	// Build segment tree by calculating maximum values for internal nodes
	for i := segTreeSize - 1; i > 0; i-- {
		segTree[i] = max(segTree[2*i], segTree[2*i+1]) // Parent = max of children
	}

	// Counter for unplaced fruits
	count := 0

	// Process each fruit
	for _, fruit := range fruits {
		// Start from root of segment tree
		index := 1

		// Check if any basket can hold this fruit (root contains maximum capacity)
		if segTree[index] < fruit {
			count++ // Increment unplaced fruit counter
			continue // Skip to next fruit
		}

		// Traverse down the segment tree to find a suitable basket
		for index < segTreeSize {
			// Check if left subtree has a basket that can hold the fruit
			if segTree[2*index] >= fruit {
				// Go to left child
				index = 2 * index
			} else {
				// Go to right child (left subtree cannot hold the fruit)
				index = 2*index + 1
			}
		}

		// Mark the selected basket as used by setting capacity to -1
		segTree[index] = -1

		// Update segment tree by propagating changes upward
		for index > 1 {
			index >>= 1 // Move to parent node (divide by 2)
			// Recalculate parent value as maximum of its children
			segTree[index] = max(segTree[2*index], segTree[2*index+1])
		}
	}

	// Return the number of fruits that couldn't be placed
	return count
}
