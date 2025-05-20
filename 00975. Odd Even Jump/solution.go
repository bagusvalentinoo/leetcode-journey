/**
 * Problem: 975. Odd Even Jump
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 50 ms (Beats 100%)
 */

func oddEvenJumps(arr []int) int {
	// Get length of input array
	n := len(arr)

	// Function to build "next jump" arrays using monotonic stack
	makeNext := func(indices []int) []int {
		// Initialize array to track next possible positions
		next := make([]int, n)

		// Set default value to -1 (cannot jump)
		for i := range next {
			next[i] = -1
		}

		// Use stack to track positions
		stack := []int{}

		for _, i := range indices {
			// Pop elements from stack when current value is greater
			for stackSize := len(stack); stackSize > 0 && i > stack[stackSize-1]; stackSize-- {
				next[stack[stackSize-1]] = i
				stack = stack[:stackSize-1]
			}

			stack = append(stack, i)
		}

		return next
	}

	// Create array of indices
	indices := make([]int, n)

	for i := range arr {
		indices[i] = i
	}

	// Sort indices by array values (ascending) for odd jumps
	sort.Slice(indices, func(i, j int) bool {
		if arr[indices[i]] == arr[indices[j]] {
			return indices[i] < indices[j]
		}

		return arr[indices[i]] < arr[indices[j]]
	})

	// Get next positions for odd jumps
	oddNext := makeNext(indices)

	// Sort indices by array values (descending) for even jumps
	sort.Slice(indices, func(i, j int) bool {
		if arr[indices[i]] == arr[indices[j]] {
			return indices[i] < indices[j]
		}

		return arr[indices[i]] > arr[indices[j]]
	})

	// Get next positions for even jumps
	evenNext := makeNext(indices)

	// Initialize DP arrays for odd and even jumps
	oddReachable, evenReachable := make([]bool, n), make([]bool, n)
	// Last position is always reachable
	oddReachable[n-1], evenReachable[n-1] = true, true

	// Fill DP arrays from end to start
	for i := n - 2; i >= 0; i-- {
		if oddNext[i] != -1 {
			oddReachable[i] = evenReachable[oddNext[i]]
		}
		if evenNext[i] != -1 {
			evenReachable[i] = oddReachable[evenNext[i]]
		}
	}

	// Count starting positions that can reach the end
	count := 0

	for _, canReach := range oddReachable {
		if canReach {
			count++
		}
	}

	return count
}