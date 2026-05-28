/**
 * Problem: 1346. Check If N and Its Double Exist
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if there exist two indices where one value is double the other
 *
 * @param arr - Input array of integers
 *
 * @returns True if such pair exists
 */
const checkIfExist = (arr: number[]): boolean => {
  // Iterate through each element as potential first element
  for (let i: number = 0; i < arr.length; i++) {
    // Compare with subsequent elements
    for (let j: number = i + 1; j < arr.length; j++) {
      // Check if either value is double the other
      if (arr[i] === arr[j] * 2 || arr[j] === arr[i] * 2) return true
    }
  }

  // If no such pair is found, return false
  return false
}
