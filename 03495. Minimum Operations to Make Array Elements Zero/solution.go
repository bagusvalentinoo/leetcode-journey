/**
 * Problem: 3495. Minimum Operations to Make Array Elements Zero
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

func minOperations(queries [][]int) int64 {
	// Calculate the maximum exponent N such that 4^N <= 1e9
	N := int(math.Log(1e9) / math.Log(4)) + 1

	// Precompute powers of 4 up to N
	PowersOf4 := make([]int64, N+1)

	// Initialize the first power of 4 (4^0 = 1)
	PowersOf4[0] = 1

	// Fill the PowersOf4 slice with powers of 4
	for i := 1; i <= N; i++ {
		PowersOf4[i] = 4 * PowersOf4[i-1]
	}

	// Helper function to calculate minimum operations for a given range [l, r]
	calculate := func(l, r int) int64 {
		var totalOps int64 = 0 // Total operations needed

		var lastPoint int64 = int64(l)     // Last processed point in range
		var currentPoint int64 = int64(l)  // Current point to process

		i := 0 // Index for powers of 4

		// Iterate through the range using powers of 4 as steps
		for currentPoint <= int64(r) {
			// Find the smallest power of 4 greater than lastPoint
			for PowersOf4[i] <= lastPoint {
				i++
			}

			currentPoint = PowersOf4[i]
			// Calculate the length of the current segment
			length := min(currentPoint, int64(r)+1) - lastPoint
			// Add the operations for this segment
			totalOps += (length * int64(i))
			// Move to the next segment
			lastPoint = currentPoint
		}

		// Return the total operations, adjusted as per problem requirement
		return (totalOps + 1) / 2
	}

	var totalSum int64 = 0 // Sum of operations for all queries

	// Process each query and accumulate the result
	for _, query := range queries {
		totalSum += calculate(query[0], query[1])
	}

	// Return the final sum of operations
	return totalSum
}
