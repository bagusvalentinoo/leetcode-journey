/**
 * Problem: 1539. Kth Missing Positive Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findKthPositive(arr []int, k int) int {
  // Binary search boundaries over the array indices
  left, right := 0, len(arr)

  // Find the largest index where the count of missing numbers stays below k
  for left < right {
    // Middle index of the current search window
    mid := left + (right-left)/2

    // Number of positive integers missing before arr[mid]
    // equals arr[mid] minus the (mid + 1) numbers that should precede it
    if arr[mid]-mid-1 < k {
      // Not enough missing numbers yet, search the right half
      left = mid + 1
    } else {
      // At least k missing numbers, narrow the search to the left half
      right = mid
    }
  }

  // The kth missing integer sits right after the first left elements
  return left + k
}
