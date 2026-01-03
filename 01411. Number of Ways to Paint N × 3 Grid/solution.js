/**
 * Problem: 1411. Number of Ways to Paint N × 3 Grid
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the number of ways to paint an N x 3 grid with 3 colors
 *
 * @param {number} n - The number of rows in the grid
 *
 * @returns {number} - The number of ways to paint the grid modulo 10^9+7
 */
const numOfWays = (n) => {
    // initial line
    let colors3 = 6
    let colors2 = 6
    let next2, next3 // minimize ram use

    // start after initial line
    for (let i = 2; i <= n; i++) {
        // using temporary variables to have access to previous colors2 and colors3 totals

        // each line adds 3x more 2 color versions from 2 colors and 2x of 2 color versions from 3 colors 
        next2 = 3 * colors2 + 2 * colors3
        // each line adds 2x more 3 color versions from 2 colors and 2x of 3 color versions from 3 colors 
        next3 = 2 * colors2 + 2 * colors3

        // correcting for overflow for some reason
        colors2 = next2 % 1000000007
        colors3 = next3 % 1000000007
    }

    // result is just all 2 color and 3 color combinations
    // correcting for overflow for some reason
    return (colors3 + colors2) % 1000000007
}
