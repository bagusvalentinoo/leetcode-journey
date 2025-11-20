/**
 * Problem: 757. Set Intersection Size At Least Two
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

/**
 * Find the minimum size of a set covering all intervals
 *
 * @param intervals - List of intervals
 *
 * @returns - Minimum set size
 */
const intersectionSizeTwo = (intervals: number[][]): number => {
  // Sort the intervals by their ending points in ascending order
  intervals.sort((a, b) => a[1] - b[1])

  // Initialize an array to store the result set
  const resultSet: number[] = []

  // Helper function to check how many elements in the resultSet
  // are within the range of the given interval
  const countCoveredElements = (interval: number[]): number => {
    let count = 0

    // Iterate through the resultSet in reverse order
    for (let i = resultSet.length - 1; i >= 0; i--) {
      // Check if the current element is within the interval
      if (resultSet[i] >= interval[0] && resultSet[i] <= interval[1]) count++
      // If at least two elements are found, return 2
      if (count >= 2) return 2
      // If the current element is less than the interval start, stop checking
      if (resultSet[i] < interval[0]) return count
    }

    // Return the count of covered elements
    return count
  }

  // Iterate through each interval in the sorted list
  for (let currentInterval of intervals) {
    // Check how many elements in the resultSet cover the current interval
    let coveredCount = countCoveredElements(currentInterval)

    // If the interval is already covered by at least two elements, skip it
    if (coveredCount === 2) continue
    else {
      // If no elements cover the interval, add the last two points of the interval
      if (coveredCount === 0) {
        resultSet.push(currentInterval[1] - 1)
        resultSet.push(currentInterval[1])
      }

      // If one element covers the interval, add one more point to cover it
      if (coveredCount === 1) {
        // Check if the last element in resultSet is the interval's end
        if (resultSet[resultSet.length - 1] === currentInterval[1])
          resultSet.push(currentInterval[1] - 1)
        // Otherwise, add the interval's end point
        else resultSet.push(currentInterval[1])

        // Sort the resultSet to maintain order
        resultSet.sort((a, b) => a - b)
      }
    }
  }

  // Return the size of the resultSet as the minimum set size
  return resultSet.length
}
