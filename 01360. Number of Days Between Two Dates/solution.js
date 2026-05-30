/**
 * Problem: 1360. Number of Days Between Two Dates
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates number of days between two dates
 *
 * @param {string} date1 - First date in YYYY-MM-DD format
 * @param {string} date2 - Second date in YYYY-MM-DD format
 *
 * @returns {number} Absolute difference in days
 */
const daysBetweenDates = (date1, date2) =>
  Math.abs(
    (new Date(date1).getTime() - new Date(date2).getTime()) /
      (1000 * 60 * 60 * 24)
  )
