/**
 * Problem: 1128. Number of Equivalent Domino Pairs
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Counts equivalent domino pairs
 *
 * @param {number[][]} dominoes - Array of domino pairs
 *
 * @returns {number} - Number of equivalent pairs
 */
const numEquivDominoPairs = (dominoes) => {
  // Initialize an array to count occurrences of each domino configuration (since domino values are 1-9, 9*9=81 possible pairs)
  const dominoCounts = new Array(81).fill(0),
    equivalentPairs = new Array(81).fill(0)

  // Iterate through each domino in the input array
  for (let i = 0; i < dominoes.length; i++) {
    // Destructure the domino into its two values
    let [first, second] = dominoes[i]

    // Ensure the smaller value comes first for consistent representation
    if (second > first) {
      ;[first, second] = [second, first]
    }

    // Calculate a unique index for the domino pair (values 1-9 mapped to 0-8)
    const index = first - 1 + (second - 1) * 9

    // Add the current count of this domino configuration to the equivalent pairs
    equivalentPairs[index] += dominoCounts[index]
    // Increment the count for this domino configuration
    dominoCounts[index] += 1
  }

  // Sum all equivalent pairs to get the total number of equivalent domino pairs, defaulting to 0 if undefined
  return (
    equivalentPairs.reduce(
      (accumulator, current) => accumulator + current,
      0
    ) ?? 0
  )
}
