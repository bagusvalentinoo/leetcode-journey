/**
 * Problem: 2243. Calculate Digit Sum of a String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Repeatedly replaces digit groups with their sums
 *
 * @param s - String of digits
 * @param k - Size of each group
 *
 * @returns Final digit-sum string
 */
const digitSum = (s: string, k: number): string => {
  // Continue until the string fits in one group
  while (s.length > k) {
    // Build the string produced by the current round
    let nextString: string = ''

    // Process each consecutive group of at most k digits
    for (let start: number = 0; start < s.length; start += k) {
      // Store the sum of digits in the current group
      let groupSum: number = 0

      // Add every digit in the current group
      for (
        let index: number = start;
        index < Math.min(start + k, s.length);
        index++
      )
        groupSum += Number(s[index])

      // Append the group's digit sum
      nextString += groupSum
    }

    // Use this round's result for the next round
    s = nextString
  }

  // Return the string after all rounds
  return s
}
