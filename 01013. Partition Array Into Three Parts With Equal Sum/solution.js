/**
 * Problem: 1013. Partition Array Into Three Parts With Equal Sum
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if an array can be partitioned into three parts with equal sums
 *
 * @param {number[]} arr - Array of integers
 *
 * @returns {boolean} True if three equal partitions are possible
 */
const canThreePartsEqualSum = (arr) => {
  // Calculate total sum of all elements
  let totalSum = 0
  for (const num of arr) totalSum += num

  // Early return if sum cannot be divided into three equal parts
  if (totalSum % 3 !== 0) return false

  // Target sum for each partition
  const targetPartitionSum = totalSum / 3
  // Counter for partitions found
  let partitionCount = 0
  // Running sum for current partition
  let currentSum = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    // If we found a partition, reset current sum and increment count
    if (currentSum === targetPartitionSum) {
      partitionCount++
      currentSum = 0
    }
    // Return true if we found 2 partitions and have at least one element left
    if (partitionCount === 2 && i < arr.length - 1) return true
  }

  return false
}
