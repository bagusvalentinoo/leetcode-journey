/**
 * Problem: 900. RLE Iterator
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Initialize the iterator with the given encoding array.
 *
 * @param {number[]} encoding - The encoding array
 */
var RLEIterator = function (encoding) {
  this._ptr = 0 // Current pointer in the encoding array
  this._counter = encoding.length > 1 ? encoding[0] : 0 // Counter for the current run
  this._encoding = encoding // The encoding array
}

/**
 * Returns the next element in the sequence.
 *
 * @param {number} n - Number of elements to skip
 *
 * @returns {number} - Next element in the sequence
 */
RLEIterator.prototype.next = function (n) {
  let v = -1

  // Skip n elements
  while (n > 0 && this._ptr < this._encoding.length - 1) {
    // If n is less than or equal to the current counter
    if (n <= this._counter) {
      this._counter = this._counter - (n - 1)
      v = this.nextOne()
      n = 0
    } else {
      // Skip the current run
      while (n > this._counter && this._ptr < this._encoding.length - 1) {
        n -= this._counter
        this._ptr += 2
        this._counter = this._encoding[this._ptr]
      }
    }
  }

  // Return the next element
  return v
}

/**
 * Returns the next element in the sequence.
 *
 * @returns {number} - Next element in the sequence
 */
RLEIterator.prototype.nextOne = function () {
  // Return the next element
  if (this._ptr < this._encoding.length - 1) {
    // If there are elements left in the current run
    if (this._counter > 0) {
      const v = this._encoding[this._ptr + 1] // Next element
      this._counter-- // Decrement the counter

      // Move to the next run
      while (this._counter === 0 && this._ptr < this._encoding.length - 1) {
        this._ptr += 2 // Move to the next run
        this._counter = this._encoding[this._ptr] // Update the counter
      }

      return v // Return the next element
    }
  } else return -1 // No more elements
}
