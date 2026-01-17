/**
 * Problem: 2943. Maximize Area of Square Hole in Grid
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates maximum square area achievable by removing bars
 *
 * @param {number} n - Number of horizontal gaps (unused)
 * @param {number} m - Number of vertical gaps (unused)
 * @param {number[]} hBars - Horizontal bars to remove
 * @param {number[]} vBars - Vertical bars to remove
 *
 * @returns {number} - Maximum square area achievable
 */
const maximizeSquareHoleArea = (n, m, hBars, vBars) => {
    // Helper function: finds longest consecutive sequence length in sorted array
    const longestConsecutiveSequence = (arr) => {
        // Sort array for consecutive number detection
        arr.sort((x, y) => x - y)

        let longest = 1  // Minimum gap size (no consecutive bars)
        let current = 1  // Current consecutive sequence length

        // Traverse sorted array to find longest consecutive sequence
        for (let i = 1; i < arr.length; i++) {
            // Check if current number is consecutive to previous
            if (arr[i] === arr[i - 1] + 1) current++
            else current = 1  // Reset sequence if gap exists

            // Update longest sequence if current is longer
            if (current > longest) longest = current
        }

        // Return length + 1 (gap count = consecutive bars + 1)
        return longest + 1
    }

    // Find maximum consecutive bars in both dimensions
    const horizontalGap = longestConsecutiveSequence(hBars)
    const verticalGap = longestConsecutiveSequence(vBars)

    // Square side limited by smaller dimension gap
    const maxSquareSide = Math.min(horizontalGap, verticalGap)

    // Return maximum square area
    return maxSquareSide * maxSquareSide
}
