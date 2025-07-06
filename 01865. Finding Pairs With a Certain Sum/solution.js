/**
 * Problem: 1865. Finding Pairs With a Certain Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 66 ms (Beats 100%)
 */

/**
 * FindSumPairs class to manage two arrays and count pairs that sum to a target value
 */
class FindSumPairs {
  /**
   * Create a FindSumPairs object that stores two arrays of integers
   *
   * @param {Array<number>} arr1 - First array of integers
   * @param {Array<number>} arr2 - Second array of integers
   *
   * @returns {void}
   */
  constructor(arr1, arr2) {
    // Store references to the input arrays
    this.nums1 = arr1
    this.nums2 = arr2

    // Initialize frequency maps to count occurrences of each value
    this.freq1 = new Map()
    this.freq2 = new Map()

    // Build frequency map for first array
    for (const num of this.nums1)
      this.freq1.set(num, (this.freq1.get(num) || 0) + 1)

    // Create sorted keys for optimized counting (early termination)
    this.sortedNums1Keys = [...this.freq1.keys()].sort((a, b) => a - b)

    // Build frequency map for second array
    for (const num of this.nums2)
      this.freq2.set(num, (this.freq2.get(num) || 0) + 1)
  }

  /**
   * Update the value at the specified index in the second array
   *
   * @param {number} index - The index in the second array to update
   * @param {number} val - The value to add to the current value at the
   *
   * @returns {void}
   */
  add(index, val) {
    // Get the current value at the specified index
    const currentValue = this.nums2[index]
    // Calculate the new value after adding the increment
    const updatedValue = currentValue + val

    // Get the frequency count of the current value
    const currentFrequency = this.freq2.get(currentValue)

    // Remove the old value from frequency map if it was the last occurrence
    if (currentFrequency === 1) this.freq2.delete(currentValue)
    // Otherwise decrease the frequency count by 1
    else this.freq2.set(currentValue, currentFrequency - 1)

    // Add or increment the frequency count for the new value
    this.freq2.set(updatedValue, (this.freq2.get(updatedValue) || 0) + 1)
    // Update the array with the new value
    this.nums2[index] = updatedValue
  }

  /**
   * Count the number of pairs that sum up to the target value
   *
   * @param {number} target - The target sum to find pairs for
   *
   * @returns {number} - The count of unique pairs that sum to the target
   */
  count(target) {
    // Initialize counter for total pairs found
    let pairCount = 0

    // Iterate through sorted values from first array for optimization
    for (const val1 of this.sortedNums1Keys) {
      // Early termination if value exceeds target (sorted order optimization)
      if (val1 > target) break

      // Calculate required complement value from second array
      const val2 = target - val1
      // Get frequency count of complement value in second array
      const count2 = this.freq2.get(val2)

      // If complement exists, multiply frequencies to get pair count
      if (count2 !== undefined) pairCount += this.freq1.get(val1) * count2
    }

    // Return total number of valid pairs
    return pairCount
  }
}
