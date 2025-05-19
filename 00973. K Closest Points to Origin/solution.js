/**
 * Problem: 973. K Closest Points to Origin
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 99.92%)
 */

/**
 * Find the k points closest to origin (0,0)
 *
 * @param {number[][]} points - Array of [x,y] coordinates
 * @param {number} k - Number of closest points to return
 *
 * @returns {number[][]} - k closest points to origin
 */
const kClosest = (points, k) => {
  // Initialize counters for the quickselect algorithm
  let totalPoints = points.length,
    leftBound = 0,
    rightBound = totalPoints - 1

  // Continue until we've found exactly k points
  while (totalPoints !== k) {
    let left = leftBound,
      right = rightBound,
      temp

    // Choose a random pivot point for better average performance
    const pivotIndex =
      leftBound + Math.floor(Math.random() * (rightBound - leftBound + 1))
    const pivotDistance =
      points[pivotIndex][0] ** 2 + points[pivotIndex][1] ** 2

    // Partition points around the pivot distance
    while (left <= right) {
      if (points[left][0] ** 2 + points[left][1] ** 2 < pivotDistance) left++
      else
        (temp = points[left]),
          (points[left] = points[right]),
          (points[right--] = temp)
    }

    totalPoints = left

    // Adjust bounds based on comparison with k
    if (totalPoints < k) leftBound = totalPoints
    else rightBound = totalPoints - 1
  }

  // Return the k closest points
  return points.slice(0, k)
}
