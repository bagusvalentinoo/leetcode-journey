/**
 * Problem: 901. Online Stock Span
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 36 ms (Beats 99.82%)
 */

/**
 * Initializes a new instance of the StockSpanner class.
 */
var StockSpanner = function () {
  this.stack = []
}

/**
 * Returns the span of the current price.
 *
 * @param {number} price - The current price
 *
 * @returns {number} - The span of the current price
 */
StockSpanner.prototype.next = function (price) {
  let [curPrice, curSpan] = [price, 1] // Current price and span

  // Calculate the span by popping the stack
  while (
    this.stack.length &&
    this.stack[this.stack.length - 1].price <= curPrice
  ) {
    // Add the previous span to the current span
    const prevSpan = this.stack.pop().span
    curSpan += prevSpan
  }

  // Push the current price and span to the stack
  this.stack.push({ price: curPrice, span: curSpan })

  return curSpan
}
