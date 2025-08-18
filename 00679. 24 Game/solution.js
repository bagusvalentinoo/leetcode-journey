/**
 * Problem: 679. 24 Game
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if four numbers can make 24
 *
 * @param {number[]} cards - Four integers (1-9)
 * @param {string} s - Sorted string of cards
 *
 * @returns {boolean} - True if 24 is possible, else false
 */
const judgePoint24 = (cards, s = cards.sort().join('')) =>
  !['000', '001', '111', '117', '1159', '1122', '3467', '7789', '5999'].some(
    (ns) => s.startsWith(ns)
  )
