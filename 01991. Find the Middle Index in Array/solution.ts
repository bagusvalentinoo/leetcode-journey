/**
 * Problem: 1991. Find the Middle Index in Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the leftmost middle index where left and right sums are equal
 *
 * @param nums - Input array of integers
 *
 * @returns Leftmost middle index or -1 if none exists
 */
const findMiddleIndex = (nums: number[]): number => {
  // Compute the total sum of all array elements
  let totalSum: number = 0
  for (const num of nums) totalSum += num

  // Track the accumulated sum of elements to the left of the current index
  let leftSum: number = 0

  // Scan each index from left to right
  for (let i = 0; i < nums.length; i++) {
    // Derive the right sum by excluding left sum and current element from total
    const rightSum: number = totalSum - leftSum - nums[i]

    // Return the first index where left and right sums match
    if (leftSum === rightSum) return i

    // Include the current element in the left sum for the next index
    leftSum += nums[i]
  }

  // Return -1 when no middle index satisfies the condition
  return -1
}
