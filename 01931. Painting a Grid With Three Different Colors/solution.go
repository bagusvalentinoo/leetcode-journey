/**
 * Problem: 1931. Painting a Grid With Three Different Colors
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Define constants and variables for dynamic programming
const mod = 1e9 + 7

// ways[n][mask] stores the number of valid colorings for an n-row grid with the last row having pattern 'mask'
var ways [1001][1024]int
// rowMasks[m] stores all valid row patterns for a grid of width m
var rowMasks [6][]int
// pow3 contains powers of 3 for converting between base-3 and decimal representations
var pow3 = []int{1, 3, 9, 27, 81, 243}

func init() {
	for m := 1; m <= 5; m++ {
		// Generate all valid row patterns for width m
		nextMask: for mask := 0; mask < pow3[m]; mask++ {
			binaryMask, prevColor := 0, -1

			// Convert base-3 mask to a binary representation and check adjacent colors
			for i, temp := 0, mask; i < m; i, temp = i+1, temp/3 {
				if temp%3 == prevColor { continue nextMask }  // Skip invalid patterns with adjacent same colors

				binaryMask, prevColor = binaryMask*4 + temp%3 + 1, temp%3
			}

			// Store valid pattern and initialize base case
			rowMasks[m] = append(rowMasks[m], binaryMask)
			ways[1][binaryMask] = 1
		}

		// Fill DP table for grid with n rows and width m
		for n := 2; n <= 1000; n++ {
			for _, currentMask := range rowMasks[m] {
				for _, previousMask := range rowMasks[m] {
					valid := true

					// Check if colors in same position are different between rows
					for i := 0; valid && i < m; i++ {
						valid = currentMask>>(2*i)&3 != previousMask>>(2*i)&3
					}

					// If valid configuration, add ways from previous row
					if valid { ways[n][currentMask] += ways[n-1][previousMask] }
				}

				ways[n][currentMask] %= mod
			}
		}
	}
}

func colorTheGrid(m int, n int) (result int) {
	// Sum up all valid ways for n rows with width m from our pre-calculated DP table
	for _, mask := range rowMasks[m] { 
		result += ways[n][mask] 
	}

	// Return the total number of ways modulo 10^9+7
	return result % mod
}