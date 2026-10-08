/**
 * Problem: 1991. Find the Middle Index in Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findMiddleIndex(nums []int) int {
  // Compute the total sum of all array elements
  totalSum := 0
  for _, num := range nums {
    totalSum += num
  }

  // Track the accumulated sum of elements to the left of the current index
  leftSum := 0

  // Scan each index from left to right
  for i, num := range nums {
    // Derive the right sum by excluding left sum and current element from total
    rightSum := totalSum - leftSum - num

    // Return the first index where left and right sums match
    if leftSum == rightSum {
      return i
    }

    // Include the current element in the left sum for the next index
    leftSum += num
  }

  // Return -1 when no middle index satisfies the condition
  return -1
}
