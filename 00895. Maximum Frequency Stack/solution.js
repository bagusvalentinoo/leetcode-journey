/**
 * Problem: 895. Maximum Frequency Stack
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 49 ms (Beats 100%)
 */

var FreqStack = function () {
  // Counter map
  this.cnt = new Map()
  // Stack map
  this.stack = new Map()
  // Maximum frequency
  this.maxCnt = 0
}

/**
 * Pushes a value into the frequency stack
 *
 * @param {number} val - The value to push
 *
 * @returns {void}
 */
FreqStack.prototype.push = function (val) {
  // Get current count or 0 and increment
  const count = (this.cnt.get(val) || 0) + 1
  // Update count map
  this.cnt.set(val, count)

  // Update maximum frequency
  if (count > this.maxCnt) {
    this.maxCnt = count

    // Initialize stack for new frequency
    if (!this.stack.has(count)) this.stack.set(count, [])
  }

  // Push value into the stack
  this.stack.get(count).push(val)
}

/**
 * Pops the most frequent value from the frequency stack
 *
 * @returns {number} - The most frequent value
 */
FreqStack.prototype.pop = function () {
  // Get the most frequent value
  const res = this.stack.get(this.maxCnt).pop()
  // Update count map
  this.cnt.set(res, this.cnt.get(res) - 1)

  // Update maximum frequency
  if (this.stack.get(this.maxCnt).length === 0) this.maxCnt = this.maxCnt - 1

  return res
}
