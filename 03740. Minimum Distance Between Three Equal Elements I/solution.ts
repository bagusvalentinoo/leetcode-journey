/**
 * Problem: 3740. Minimum Distance Between Three Equal Elements I
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum distance between same numbers in array
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum distance between equal elements
 */
const minimumDistance = (nums: number[]): number => {
  // Get length of input array
  const arrayLength: number = nums.length

  // Array to store previous positions (packed as [previous, current])
  const lastPositions: number[] = Array(arrayLength).fill(0)

  // Initialize result with maximum possible value
  let minDistance: number = 300

  // Iterate through each element in the array
  for (let i: number = 0; i < arrayLength; i++) {
    // Convert 1-indexed value to 0-indexed for array access
    const valueIndex: number = nums[i] - 1

    // Current position (1-indexed)
    const currentPos: number = i + 1

    // Retrieve packed data: low 8 bits = previous position
    const packedData: number = lastPositions[valueIndex]
    const previousPos: number = packedData & 255
    const _currentPos: number = packedData >> 8 // Not used

    // Store current position in high bits, keep previous in low bits
    lastPositions[valueIndex] = _currentPos | (currentPos << 8)

    // Update minimum distance if we have a previous position
    if (previousPos)
      minDistance = Math.min(minDistance, (currentPos - previousPos) << 1)
  }

  // Return 0 if no distance found, otherwise return minDistance
  return -(minDistance === 300) | minDistance
}
