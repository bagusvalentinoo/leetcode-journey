/**
 * Problem: 2006. Count Number of Pairs With Absolute Difference K
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countKDifference(nums []int, k int) int {
  // Counter for pairs with absolute difference k
  pairsCount := 0

  // Check every pair starting at each index
  for i := 0; i < len(nums); i++ {
    // Compare current element with every later element including itself
    for j := i; j < len(nums); j++ {
      // Count the pair when the absolute difference equals k
      if abs(nums[i]-nums[j]) == k {
        pairsCount++
      }
    }
  }

  // Return the total number of pairs with absolute difference k
  return pairsCount
}

// abs returns the absolute value of an integer
func abs(x int) int {
  if x < 0 {
    return -x
  }
	
  return x
}
