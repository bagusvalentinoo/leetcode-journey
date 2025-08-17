/**
 * Problem: 1154. Day of the Year
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Returns the day of the year for a date string
 *
 * @param {string} date - Date in 'YYYY-MM-DD' format
 *
 * @returns {number} - Day of the year (1-based)
 */
const dayOfYear = (date) => {
  // Array representing the number of days in each month (non-leap year)
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Extract the month from the date string ('YYYY-MM-DD'), convert to number
  const month = (date[5] - '0') * 10 + (date[6] - '0')

  // Extract the day from the date string, convert to number
  let dayOfMonth = (date[8] - '0') * 10 + (date[9] - '0')

  // Extract the year from the date string, convert to number
  const year =
    (date[0] - '0') * 1000 +
    (date[1] - '0') * 100 +
    (date[2] - '0') * 10 +
    (date[3] - '0')

  // Sum the days in all months before the current month
  for (let i = 0; i < month - 1; i++) dayOfMonth += daysInMonths[i]

  // If the date is after February and it's a leap year, add one day
  if (month > 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
    dayOfMonth += 1

  // Return the calculated day of the year
  return dayOfMonth
}
