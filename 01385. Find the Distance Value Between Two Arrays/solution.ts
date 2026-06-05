/**
 * Problem: 1385. Find the Distance Value Between Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts elements in arr1 that are within distance d from all elements in arr2
 *
 * @param arr1 - First array of integers
 * @param arr2 - Second array of integers
 * @param d - Maximum allowed distance
 *
 * @returns Count of valid elements in arr1
 */
const findTheDistanceValue = (
  arr1: number[],
  arr2: number[],
  d: number
): number => {
  // Counter for elements that satisfy the condition
  let validElementCount: number = 0

  // Iterate through each element in the first array
  for (let i: number = 0; i < arr1.length; i++) {
    // Flag to track if current element is valid (initially assumed true)
    let isValid: boolean = true

    // Check distance against all elements in second array
    for (let j: number = 0; j < arr2.length; j++) {
      // If any element in arr2 is within distance d, current element is invalid
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        // Mark as invalid
        isValid = false
        // Exit inner loop early since no need to check further
        break
      }
    }

    // Increment counter if element is valid
    if (isValid) validElementCount++
  }

  // Return the total count of valid elements
  return validElementCount
}
