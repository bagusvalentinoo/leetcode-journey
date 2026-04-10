/**
 * Problem: 3740. Minimum Distance Between Three Equal Elements I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum distance between same numbers in array
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Minimum distance between equal elements
 */
const minimumDistance = (nums) => {
  // Get length of input array
  const arrayLength = nums.length

  // Array to store previous positions (packed as [previous, current])
  const lastPositions = Array(arrayLength).fill(0)

  // Initialize result with maximum possible value
  let minDistance = 300

  // Iterate through each element in the array
  for (let i = 0; i < arrayLength; i++) {
    // Convert 1-indexed value to 0-indexed for array access
    const valueIndex = nums[i] - 1

    // Current position (1-indexed)
    const currentPos = i + 1

    // Retrieve packed data: low 8 bits = previous position
    const packedData = lastPositions[valueIndex]
    const previousPos = packedData & 255
    const _currentPos = packedData >> 8 // Not used

    // Store current position in high bits, keep previous in low bits
    lastPositions[valueIndex] = _currentPos | (currentPos << 8)

    // Update minimum distance if we have a previous position
    if (previousPos)
      minDistance = Math.min(minDistance, (currentPos - previousPos) << 1)
  }

  // Return 0 if no distance found, otherwise return minDistance
  return -(minDistance === 300) | minDistance
}
