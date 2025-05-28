/**
 * Problem: 986. Interval List Intersections
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the intersection of two lists of closed intervals
 *
 * @param {number[][]} firstList - First list of intervals
 * @param {number[][]} secondList - Second list of intervals
 *
 * @returns {number[][]} - Intersection intervals
 */
const intervalIntersection = (firstList, secondList) => {
  // Array to store intersection intervals
  const intersections = []
  // Pointers for traversing both lists
  let firstIndex = 0,
    secondIndex = 0

  // Process both lists until we reach the end of either one
  while (firstIndex < firstList.length && secondIndex < secondList.length) {
    // Find potential intersection boundaries
    const startPoint = Math.max(
        firstList[firstIndex][0],
        secondList[secondIndex][0]
      ),
      endPoint = Math.min(firstList[firstIndex][1], secondList[secondIndex][1])

    // If valid intersection exists, add it to results
    if (startPoint <= endPoint) intersections.push([startPoint, endPoint])

    // Advance pointer of the interval that ends earlier
    if (firstList[firstIndex][1] < secondList[secondIndex][1]) firstIndex++
    else secondIndex++
  }

  return intersections
}
