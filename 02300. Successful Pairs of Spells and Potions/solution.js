/**
 * Problem: 2300. Successful Pairs of Spells and Potions
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 61 ms (Beats 100%)
 */

/**
 * Finds the number of successful pairs for each spell
 *
 * @param {number[]} spells - Spell strengths
 * @param {number[]} potions - Potion strengths
 * @param {number} success - Success threshold
 *
 * @returns {number[]} - Number of successful pairs per spell
 */
const successfulPairs = (spells, potions, success) => {
  // Sort the potions array in ascending order for efficient processing
  const sortedPotions = potions.sort((a, b) => a - b)

  // Find the maximum value in the sorted potions array
  const maxPotionStrength = Math.max(...sortedPotions)

  // Initialize an array to map potion strengths to their counts
  const potionCountMap = new Array(maxPotionStrength)

  // Set all elements in potionCountMap to zero
  for (let i = 0; i <= maxPotionStrength; i++) potionCountMap[i] = 0

  // Count occurrences of each potion strength in potionCountMap
  sortedPotions.forEach(
    (potion) => (potionCountMap[potion] = potionCountMap[potion] + 1)
  )

  // Initialize count of potions with the maximum strength
  let cumulativePotionCount = potionCountMap[maxPotionStrength]

  // Build cumulative counts for potion strengths in potionCountMap
  for (let i = maxPotionStrength - 1; i > 0; i--) {
    cumulativePotionCount += potionCountMap[i]
    potionCountMap[i] = cumulativePotionCount
  }

  // Prepare an array to store the result for each spell
  const successfulPairsResult = new Array(spells.length)

  // For each spell, calculate the minimum required potion strength
  for (let i = 0; i < spells.length; i++) {
    const requiredPotionStrength = Math.ceil(success / spells[i])

    // If required strength exceeds available, set result to zero
    if (requiredPotionStrength > potionCountMap.length - 1)
      successfulPairsResult[i] = 0
    // Otherwise, set result to the number of valid potions
    else successfulPairsResult[i] = potionCountMap[requiredPotionStrength]
  }

  // Return the array of successful pairs for each spell
  return successfulPairsResult
}
