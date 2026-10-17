/**
 * Problem: 2032. Two Out of Three
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func twoOutOfThree(nums1 []int, nums2 []int, nums3 []int) []int {
  // Count the distinct input arrays that contain each value
  count := [101]uint8{}
  // Record the most recent input array that contained each value
  lastSeenIn := [101]uint8{}
  for index := range lastSeenIn {
    lastSeenIn[index] = ^uint8(0)
  }
  // Store values found in at least two input arrays
  answer := make([]int, 0)

  // Process each input array and its index
  arrays := [][]int{nums1, nums2, nums3}
  for arrayIndex, nums := range arrays {
    // Process each value in the current input array
    for _, number := range nums {
      // Skip values already counted for the current input array
      if lastSeenIn[number] == uint8(arrayIndex) {
        continue
      }

      // Mark the value as seen in the current input array
      lastSeenIn[number] = uint8(arrayIndex)
      // Count the current input array for the value
      count[number]++

      // Record values as soon as they appear in a second input array
      if count[number] == 2 {
        answer = append(answer, number)
      }
    }
  }

  // Return all values that occur in at least two input arrays
  return answer
}
