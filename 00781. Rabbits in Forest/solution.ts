/**
 * Problem: 781. Rabbits in Forest
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Minimum number of rabbits in the forest
 *
 * @param answers - Answers from rabbits
 *
 * @returns Minimum number of rabbits
 */
const numRabbits = (answers: number[]): number => {
  // Store the number of rabbits for each answer
  const frequencyMap = new Map<number, number>()

  // Store the minimum number of rabbits
  let totalRabbits = 0

  // Iterate through the answers
  for (let i = 0; i < answers.length; i++) {
    // Current answer
    const currentAnswer = answers[i]

    // If the current answer is not in the map or the count is 0
    if (
      !frequencyMap.has(currentAnswer) ||
      frequencyMap.get(currentAnswer) === 0
    ) {
      totalRabbits += currentAnswer + 1
      frequencyMap.set(currentAnswer, currentAnswer)
    }
    // Decrement the count for the current answer
    else frequencyMap.set(currentAnswer, frequencyMap.get(currentAnswer)! - 1)
  }

  // Return the minimum number of rabbits
  return totalRabbits
}
