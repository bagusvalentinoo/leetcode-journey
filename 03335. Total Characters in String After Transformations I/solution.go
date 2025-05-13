/**
 * Problem: 3335. Total Characters in String After Transformations I
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

// Modulo value to prevent integer overflow in calculations
const (
	modulo          = 1_000_000_007
	// Size of lowercase English alphabet
	alphabetSize    = 26
	// One less than alphabet size, used for transformation calculations
	alphabetMinusOne = 25
	// ASCII offset for lowercase 'a'
	charOffset      = 'a'
)

var (
	// Cache to store growth pattern values for character 'z' after transformations
	zGrowthCache          = make([]int, 100_001)
	// Tracks highest transformation count already computed in cache
	zGrowthCacheComputedUpTo int
)

// Initialize cache with base case
func init() {
	zGrowthCache[0] = 1
}

// Calculate total length after applying t transformations to string s
func lengthAfterTransformations(s string, t int) int {
	// Fill cache with growth pattern values up to needed transformation count
	if zGrowthCacheComputedUpTo < t {
		for step := zGrowthCacheComputedUpTo + 1; step <= t; step++ {
			if step <= alphabetMinusOne {
				zGrowthCache[step] = 2
			} else {
				sum := zGrowthCache[step-alphabetMinusOne] + zGrowthCache[step-alphabetSize]
				zGrowthCache[step] = sum % modulo
			}
		}

		zGrowthCacheComputedUpTo = t
	}

	// Count occurrences of each letter in input string
	var letterCounts [alphabetSize]int

	for _, r := range s {
		letterCounts[r-charOffset]++
	}

	// Calculate total length after transformations
	total := 0

	for code := 0; code < alphabetSize; code++ {
		count := letterCounts[code]

		if count == 0 {
			continue
		}

		// Calculate steps needed to transform current letter to 'z'
		untilZ := alphabetMinusOne - code
		// Calculate remaining transformations after reaching 'z'
		remaining := t - untilZ
		
		var contribution int

		// Determine how much this character contributes to final length
		if remaining > 0 {
			contribution = zGrowthCache[remaining]
		} else {
			contribution = 1
		}

		// Add this character's contribution to total length
		total = (total + count*contribution) % modulo
	}

	return total
}