/**
 * Problem: 1502. Can Make Arithmetic Progression From Sequence
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canMakeArithmeticProgression(arr []int) bool {
  // Sort array to arrange elements in ascending order
  sort.Ints(arr)

  // Calculate common difference from first two elements
  commonDifference := arr[1] - arr[0]

  // Check if every consecutive pair has the same difference
  for i := 2; i < len(arr); i++ {
    // If any difference differs, it cannot form an arithmetic progression
    if arr[i]-arr[i-1] != commonDifference {
      return false
    }
  }

  // All differences match, array forms an arithmetic progression
  return true
}
