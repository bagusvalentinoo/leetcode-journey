/**
 * Problem: 1095. Find in Mountain Array
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findInMountainArray(target int, mountainArr *MountainArray) int {
	// Get the length of the mountain array
	length := mountainArr.length()
	// Initialize pointers for binary search
	left := 0
	right := length - 1
	// Variable to store the index of the peak element
	indexBoundary := -1

	// Binary search to find the peak index in the mountain array
	for left <= right {
		mid := left + (right-left) / 2

		// Compare current element with the next to find the peak
		if mountainArr.get(mid) < mountainArr.get(mid+1) {
			// If ascending, move left pointer to mid + 1
			indexBoundary = mid
			left = mid + 1
		} else {
			// If descending, move right pointer to mid - 1
			right = mid -1
		}
	}

	// Store the peak index
	peak := indexBoundary
	// Reset pointers for searching in the ascending part
	left, right = 0, peak

	// Binary search for target in the ascending part of the array
	for left <= right {
		mid := left + (right-left) / 2
		val := mountainArr.get(mid)

		if val < target {
			// Move left pointer if value is less than target
			left = mid + 1
		} else if val > target {
			// Move right pointer if value is greater than target
			right = mid - 1
		} else {
			// Target found, return index
			return mid
		}
	}

	// Reset pointers for searching in the descending part
	left, right = peak+1, length -1

	// Binary search for target in the descending part of the array
	for left <= right {
		mid := left + (right-left) / 2
		val := mountainArr.get(mid)

		if val < target {
			// Move right pointer if value is less than target (descending order)
			right = mid - 1
		} else if val > target {
			// Move left pointer if value is greater than target (descending order)
			left = mid + 1
		} else {
			// Target found, return index
			return mid
		}
	}
	
	// Target not found, return -1
	return -1
}
