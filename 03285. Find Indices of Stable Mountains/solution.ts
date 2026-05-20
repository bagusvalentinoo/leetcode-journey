/**
 * Problem: 3285. Find Indices of Stable Mountains
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds indices where previous mountain height exceeds threshold
 *
 * @param height - Array of mountain heights
 * @param threshold - Height threshold value
 *
 * @returns Indices where previous height > threshold
 */
const stableMountains = (height: number[], threshold: number): number[] => {
  // Array to store indices meeting the condition
  const validIndices: number[] = []

  // Iterate through heights starting from index 1 (need previous element)
  for (
    let currentIndex: number = 1;
    currentIndex < height.length;
    currentIndex++
  ) {
    // If previous mountain height exceeds threshold, add current index
    if (height[currentIndex - 1] > threshold) validIndices.push(currentIndex)
  }

  // Return the array of valid indices
  return validIndices
}
