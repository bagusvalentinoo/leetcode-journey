/**
 * Problem: 1437. Check If All 1's Are at Least Length K Places Away
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all 1s in the binary array are at least k apart
 *
 * @param nums - Binary array
 * @param k - Minimum gap between 1s
 *
 * @returns - True if all 1s are at least k apart
 */
const kLengthApart = (nums: number[], k: number): boolean => {
  // Initialize a variable to track the index of the previous 1
  let previousIndex = -1

  // Iterate through the binary array
  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    // Check if the current element is 1
    if (nums[currentIndex] === 1) {
      // If a previous 1 was found, check the distance between them
      if (previousIndex !== -1 && currentIndex - previousIndex - 1 < k)
        // Return false if the distance is less than k
        return false

      // Update the index of the previous 1
      previousIndex = currentIndex
    }
  }

  // Return true if all 1's are at least `k` places apart
  return true
}
