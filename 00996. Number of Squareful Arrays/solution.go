/**
 * Problem: 996. Number of Squareful Arrays
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numSquarefulPerms(nums []int) int {
	// Number of elements in the input array
	n := len(nums)

	// Map to track frequency of each number
	frequency := make(map[int]int)
	for _, num := range nums {
		frequency[num]++
	}

	// Extract unique numbers from frequency map
	uniqueNums := make([]int, 0, len(frequency))
	for num := range frequency {
		uniqueNums = append(uniqueNums, num)
	}

	// Sort unique numbers for consistent traversal
	sort.Ints(uniqueNums)
	
	// Build adjacency map for numbers that can form a perfect square when added
	adjacencyMap := make(map[int][]int, len(uniqueNums))

	for _, x := range uniqueNums {
		for _, y := range uniqueNums {
			sum := x + y
			root := int(math.Sqrt(float64(sum)))

			if root*root == sum { adjacencyMap[x] = append(adjacencyMap[x], y) }
		}
	}

	// Counter for valid permutations
	count := 0

	// DFS function to explore all possible permutations
	var dfs func(prev, remaining int)
	dfs = func(prev, remaining int) {
		if remaining == 0 {
			count++
			return
		}
		if prev < 0 {
			// First element can be any available number
			for _, num := range uniqueNums {
				if frequency[num] > 0 {
					frequency[num]--

					dfs(num, remaining-1)

					frequency[num]++
				}
			}
		} else {
			// Next element must form a perfect square with previous
			for _, num := range adjacencyMap[prev] {
				if frequency[num] > 0 {
					frequency[num]--

					dfs(num, remaining-1)

					frequency[num]++
				}
			}
		}
	}

	// Start DFS with no previous element (-1)
	dfs(-1, n)
	
	return count
}