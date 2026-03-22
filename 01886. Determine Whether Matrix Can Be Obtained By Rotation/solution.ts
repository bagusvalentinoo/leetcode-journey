/**
 * Problem: 1886. Determine Whether Matrix Can Be Obtained By Rotation
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if mat can be rotated to match target
 *
 * @param mat - Original matrix
 * @param target - Target matrix
 *
 * @returns True if mat can be rotated to match target
 */
const findRotation = (mat: number[][], target: number[][]): boolean => {
  // Track possible rotations (0°, 90°, 180°, 270°)
  const isValid: boolean[] = [true, true, true, true]

  // Get matrix size
  const size: number = mat.length

  // Check each cell against all rotation possibilities
  for (let row: number = 0; row < size; row++) {
    for (let col: number = 0; col < size; col++) {
      // 0° rotation
      if (target[row][col] !== mat[row][col]) isValid[0] = false
      // 90° rotation (clockwise)
      if (target[row][col] !== mat[col][size - 1 - row]) isValid[1] = false
      // 180° rotation
      if (target[row][col] !== mat[size - 1 - row][size - 1 - col])
        isValid[2] = false
      // 270° rotation (clockwise) or 90° counter-clockwise
      if (target[row][col] !== mat[size - 1 - col][row]) isValid[3] = false
    }
  }

  // Return true if any rotation matches
  return isValid[0] || isValid[1] || isValid[2] || isValid[3]
}
