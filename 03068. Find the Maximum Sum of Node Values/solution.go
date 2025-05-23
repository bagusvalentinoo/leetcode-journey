/**
 * Problem: 3068. Find the Maximum Sum of Node Values
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumValueSum(nums []int, k int, edges [][]int) int64 {
	// Track the total sum of all node values
	var totalSum int64

	// Count nodes that benefit from the XOR operation
	numBeneficialNodes := 0
	
	// Track minimum positive change and maximum negative change
	// Used if we need to undo one operation for odd count
	minPositiveChange, maxNegativeChange := math.MaxInt64, math.MinInt64

	for _, nodeValue := range nums {
		// Calculate the value after XOR operation
		valueAfterXOR := nodeValue ^ k
		totalSum += int64(nodeValue)
		// Calculate the net change in value from applying XOR
		netChange := valueAfterXOR - nodeValue

		if netChange > 0 {
			// Track the smallest positive change for potential rollback
			if netChange < minPositiveChange {
				minPositiveChange = netChange
			}

			totalSum += int64(netChange)
			numBeneficialNodes++
		} else {
			// Track the least negative change for potential addition
			if netChange > maxNegativeChange {
				maxNegativeChange = netChange
			}
		}
	}

	// If we have an even count of beneficial operations, we're done
	if numBeneficialNodes%2 == 0 {
		return totalSum
	}
	
	// For odd count, either remove the smallest positive change
	// or add the least negative change (whichever gives better result)
	return int64(math.Max(float64(totalSum-int64(minPositiveChange)), float64(totalSum+int64(maxNegativeChange))))
}