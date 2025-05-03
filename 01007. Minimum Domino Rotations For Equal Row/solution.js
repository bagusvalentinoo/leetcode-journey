/**
 * Problem: 1007. Minimum Domino Rotations For Equal Row
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Find minimum rotations to make either tops or bottoms contain same values
 *
 * @param {number[]} tops - Top face values of dominoes
 * @param {number[]} bottoms - Bottom face values of dominoes
 *
 * @returns {number} Minimum rotations required or -1 if impossible
 */
const minDominoRotations = (tops, bottoms) => {
  // Check if we can make all dominoes have the same value by rotation
  const minRot = (target) => {
    let toTop = 0,
      toBottom = 0

    // Count rotations needed for each position to match target
    for (let i = 0; i < tops.length; i++) {
      const x = tops[i],
        y = bottoms[i]

      // If neither face has target value, it's impossible
      if (x !== target && y !== target) return Infinity
      // Count rotations to make top face have target value
      if (x !== target) toTop++
      // Count rotations to make bottom face have target value
      else if (y !== target) toBottom++
    }

    // Return the minimum number of rotations needed
    return Math.min(toTop, toBottom)
  }

  // Only need to check first domino's values as potential targets
  const ans = Math.min(minRot(tops[0]), minRot(bottoms[0]))

  // Return -1 if impossible, otherwise return minimum rotations
  return ans === Infinity ? -1 : ans
}
