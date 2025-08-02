/**
 * Problem: 2561. Rearranging Fruits
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 29 ms (Beats 100%)
 */

func abs(x int) int { if x < 0 { return -x }; return x }

func minCost(A, B []int) int64 {
	// freq keeps track of the difference in counts for each fruit between A and B
	freq := map[int]int{}
	// minVal stores the minimum fruit value found in both arrays
	minVal := math.MaxInt

	// Count occurrences of each fruit in A and update minVal
	for _, x := range A {
		freq[x]++
		if x < minVal { minVal = x }
	}
	// Subtract occurrences of each fruit in B and update minVal
	for _, x := range B {
		freq[x]--
		if x < minVal { minVal = x }
	}

	// extra will store the fruits that need to be swapped
	extra := []int{}

	// Iterate over freq to find fruits with odd differences (impossible case) and collect half the absolute difference for swapping
	for fruit, countDiff := range freq {
		if countDiff%2 != 0 { return -1 } // If difference is odd, return -1 (not possible)
		for i := 0; i < abs(countDiff)/2; i++ {
			extra = append(extra, fruit)
		}
	}

	// Sort extra to optimize swap cost (swap smallest values first)
	sort.Ints(extra)

	// cost accumulates the total minimum cost of swaps
	var cost int64

	// For each pair in the first half of extra, add the minimum cost (either the fruit value or twice the minimum value)
	for i := 0; i < len(extra)/2; i++ {
		cost += int64(min(extra[i], 2*minVal))
	}

	// Return the total minimum cost
	return cost
}
