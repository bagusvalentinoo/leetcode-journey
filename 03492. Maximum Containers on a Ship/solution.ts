/**
 * Problem: 3492. Maximum Containers on a Ship
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates maximum number of containers that can be loaded
 *
 * @param n - Grid size (n x n)
 * @param w - Weight per container
 * @param maxWeight - Maximum weight capacity
 *
 * @returns Maximum number of containers
 */
const maxContainers = (n: number, w: number, maxWeight: number): number =>
  Math.min(n * n, Math.floor(maxWeight / w)) | 0
