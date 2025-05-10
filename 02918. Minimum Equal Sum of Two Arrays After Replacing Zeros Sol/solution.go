/**
 * Problem: 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 110 ms (Beats 100%)
 */

 func minSum(nums1 []int, nums2 []int) int64 {
	// Calculate sums and count zeros in both arrays
	sum1, sum2 := 0, 0
	zeros1, zeros2 := 0, 0

	// Process first array
	for _, num := range nums1 {
		if num == 0 {
			zeros1++
		}
		sum1 += num
	}

	// Process second array
	for _, num := range nums2 {
		if num == 0 {
			zeros2++
		}
		sum2 += num
	}

	// When first array's potential sum is greater
	if sum1+zeros1 > sum2+zeros2 {
		if zeros2 == 0 {
			return -1 // Impossible case: can't increase second array
		}
		return int64(sum1 + zeros1)
	// When second array's potential sum is greater
	} else if sum1+zeros1 < sum2+zeros2 {
		if zeros1 == 0 {
			return -1 // Impossible case: can't increase first array
		}
		return int64(sum2 + zeros2)
	// When potential sums are equal
	} else {
		if zeros1 == 0 && zeros2 == 0 {
			return int64(sum1) // Already equal, no zeros to replace
		}
		if zeros1 == 0 {
			return int64(sum2 + zeros2) // Use second array's potential sum
		}
		if zeros2 == 0 {
			return int64(sum1 + zeros1) // Use first array's potential sum
		}
		return int64(sum1 + zeros1) // Either sum works since they're equal
	}
}