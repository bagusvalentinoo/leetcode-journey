/**
 * Problem: 1130. Minimum Cost Tree From Leaf Values
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mctFromLeafValues(arr []int) int {
	// Initialize the total cost to 0
	totalCost := 0

	// Continue until only one element remains in the array
	for len(arr) > 1 {
		// Start by assuming the minimum product is between the first two elements
		minIndex := 1
		minProduct := arr[0] * arr[1]

		// Iterate through the array to find the pair with the minimum product
		for i := 2; i < len(arr); i++ {
			product := arr[i-1] * arr[i]

			// Update the minimum product and its index if a smaller product is found
			if product < minProduct {
				minIndex = i
				minProduct = product
			}
		}

		// Replace the smaller of the two elements in the minimum product pair with the larger one
		if arr[minIndex-1] > arr[minIndex] {
			arr[minIndex] = arr[minIndex-1]
		}

		// Remove the element at minIndex-1 by shifting elements left
		copy(arr[minIndex-1:], arr[minIndex:])
		arr = arr[:len(arr)-1]

		// Add the minimum product to the total cost
		totalCost += minProduct
	}

	// Return the total cost after all merges
	return totalCost
}
