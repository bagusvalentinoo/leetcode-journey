/**
 * Problem: 1399. Count Largest Group
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Precomputed reference arrays for digit sum calculations at each decimal position
const referenceArrays = [
  [1],
  new Uint8Array(10),
  new Uint8Array(19),
  new Uint8Array(28)
]

/**
 * Counts groups by digit sum and returns the count of the largest group
 *
 * @param {number} n - Upper limit
 *
 * @returns {number} Count of the largest group
 */
const countLargestGroup = (n) => {
  // Array to store counts for each possible digit sum (0-36)
  const groupCounts = new Uint16Array(37)

  // Array to store digit sums for each power of 10 (units, tens, hundreds, thousands)
  const digitSums = [1, 0, 0, 0]

  // Variable to track current power of 10 position and running sum
  let powerIndex = 0,
    runningSum = 0

  // Process numbers up to min(n, 9999) to build initial digit sum distribution
  for (
    let currentNum = Math.min(n, 9999);
    currentNum;
    currentNum = ~~(currentNum / 10)
  )
    runningSum += digitSums[powerIndex++] += currentNum % 10

  // Process each digit position (units, tens, hundreds, thousands)
  for (
    let digitPosition = 0;
    digitPosition < digitSums.length;
    digitPosition++
  ) {
    // Current digit value at this position
    const currentDigit = digitSums[digitPosition]

    // Reference arrays for previous and current positions
    const prevRef = referenceArrays[digitPosition],
      currRef = referenceArrays[digitPosition + 1]

    // Determine if current reference array has valid data
    const hasCurrentArray = !currRef || currRef.at(-1) ? 0 : currRef.length

    // Calculate limit for this digit position based on maximum possible sum
    const limitValue = Math.max(
      digitPosition * 9 + currentDigit,
      hasCurrentArray
    )

    // Update running sum by removing current digit contribution
    runningSum -= currentDigit

    // Calculate contributions for each possible digit sum value
    for (let sumIndex = 0, accumulated = 0; sumIndex < limitValue; sumIndex++) {
      // Update group count using sliding window technique
      groupCounts[runningSum + sumIndex] += accumulated +=
        ~~prevRef[sumIndex] - ~~prevRef[sumIndex - currentDigit]

      // Update current reference array if it exists
      if (hasCurrentArray)
        currRef[sumIndex] =
          ~~currRef[sumIndex - 1] +
          ~~prevRef[sumIndex] -
          ~~prevRef[sumIndex - 10]
    }
  }

  // Reset count for sum 0 (not used in final result)
  groupCounts[0] = 0

  // Find maximum count among all groups
  const maxCount = Math.max(...groupCounts)

  // Return number of groups that have the maximum count
  return groupCounts.filter((count) => count === maxCount).length
}
