/**
 * Problem: 781. Rabbits in Forest
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Minimum number of rabbits in the forest
 *
 * @param  {number[]} answers - Answers from rabbits
 *
 * @returns {number} - Minimum number of rabbits
 */
const numRabbits = (answers) => {
  // Store the number of rabbits for each answer
  const map = new Map()

  // Store the minimum number of rabbits
  let count = 0

  // Iterate through the answers
  for (let i = 0; i < answers.length; i++) {
    // Current answer
    const n = answers[i]

    // If the current answer is not in the map or the count is 0
    if (!map.has(n) || map.get(n) === 0) {
      count += n + 1
      map.set(n, n)
    }
    // Decrement the count for the current answer
    else map.set(n, map.get(n) - 1)
  }

  // Return the minimum number of rabbits
  return count
}
