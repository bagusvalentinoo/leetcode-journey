/**
 * Problem: 973. K Closest Points to Origin
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kClosest(points [][]int, k int) [][]int {
	// Sort points using quickselect algorithm to find k closest points
	quickSort(points, k, 0, len(points)-1)
	
	// Return the first k points which are now the closest to origin
	return points[:k]
}

func quickSort(points [][]int, k int, start int, end int) {
	// Initialize left and right pointers for partitioning
	left, right := start, end
	// Calculate middle index to select pivot
	mid := (right - left) / 2 + left

	// Get squared distance of the pivot point
	pivotDist := calcDist(points[mid])

	for {
		// Find point from left that is >= pivot distance
		for left < end && calcDist(points[left]) < pivotDist {
			left++
		}
		// Find point from right that is <= pivot distance
		for right > start && calcDist(points[right]) > pivotDist {
			right--
		}

		// Break when pointers meet or cross
		if left >= right {
			break
		}

		// Swap points that are on wrong sides of pivot
		points[left], points[right] = points[right], points[left]
		
		// Move pointers after swap
		left++
		right--
	}

	// If we've found exactly k points, we're done
	if right + 1 == k {
		return
	}
	// If we have more than k points, search in left partition
	if right + 1 > k {
		quickSort(points, k, start, right)
	} else {
		// Otherwise search in right partition
		quickSort(points, k, right+1, end)
	}
}

func calcDist(point []int) int {
	// Calculate squared Euclidean distance from origin (0,0) without square root
	return point[0]*point[0] + point[1]*point[1]
}