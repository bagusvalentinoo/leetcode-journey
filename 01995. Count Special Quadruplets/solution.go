/**
 * Problem: 1995. Count Special Quadruplets
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countQuadruplets(nums []int) int {
  // Store array length for loop boundaries
  n := len(nums)
  // Initialize counter for valid quadruplets
  res := 0
  // Map to store frequency of each pair sum nums[a] + nums[b]
  sum := make(map[int]int)

  // Iterate over middle index c, leaving room for a < b < c < d
  for c := 2; c < n-1; c++ {
    // Fix b as the index just before c
    b := c - 1

    // Add all pair sums ending at b into the map
    for a := 0; a < b; a++ {
      // Update frequency of the pair sum for indices a and b
      sum[nums[a]+nums[b]]++
    }

    // Count pairs matching nums[d] - nums[c]
    for d := c + 1; d < n; d++ {
      // Add frequency of the needed pair sum to result
      res += sum[nums[d]-nums[c]]
    }
  }

  // Return total count of special quadruplets
  return res
}
