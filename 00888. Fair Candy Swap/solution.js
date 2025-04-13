/**
 * Problem: 888. Fair Candy Swap
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds a fair candy swap between two people
 *
 * @param {number[]} aliceSizes - Alice's candies
 * @param {number[]} bobSizes - Bob's candies
 *
 * @returns {number[]} - Sizes of candies to swap
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
  let diff = 0

  // Calculate the difference between the total sizes of candies
  for (let i = 0; i < aliceSizes.length; ++i) diff += aliceSizes[i]
  for (let i = 0; i < bobSizes.length; ++i) diff -= bobSizes[i]

  // Make the difference positive
  diff >>= 1

  // Create a set of Bob's candies
  const seen = new Uint8Array(1e5)

  // Add Alice's candies to the set
  for (let i = 0; i < aliceSizes.length; ++i)
    // Only add candies that are greater than the difference
    if (aliceSizes[i] > diff) seen[aliceSizes[i] - diff] = 1

  // Find a candy that can be swapped
  for (let i = 0; i < bobSizes.length; ++i)
    // Only check candies that are greater than the difference
    if (seen[bobSizes[i]]) return [bobSizes[i] + diff, bobSizes[i]]

  // No fair swap found
  return [-1, -1]
}
