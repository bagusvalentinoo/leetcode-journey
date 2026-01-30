/**
 * Problem: 2976. Minimum Cost to Convert String I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

func minimumCost(source string, target string, original []byte, changed []byte, cost []int) int64 {
	// Define infinity constant for initialization
	const INF int64 = 1e15

	// Number of lowercase letters in alphabet
	const alphabetSize = 26

	// Initialize distance matrix
	distance := make([][]int64, alphabetSize)

	// Set up distance matrix with initial values
	for i := 0; i < alphabetSize; i++ {
		distance[i] = make([]int64, alphabetSize)

		// Initialize all distances
		for j := 0; j < alphabetSize; j++ {
			if i == j {
				// Cost to transform character to itself is 0
				distance[i][j] = 0
			} else {
				// Initialize other transformations to infinity
				distance[i][j] = INF
			}
		}
	}

	// Process input transformation rules
	for i := range original {
		fromIdx := original[i] - 'a'
		toIdx := changed[i] - 'a'
		changeCost := int64(cost[i])

		// Keep minimum cost for each transformation
		if changeCost < distance[fromIdx][toIdx] {
			distance[fromIdx][toIdx] = changeCost
		}
	}

	// Floyd-Warshall algorithm to find shortest paths
	for intermediate := 0; intermediate < alphabetSize; intermediate++ {
		for from := 0; from < alphabetSize; from++ {
			for to := 0; to < alphabetSize; to++ {
				// Update distance if path through intermediate is shorter
				if distance[from][intermediate]+distance[intermediate][to] < distance[from][to] {
					distance[from][to] = distance[from][intermediate] + distance[intermediate][to]
				}
			}
		}
	}

	// Initialize total cost accumulator
	var totalCost int64 = 0

	// Process each character in the source string
	for i := 0; i < len(source); i++ {
		sourceIdx := source[i] - 'a'
		targetIdx := target[i] - 'a'

		// Check if transformation is possible
		if distance[sourceIdx][targetIdx] >= INF {
			return -1
		}

		// Add transformation cost to total
		totalCost += distance[sourceIdx][targetIdx]
	}

	// Return minimum total cost
	return totalCost
}
