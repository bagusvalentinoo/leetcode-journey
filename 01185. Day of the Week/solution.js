/**
 * Problem: 1185. Day of the Week
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the weekday name for a given date
 *
 * @param {number} day - Day of the month
 * @param {number} month - Month (1-12)
 * @param {number} year - Full year
 *
 * @returns {string} - Weekday name
 */
const dayOfTheWeek = (day, month, year) => {
  // Array holding the names of the days of the week, starting from Sunday
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  // Create a Date object using the provided year, month, and day
  // Note: month is zero-based in JavaScript Date, so subtract 1
  const givenDate = new Date(year, month - 1, day)

  // Get the day of the week as a number (0 for Sunday, 6 for Saturday)
  const dayIdx = givenDate.getDay()

  // Return the corresponding weekday name from the weekDay array
  return weekDay[dayIdx]
}
