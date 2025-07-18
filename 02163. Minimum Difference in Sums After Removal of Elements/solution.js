/**
 * Problem: 2163. Minimum Difference in Sums After Removal of Elements
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 107 ms (Beats 100%)
 */

/**
 * Finds minimum difference between sum of n largest and n smallest elements
 *
 * @param {number[]} nums - Array of length 3n
 *
 * @returns {number} - Minimum difference between sums
 */
const minimumDifference = (nums) => {
  // Helper function to maintain min-heap property by moving element down
  const heapify = (heap, idx, size) => {
    // Continue while current node has two children and violates heap property
    while (
      2 * idx + 2 < size &&
      (heap[idx] > heap[2 * idx + 1] || heap[idx] > heap[2 * idx + 2])
    ) {
      // Start with left child index
      let child = 2 * idx + 1

      // Choose the smaller child for min-heap
      if (heap[child] > heap[child + 1]) child++

      // Swap current node with smaller child
      const temp = heap[child]
      heap[child] = heap[idx]
      heap[idx] = temp

      // Move to child position for next iteration
      idx = child
    }

    // Handle case where current node has only left child
    if (2 * idx + 2 !== size) return

    // If parent is greater than left child, swap them
    if (heap[idx] > heap[2 * idx + 1]) {
      const temp = heap[2 * idx + 1]
      heap[2 * idx + 1] = heap[idx]
      heap[idx] = temp
    }
  }

  // Build min-heap from array using bottom-up approach
  const buildHeap = (arr, size) => {
    // Start from last non-leaf node and heapify upwards
    for (let i = Math.floor((size - 2) / 2); i >= 0; i--) heapify(arr, i, size)

    return arr
  }

  // Replace root of heap with new value and maintain heap property
  const replaceRoot = (heap, size, newVal) => {
    // Store the root value to be removed
    const removed = heap[0]

    // Replace root with new value
    heap[0] = newVal

    // Restore heap property
    heapify(heap, 0, size)

    return removed
  }

  // Calculate length of each segment (array length is 3n)
  const len = nums.length / 3

  // Create max-heap for left segment (using negated values for min-heap implementation)
  // This will track the n largest elements from left side
  const leftHeap = buildHeap(
    nums.slice(0, len).map((x) => -x),
    len
  )

  // Array to store cumulative sums of n largest elements from left
  const leftSum = Array(len + 1)

  // Initialize first sum with current n largest elements
  leftSum[0] = leftHeap.reduce((sum, val) => sum - val, 0)

  // Process middle segment elements from left to right
  for (let i = 1; i <= len; i++) {
    // Current element being considered
    const current = nums[len - 1 + i]

    // If current element is larger than smallest in our max-heap
    if (current < -leftHeap[0]) {
      // Replace smallest element in heap with current element
      const removed = -replaceRoot(leftHeap, len, -current)

      // Update sum by adding new element and removing old one
      leftSum[i] = leftSum[i - 1] + current - removed
    }
    // If current element is not large enough, keep previous sum
    else leftSum[i] = leftSum[i - 1]
  }

  // Create min-heap for right segment to track n smallest elements
  const rightHeap = buildHeap(nums.slice(2 * len), len)

  // Array to store cumulative sums of n smallest elements from right
  const rightSum = Array(len + 1).fill(0)

  // Initialize last sum with current n smallest elements
  rightSum[len] = rightHeap.reduce((sum, val) => sum + val, 0)

  // Process middle segment elements from right to left
  for (let i = 1; i <= len; i++) {
    // Current element being considered
    const current = nums[2 * len - i]

    // If current element is smaller than largest in our min-heap
    if (current > rightHeap[0]) {
      // Replace largest element in heap with current element
      const removed = replaceRoot(rightHeap, len, current)

      // Update sum by adding new element and removing old one
      rightSum[len - i] = rightSum[len - i + 1] - removed + current
    }
    // If current element is not small enough, keep previous sum
    else rightSum[len - i] = rightSum[len - i + 1]
  }

  // Initialize minimum difference to maximum possible value
  let minDiff = Number.MAX_VALUE

  // Find minimum difference across all possible split points
  for (let i = 0; i <= len; i++)
    minDiff = Math.min(minDiff, leftSum[i] - rightSum[i])

  return minDiff
}
