/**
 * Problem: 3280. Convert Date to Binary
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Converts date to binary format
 *
 * @param date - YYYY-MM-DD date string
 *
 * @returns Date with binary parts
 */
const convertDateToBinary = (date: string): string =>
  // Split date into year, month, day
  date
    .split('-')
    // Convert each part to binary string
    .map((part: string) => parseInt(part).toString(2))
    // Join back with hyphens
    .join('-')
