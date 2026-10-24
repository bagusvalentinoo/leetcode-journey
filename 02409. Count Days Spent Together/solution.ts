/**
 * Problem: 2409. Count Days Spent Together
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count the inclusive overlap between Alice and Bob's stay dates
 *
 * @param arriveAlice - Alice's arrival date
 * @param leaveAlice - Alice's departure date
 * @param arriveBob - Bob's arrival date
 * @param leaveBob - Bob's departure date
 *
 * @returns Number of days spent together
 */
const countDaysTogether = (
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number => {
  // Store the number of days in each month of a non-leap year
  const daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Convert a date into its one-based day of the year
  const getDayOfYear = (date: string): number => {
    // Extract the zero-based month and day from the date string
    const month: number = Number(date.slice(0, 2)) - 1,
      day: number = Number(date.slice(3))

    // Initialize the day of the year to the day of the month
    let dayOfYear: number = day

    // Add the days in the months preceding the date's month
    for (let i: number = 0; i < month; i++) dayOfYear += daysInMonth[i]

    // Return the date's day of the year
    return dayOfYear
  }

  // Find the first day and last day shared by both stays
  const startDay: number = Math.max(
      getDayOfYear(arriveAlice),
      getDayOfYear(arriveBob)
    ),
    endDay: number = Math.min(getDayOfYear(leaveAlice), getDayOfYear(leaveBob))

  // Return the inclusive overlap, or zero when the stays do not intersect
  return Math.max(0, endDay - startDay + 1)
}
