/**
 * Problem: 2300. Successful Pairs of Spells and Potions
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 23 ms (Beats 100%)
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
  // Find the maximum potion strength to size the frequency array
  const maxPotion = Math.max(...potions)

  // Create frequency array of counts for each strength 0..maxPotion
  const freq = new Array(maxPotion + 1).fill(0)

  // Tally counts: increment freq at each potion strength
  for (const p of potions) freq[p]++

  // Convert counts to prefix sums so freq[i] = count of <= i
  for (let i = 1; i <= maxPotion; i++) freq[i] += freq[i - 1]

  // Cache total number of potions for reuse in calculations
  const totalPotions = potions.length

  // Initialize result array with zeros, one entry per spell
  const result = new Array(spells.length).fill(0)

  // Loop over spells by index to compute successful pair counts
  for (let i = 0; i < spells.length; i++) {
    // Current spell strength
    const s = spells[i]

    // Minimal potion strength k = ceil(success / s)
    const k = Math.floor((success + s - 1) / s)

    // If k within observed potion range, compute successful pairs
    if (k <= maxPotion) result[i] = totalPotions - freq[k - 1]

    // end of spell loop
  }

  // Return the computed result array
  return result
}
