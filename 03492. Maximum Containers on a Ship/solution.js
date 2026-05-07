/**
 * Problem: 3492. Maximum Containers on a Ship
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates maximum number of containers that can be loaded
 *
 * @param {number} n - Grid size (n x n)
 * @param {number} w - Weight per container
 * @param {number} maxWeight - Maximum weight capacity
 *
 * @returns {number} Maximum number of containers
 */
const maxContainers = (n, w, maxWeight) => Math.min(n * n, maxWeight / w) | 0
