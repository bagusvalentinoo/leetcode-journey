/**
 * Problem: 1507. Reformat Date
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reformats date from Day Month Year to YYYY-MM-DD
 *
 * @param {string} date - Input date string (e.g., "20th Oct 2052")
 *
 * @returns {string} Reformatted date in YYYY-MM-DD format
 */
const reformatDate = (date) => {
  // Split date into day, month, and year components
  const dateParts = date.split(' ')

  // Extract day number by removing ordinal suffix (st, nd, rd, th) and pad to 2 digits
  const dayString = dateParts[0].slice(0, -2).padStart(2, '0')

  // Map month abbreviation to two-digit month number
  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }

  // Look up month number from abbreviation
  const monthString = monthMap[dateParts[1]]

  // Extract year component
  const yearString = dateParts[2]

  // Return formatted date as YYYY-MM-DD
  return `${yearString}-${monthString}-${dayString}`
}
