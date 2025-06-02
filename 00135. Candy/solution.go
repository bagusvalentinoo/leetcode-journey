/**
 * Problem: 135. Candy
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func candy(ratings []int) int {
	// Initialize total candy count
	totalCandies := 0
	// Array to track candies assigned to each child
	candyDistribution := make([]int, len(ratings))

	// Initially give each child 1 candy
	for i := range candyDistribution {
		candyDistribution[i] = 1
	}

	// Forward pass: ensure children with higher ratings get more candies than their left neighbor
	for i := 1; i < len(ratings); i++ {
		if ratings[i] > ratings[i-1] { candyDistribution[i] = candyDistribution[i-1] + 1 }
	}

	// Backward pass: ensure children with higher ratings get more candies than their right neighbor
	for i := len(ratings) - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			candyDistribution[i] = max(candyDistribution[i+1] + 1, candyDistribution[i])
		}
	}

	// Sum up all candies
	for i := 0; i < len(candyDistribution); i++ {
		totalCandies = totalCandies + candyDistribution[i]
	}
	
	return totalCandies
}