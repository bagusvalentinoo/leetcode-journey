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
 * Given a list of dominoes, return the number of equivalent domino pairs
 *
 * @param {number[][]} dominoes - The list of dominoes
 *
 * @returns {number} - The number of equivalent domino pairs
 */
const numEquivDominoPairs = (dominoes) => {
  // Count equivalent domino pairs by encoding each domino and using a frequency map
  let c = 0
  const map = {}

  for (let i = 0; i < dominoes.length; i++) {
    // Ensure the smaller number comes first to create a unique code for each domino
    const low = Math.min(dominoes[i][0], dominoes[i][1])
    const higt = Math.max(dominoes[i][0], dominoes[i][1])

    const code = higt * 10 + low

    // Increment the count of pairs if the code already exists in the map
    if (map[code] === undefined) map[code] = 0
    else {
      map[code]++
      c += map[code]
    }
  }

  return c
}
