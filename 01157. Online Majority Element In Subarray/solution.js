/**
 * Problem: 1157. Online Majority Element In Subarray
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 89 ms (Beats 100%)
 */

/**
 * MajorityChecker class provides methods to efficiently query the majority element in a subarray.
 */
class MajorityChecker {
  /**
   * Initializes the MajorityChecker with the given array
   *
   * @param {number[]} arr - The input array to process
   */
  constructor(arr) {
    this.arr = arr // Store the input array
    this.posMap = new Map() // Map to store positions of each value in the array.

    // Populate posMap with indices for each value in arr.
    for (let i = 0; i < arr.length; i++) {
      // Initialize array for new value.
      if (!this.posMap.has(arr[i])) this.posMap.set(arr[i], [])

      this.posMap.get(arr[i]).push(i) // Store index of current value.
    }
  }

  /**
   * Counts the occurrences of a value within a specified range [left, right]
   *
   * @param {number} val - The value to count
   * @param {number} left - The left boundary of the range
   * @param {number} right - The right boundary of the range
   *
   * @returns {number} - The count of val in the range
   */
  countInRange(val, left, right) {
    // Get all positions of val.
    const positions = this.posMap.get(val)

    // Return 0 if val does not exist.
    if (!positions) return 0

    // Binary search for the first position >= left.
    let low = 0
    let high = positions.length - 1
    let startIdx = positions.length // Default to out of bounds.

    while (low <= high) {
      // Calculate mid index.
      const midIdx = (low + high) >> 1

      // If position at midIdx is >= left, update startIdx and search left half.
      if (positions[midIdx] >= left) {
        startIdx = midIdx
        high = midIdx - 1
      }
      // Otherwise, search right half.
      else low = midIdx + 1
    }

    // Binary search for the last position <= right.
    low = 0
    high = positions.length - 1

    // Default to out of bounds.
    let endIdx = -1

    while (low <= high) {
      // Calculate mid index.
      const midIdx = (low + high) >> 1

      // If position at midIdx is <= right, update endIdx and search right half.
      if (positions[midIdx] <= right) {
        endIdx = midIdx
        low = midIdx + 1
      }
      // Otherwise, search left half.
      else high = midIdx - 1
    }

    // If valid range, return count of occurrences in [left, right].
    if (startIdx <= endIdx) return endIdx - startIdx + 1

    // Otherwise, return 0.
    return 0
  }

  /**
   * Returns a majority element in [left, right] with at least threshold occurrences
   *
   * @param {number} left - Left index of range
   * @param {number} right - Right index of range
   * @param {number} threshold - Minimum required count
   *
   * @returns {number} - Majority element or -1 if none
   */
  query(left, right, threshold) {
    // Calculate length of the range.
    const rangeLength = right - left + 1

    // Try up to 20 random indices in the range to find a candidate.
    for (let attempt = 0; attempt < 20; attempt++) {
      // Pick a random index in range.
      const randomIdx = left + Math.floor(Math.random() * rangeLength)
      // Get candidate value.
      const candidate = this.arr[randomIdx]
      // Count candidate occurrences.
      const candidateCount = this.countInRange(candidate, left, right)

      // If candidate meets threshold, return it.
      if (candidateCount >= threshold) return candidate
    }

    // If no candidate found, return -1.
    return -1
  }
}
