/**
 * Problem: 1491. Average Salary Excluding the Minimum and Maximum Salary
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates average salary excluding min and max
 *
 * @param salary - Array of unique salaries
 *
 * @returns Average of middle salaries
 */
const average = (salary: number[]): number => {
  // Sum all salaries
  let sum: number = 0
  // Track minimum and maximum salary
  let min: number = Infinity,
    max: number = -Infinity

  // Single pass to find sum, min, and max
  for (const sal of salary) {
    sum += sal
    min = Math.min(min, sal)
    max = Math.max(max, sal)
  }

  // Return average excluding min and max
  return (sum - min - max) / (salary.length - 2)
}
