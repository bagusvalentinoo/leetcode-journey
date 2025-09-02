/**
 * Problem: 1206. Design Skiplist
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

// Define the Skiplist constructor function
const Skiplist = function () {
  // Initialize a Map to store numbers and their counts
  this.nums2counts = new Map()
}

/**
 * Search for a target number in the skiplist
 *
 * @param {number} target - The number to search for
 *
 * @returns {boolean} - True if target exists with count > 0
 */
Skiplist.prototype.search = function (target) {
  // Check if the target exists in the map and its count is greater than 0
  if (this.nums2counts.has(target) && this.nums2counts.get(target) > 0)
    return true

  // Return false if the target does not exist or its count is 0
  return false
}

/**
 * Add a number to the skiplist
 *
 * @param {number} num - The number to add
 *
 * @returns {void}
 */
Skiplist.prototype.add = function (num) {
  // If the number does not exist in the map, initialize its count to 0
  if (!this.nums2counts.has(num)) this.nums2counts.set(num, 0)

  // Increment the count of the number by 1
  this.nums2counts.set(num, this.nums2counts.get(num) + 1)
}

/**
 * Removes one occurrence of a number
 *
 * @param {number} num - Number to remove
 *
 * @returns {boolean} - True if removed, else false
 */
Skiplist.prototype.erase = function (num) {
  // Check if the number exists in the map and its count is greater than 0
  if (this.nums2counts.has(num) && this.nums2counts.get(num) > 0) {
    // Decrement the count of the number by 1
    this.nums2counts.set(num, this.nums2counts.get(num) - 1)

    // Return true to indicate successful erasure
    return true
  }

  // Return false if the number does not exist or its count is 0
  return false
}
