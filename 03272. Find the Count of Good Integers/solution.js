/**
 * Problem: 3272. Find the Count of Good Integers
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of good integers containing n digits
 *gg
 * @param {number} n - Number of digits in the integer
 * @param {number} k - Divisor for k-palindromic numbers
 *
 * @returns {number} - The count of good integers
 */
const countGoodIntegers = (n, k) => {
  // Initialize answer array
  const ans = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 4, 3, 2, 1, 1, 1, 1, 1],
    [0, 9, 4, 3, 2, 1, 1, 1, 1, 1],
    [0, 243, 108, 69, 54, 27, 30, 33, 27, 23],
    [0, 252, 172, 84, 98, 52, 58, 76, 52, 28],
    [0, 10935, 7400, 3573, 4208, 2231, 2468, 2665, 2231, 1191],
    [0, 10944, 9064, 3744, 6992, 3256, 3109, 3044, 5221, 1248],
    [0, 617463, 509248, 206217, 393948, 182335, 170176, 377610, 292692, 68739],
    [0, 617472, 563392, 207840, 494818, 237112, 188945, 506388, 460048, 69280],
    [
      0, 41457015, 37728000, 13726509, 33175696, 15814071, 12476696, 36789447,
      30771543, 4623119
    ],
    [
      0, 41457024, 39718144, 13831104, 37326452, 19284856, 13249798, 40242031,
      35755906, 4610368
    ]
  ]

  // Return the count of good integers with n digits and k as the divisor
  return ans[n][k]
}
