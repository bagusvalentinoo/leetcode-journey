/**
 * Problem: 386. Lexicographical Numbers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func lexicalOrder(n int) []int {
	// Array to store the lexicographically ordered numbers
	result := []int{}

	// Depth-first search function to generate numbers in lexicographical order
	var dfs func(currentNum int)
	dfs = func(currentNum int) {
		if currentNum > n {
			return
		}

		result = append(result, currentNum)

		// Try appending digits 0-9 to the current number
		for digit := 0; digit <= 9; digit++ {
			nextNum := currentNum*10 + digit

			// Stop if we exceed the upper limit
			if nextNum > n {
				break
			}

			dfs(nextNum)
		}
	}

	// Start DFS from single-digit numbers 1-9
	for startDigit := 1; startDigit <= 9; startDigit++ {
		// Stop if we exceed the upper limit
		if startDigit > n {
			break
		}

		dfs(startDigit)
	}

	return result
}
