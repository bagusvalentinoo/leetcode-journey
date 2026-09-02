/**
 * Problem: 1566. Detect Pattern of Length M Repeated K or More Times
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func containsPattern(arr []int, m int, k int) bool {
  // Early return if array is too short to contain k repetitions
  if len(arr) < m*k {
    return false
  }

  // Target consecutive matches needed: (k - 1) * m
  target := (k - 1) * m

  // Counter for consecutive positions where arr[i] == arr[i - m]
  count := 0

  // Scan array starting from index m
  for i := m; i < len(arr); i++ {
    // Check if current element matches the element m positions before
    if arr[i] == arr[i-m] {
      // Increment consecutive match counter
      count++

      // Pattern found when enough consecutive matches accumulated
      if count == target {
        return true
      }
    } else {
      // Reset counter when the consecutive pattern breaks
      count = 0
    }
  }

  // No valid pattern found after full scan
  return false
}
