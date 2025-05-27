/**
 * Problem: 985. Sum of Even Numbers After Queries
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumEvenAfterQueries(nums []int, queries [][]int) []int {
	// Initialize slice to store results with capacity matching queries length
	results := make([]int, 0, len(queries))
	// Track sum of even numbers
	evenSum := 0
	
	// First calculate initial sum of even numbers
	for _, num := range nums {
		if num%2 == 0 {
			evenSum += num
		}
	}
	
	for _, query := range queries {
		// Extract value and index from query
		val, idx := query[0], query[1]
		
		// If original value was even, remove it from sum
		if nums[idx]%2 == 0 {
			evenSum -= nums[idx]
		}
		
		// Update the value at the specified index
		nums[idx] += val
		
		// If new value is even, add it to sum
		if nums[idx]%2 == 0 {
			evenSum += nums[idx]
		}
		
		// Store current even sum in results
		results = append(results, evenSum)
	}

	return results
}