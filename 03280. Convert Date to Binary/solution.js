/**
 * Problem: 3280. Convert Date to Binary
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Converts date to binary format
 *
 * @param {string} date - YYYY-MM-DD date string
 *
 * @returns {string} Date with binary parts
 */
const convertDateToBinary = (date) =>
  // Split date into year, month, day
  date
    .split('-')
    // Convert each part to binary string
    .map((part) => parseInt(part).toString(2))
    // Join back with hyphens
    .join('-')
