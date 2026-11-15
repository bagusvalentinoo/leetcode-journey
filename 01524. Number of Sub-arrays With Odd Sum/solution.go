/**
 * Problem: 1524. Number of Sub-arrays With Odd Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numOfSubarrays(arr []int) int {
  // Count prefix sums with odd parity using a mutable running sum
  sum := 0
  odd := int64(0)

  // Count each odd prefix sum because Go has no standard count_if
  for _, number := range arr {
    sum += number
    odd += int64(sum & 1)
  }

  // Count even prefix sums, including the empty prefix sum
  even := int64(len(arr)) + 1 - odd

  // Odd-sum subarrays pair one odd prefix sum with one even prefix sum
  return int(odd * even % 1_000_000_007)
}
