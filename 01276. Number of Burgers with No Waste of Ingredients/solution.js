/**
 * Problem: 1276. Number of Burgers with No Waste of Ingredients
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the number of jumbo and small burgers
 *
 * @param {number} tomatoSlices - Total tomato slices
 * @param {number} cheeseSlices - Total cheese slices
 *
 * @returns {number[]} - Array with counts of jumbo and small burgers
 */
const numOfBurgers = (tomatoSlices, cheeseSlices) =>
  tomatoSlices % 2 === 1 ||
  tomatoSlices / 2 < cheeseSlices ||
  tomatoSlices / 4 > cheeseSlices
    ? []
    : [tomatoSlices / 2 - cheeseSlices, 2 * cheeseSlices - tomatoSlices / 2]
