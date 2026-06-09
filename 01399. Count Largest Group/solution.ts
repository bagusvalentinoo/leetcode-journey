/**
 * Problem: 1399. Count Largest Group
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Precomputed reference arrays for digit sum calculations at each decimal position
const referenceArrays: (number[] | Uint8Array)[] = [
  [1],
  new Uint8Array(10),
  new Uint8Array(19),
  new Uint8Array(28)
]

/**
 * Counts groups by digit sum and returns the count of the largest group
 *
 * @param n - Upper limit
 *
 * @returns Count of the largest group
 */
const countLargestGroup = (n: number): number => {
  // Array to store counts for each possible digit sum (0-36)
  const groupCounts: Uint16Array = new Uint16Array(37)

  // Array to store digit sums for each power of 10 (units, tens, hundreds, thousands)
  const digitSums: number[] = [1, 0, 0, 0]

  // Variable to track current power of 10 position and running sum
  let powerIndex: number = 0,
    runningSum: number = 0

  // Process numbers up to min(n, 9999) to build initial digit sum distribution
  for (
    let currentNum: number = Math.min(n, 9999);
    currentNum;
    currentNum = ~~(currentNum / 10)
  )
    runningSum += digitSums[powerIndex++] += currentNum % 10

  // Process each digit position (units, tens, hundreds, thousands)
  for (
    let digitPosition: number = 0;
    digitPosition < digitSums.length;
    digitPosition++
  ) {
    // Current digit value at this position
    const currentDigit: number = digitSums[digitPosition]

    // Reference arrays for previous and current positions
    const prevRef: number[] | Uint8Array = referenceArrays[digitPosition],
      currRef: number[] | Uint8Array = referenceArrays[digitPosition + 1]

    // Determine if current reference array has valid data
    const hasCurrentArray: number =
      !currRef || (currRef as Uint8Array).at(-1)
        ? 0
        : (currRef as Uint8Array).length

    // Calculate limit for this digit position based on maximum possible sum
    const limitValue: number = Math.max(
      digitPosition * 9 + currentDigit,
      hasCurrentArray
    )

    // Update running sum by removing current digit contribution
    runningSum -= currentDigit

    // Calculate contributions for each possible digit sum value
    for (
      let sumIndex: number = 0, accumulated: number = 0;
      sumIndex < limitValue;
      sumIndex++
    ) {
      // Update group count using sliding window technique
      groupCounts[runningSum + sumIndex] += accumulated +=
        ~~(prevRef as Uint8Array)[sumIndex] -
        ~~(prevRef as Uint8Array)[sumIndex - currentDigit]

      // Update current reference array if it exists
      if (hasCurrentArray) {
        ;(currRef as Uint8Array)[sumIndex] =
          ~~(currRef as Uint8Array)[sumIndex - 1] +
          ~~(prevRef as Uint8Array)[sumIndex] -
          ~~(prevRef as Uint8Array)[sumIndex - 10]
      }
    }
  }

  // Reset count for sum 0 (not used in final result)
  groupCounts[0] = 0

  // Find maximum count among all groups
  const maxCount: number = Math.max(...groupCounts)

  // Return number of groups that have the maximum count
  return Array.from(groupCounts).filter((count) => count === maxCount).length
}
