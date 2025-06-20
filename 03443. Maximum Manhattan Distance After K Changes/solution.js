/**
 * Problem: 3443. Maximum Manhattan Distance After K Changes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 51 ms (Beats 100%)
 */

/**
 * Calculate maximum Manhattan distance by changing at most k moves
 *
 * @param {string} s - Movement string (N/S/E/W)
 * @param {number} k - Max changes allowed
 *
 * @returns {number} - Maximum Manhattan distance
 */
const maxDistance = (s, k) => {
  // Initialize starting position coordinates
  let currentX = 0,
    currentY = 0
  // Track the maximum distance achieved
  let maximumDistance = 0

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]

    // Update position based on movement direction
    if (ch === 'N') currentY++
    else if (ch === 'S') currentY--
    else if (ch === 'E') currentX++
    else if (ch === 'W') currentX--

    // Calculate available changes (limited by k and current step)
    const changes = Math.min(k, i + 1)
    // Calculate distance with optimal changes applied
    let dist = Math.abs(currentX) + Math.abs(currentY) + 2 * changes

    // Cap distance by total moves made
    dist = Math.min(dist, i + 1)
    // Update maximum distance found
    maximumDistance = Math.max(maximumDistance, dist)
  }

  return maximumDistance
}
