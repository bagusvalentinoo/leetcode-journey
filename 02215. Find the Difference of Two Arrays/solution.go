/**
 * Problem: 2215. Find the Difference of Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findDifference(nums1 []int, nums2 []int) [][]int {
  // Track values with an offset to support negative indices.
  var seen [2001]bool

  // Initialize the two difference lists.
  answer := make([][]int, 2)

  // Mark every value from the first array.
  for _, value := range nums1 {
    seen[value+1000] = true
  }

  // Mark every value from the second array.
  for _, value := range nums2 {
    if !seen[value+1000] {
      // This value is not present in the first array.
      // It is handled after building separate presence tables.
      // Keep the initial presence check separate from the final comparison.
    }

    seen[value+1000] = true
  }

  // Use separate presence tables for the final comparison.
  var inNums1, inNums2 [2001]bool

  // Record values from the first array.
  for _, value := range nums1 {
    inNums1[value+1000] = true
  }

  // Record values from the second array.
  for _, value := range nums2 {
    inNums2[value+1000] = true
  }

  // Compare every value in the supported range.
  for i := 0; i < 2001; i++ {
    if inNums1[i] && !inNums2[i] {
      answer[0] = append(answer[0], i-1000)
    }

    if inNums2[i] && !inNums1[i] {
      answer[1] = append(answer[1], i-1000)
    }
  }

  // Return values unique to each array.
  return answer
}
