/**
 * Problem: 981. Time Based Key-Value Store
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 35 ms (Beats 100%)
 */

/**
 * Time-based key-value store implementation
 */
class TimeMap {
  constructor() {
    // Stores key-value pairs with timestamps
    this.keyTimeMap = new Map()
  }

  /**
   * Sets the value for a key at a specific timestamp
   *
   * @param {string} key - The key to set the value for
   * @param {string} value - The value to set
   * @param {number} timestamp - The timestamp to associate with the value
   *
   * @returns {void}
   */
  set(key, value, timestamp) {
    // Get existing entries or create new array if key doesn't exist
    const timeEntries = this.keyTimeMap.get(key) || []

    // Add new timestamp-value pair
    timeEntries.push([timestamp, value])
    this.keyTimeMap.set(key, timeEntries)
  }

  /**
   * Binary search for the value with the largest timestamp <= target timestamp
   *
   * @param {Array} array - Array of [timestamp, value] pairs
   * @param {number} timestamp - Target timestamp
   *
   * @returns {string} - Value of closest earlier timestamp or empty string
   */
  searchBinary(array = [], timestamp) {
    // Left and right pointers for binary search
    let left = 0,
      right = array.length - 1

    while (left <= right) {
      // Calculate middle index (using ceiling to handle odd lengths)
      const mid = Math.ceil((left + right) / 2)

      // Return exact match if found
      if (array[mid][0] === timestamp) return array[mid][1]
      // Adjust search boundaries based on comparison
      if (array[mid][0] < timestamp) left = mid + 1
      else right = mid - 1
    }

    // Return the value with highest timestamp less than target
    if (right >= 0) return array[right][1]

    // Return empty string if no valid timestamp found
    return ''
  }

  /**
   * Gets value for key at specified timestamp
   *
   * @param {string} key - Key to retrieve value for
   * @param {number} timestamp - Target timestamp
   *
   * @returns {string} - Value with largest timestamp ≤ target or empty string
   */
  get(key, timestamp) {
    // Get all timestamp-value pairs for the key
    const timeEntries = this.keyTimeMap.get(key)

    // Return empty string if key doesn't exist
    if (!timeEntries?.length) return ''
    // Return latest value if timestamp is undefined or greater than all stored timestamps
    if (
      timestamp === undefined ||
      timestamp > timeEntries[timeEntries.length - 1][0]
    )
      return timeEntries[timeEntries.length - 1][1]
    // Use binary search to find appropriate value for the timestamp
    if (timestamp !== undefined)
      return this.searchBinary(timeEntries, timestamp)
  }
}
