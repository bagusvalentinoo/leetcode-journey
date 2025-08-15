/**
 * Problem: 1144. Decrease Elements To Make Array Zigzag
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func movesToMakeZigzag(nums []int) int {
	// Create a copy of the input slice to avoid modifying the original when calculating even-indexed moves
	clone := slices.Clone(nums)
	// Get the length of the input slice
	n := len(nums)
	// Initialize the total moves needed for the odd-indexed zigzag pattern
	oddMoves := 0

	// Iterate over odd indices to calculate moves for the odd-indexed zigzag pattern
	for i := 1; i < n; i += 2 {
		// If the current element is not less than its left neighbor, calculate the cost to decrease it
		if nums[i] <= nums[i-1] {
			cost := nums[i-1] - nums[i] + 1
			oddMoves += cost
		}
		// If the current element is not less than its right neighbor, calculate the cost to decrease it
		if i+1 < n && nums[i] <= nums[i+1] {
			cost := nums[i+1] - nums[i] + 1
			oddMoves += cost
			// Decrease the right neighbor to maintain the zigzag pattern for subsequent checks
			nums[i+1] -= cost  
		}
	} 

	// Initialize the total moves needed for the even-indexed zigzag pattern
	evenMoves := 0

	// Iterate over even indices to calculate moves for the even-indexed zigzag pattern
	for i := 0; i < n; i += 2 {
		// If the current element is not less than its left neighbor, calculate the cost to decrease it
		if i-1 >= 0 && clone[i] <= clone[i-1] {
			cost := clone[i-1] - clone[i] + 1
			evenMoves += cost
		}
		// If the current element is not less than its right neighbor, calculate the cost to decrease it
		if i+1 < n && clone[i] <= clone[i+1] {
			cost := clone[i+1] - clone[i] + 1
			evenMoves += cost
			// Decrease the right neighbor to maintain the zigzag pattern for subsequent checks
			clone[i+1] -= cost  
		}
	}

	// Return the minimum moves required between odd-indexed and even-indexed zigzag patterns
	return min(oddMoves, evenMoves)
}
