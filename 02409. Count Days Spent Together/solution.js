/**
 * Problem: 2409. Count Days Spent Together
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count the inclusive overlap between Alice and Bob's stay dates
 *
 * @param {string} arriveAlice - Alice's arrival date
 * @param {string} leaveAlice - Alice's departure date
 * @param {string} arriveBob - Bob's arrival date
 * @param {string} leaveBob - Bob's departure date
 *
 * @returns {number} Number of days spent together
 */
const countDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) => {
  // Store the number of days in each month of a non-leap year
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Convert a date into its one-based day of the year
  const getDayOfYear = (date) => {
    // Extract the zero-based month and day from the date string
    const month = Number(date.slice(0, 2)) - 1,
      day = Number(date.slice(3))

    // Initialize the day of the year to the day of the month
    let dayOfYear = day

    // Add the days in the months preceding the date's month
    for (let i = 0; i < month; i++) dayOfYear += daysInMonth[i]

    // Return the date's day of the year
    return dayOfYear
  }

  // Find the first day and last day shared by both stays
  const startDay = Math.max(getDayOfYear(arriveAlice), getDayOfYear(arriveBob)),
    endDay = Math.min(getDayOfYear(leaveAlice), getDayOfYear(leaveBob))

  // Return the inclusive overlap, or zero when the stays do not intersect
  return Math.max(0, endDay - startDay + 1)
}
