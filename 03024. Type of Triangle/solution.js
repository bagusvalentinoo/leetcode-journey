/**
 * Problem: 3024. Type of Triangle
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Classifies a triangle based on side lengths
 *
 * @param {number[]} nums - Three side lengths
 *
 * @returns {string} - "equilateral", "isosceles", "scalene", or "none" if invalid
 */
const triangleType = (nums) => {
  // Destructure the array into three sides
  const [a, b, c] = nums

  // Check if triangle inequality is violated (not a valid triangle)
  if (a + b <= c || a + c <= b || b + c <= a) return 'none'
  // Check if all sides are equal
  if (a === b && b === c) return 'equilateral'
  // Check if exactly two sides are equal
  if (a === b || b === c || a === c) return 'isosceles'

  // If all tests fail, triangle has three unequal sides
  return 'scalene'
}
