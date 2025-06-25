/**
 * Problem: 2040. Kth Smallest Product of Two Sorted Arrays
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 33 ms (Beats 100%)
 */

func kthSmallestProduct(a, b []int, K int64) int64 {
	// Get array lengths and convert K to int for easier handling
	arrayALen, arrayBLen, targetK := len(a), len(b), int(K)
	
	// Find first non-negative index in each array
	firstNonNegA := sort.SearchInts(a, 0)
	firstNonNegB := sort.SearchInts(b, 0)

	// Calculate search bounds for binary search
	left := min(a[0]*b[0], a[0]*b[arrayBLen-1], a[arrayALen-1]*b[0])
	right := max(a[0]*b[0], a[arrayALen-1]*b[arrayBLen-1], a[0]*b[arrayBLen-1], a[arrayALen-1]*b[0])

	// Binary search to find the kth smallest product
	ans := left + sort.Search(right-left, func(maxValue int) bool {
		maxValue += left
		count := 0

		if maxValue < 0 {
			// Count products <= maxValue when maxValue is negative
			i, j := 0, firstNonNegB

			for i < firstNonNegA && j < arrayBLen && count < targetK {
				if a[i]*b[j] > maxValue {
					j++
				} else {
					count += arrayBLen - j
					i++
				}
			}

			i, j = firstNonNegA, 0
			
			for i < arrayALen && j < firstNonNegB && count < targetK {
				if a[i]*b[j] > maxValue {
					i++
				} else {
					count += arrayALen - i
					j++
				}
			}
		} else {
			// Count products <= maxValue when maxValue is non-negative
			count = firstNonNegA*(arrayBLen-firstNonNegB) + (arrayALen-firstNonNegA)*firstNonNegB

			i, j := 0, firstNonNegB-1

			for i < firstNonNegA && j >= 0 && count < targetK {
				if a[i]*b[j] > maxValue {
					i++
				} else {
					count += firstNonNegA - i
					j--
				}
			}

			i, j = firstNonNegA, arrayBLen-1

			for i < arrayALen && j >= firstNonNegB && count < targetK {
				if a[i]*b[j] > maxValue {
					j--
				} else {
					count += j - firstNonNegB + 1
					i++
				}
			}
		}

		return count >= targetK
	})
	
	return int64(ans)
}
