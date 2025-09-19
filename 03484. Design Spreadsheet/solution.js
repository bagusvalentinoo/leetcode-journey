/**
 * Problem: 3484. Design Spreadsheet
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 54 ms (Beats 100%)
 */

/**
 * Spreadsheet constructor function
 * Initializes a new Map to store cell values
 *
 * @param {number} rows - (Unused parameter, can be used for future extension)
 */
const Spreadsheet = function () {
  // Initialize a Map to store cell-value pairs
  this.sheet = new Map()
}

/**
 * Sets the value of a specific cell in the spreadsheet
 *
 * @param {string} cell - The cell identifier (e.g., "A1")
 * @param {number} value - The value to set for the cell
 *
 * @returns {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  // Store the value in the sheet Map with the cell as the key
  this.sheet.set(cell, value)
}

/**
 * Resets (removes) the value of a specific cell in the spreadsheet
 *
 * @param {string} cell - The cell identifier to reset
 *
 * @returns {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  // Check if the cell exists in the sheet Map and delete it if present
  if (this.sheet.has(cell)) this.sheet.delete(cell)
}

/**
 * Evaluates a formula and returns its computed value
 * The formula is expected in the format "=A1+B2" or "=1+2"
 *
 * @param {string} formula - The formula string to evaluate
 *
 * @returns {number} - The computed value of the formula
 */
Spreadsheet.prototype.getValue = function (formula) {
  // Remove the leading '=' and split the formula into two operands by '+'
  const [val1, val2] = formula.slice(1).split('+')

  // Determine the value of the first operand: use number if possible, otherwise get from sheet
  const value1 = !Number.isNaN(Number(val1))
    ? Number(val1)
    : this.sheet.get(val1) || 0

  // Determine the value of the second operand: use number if possible, otherwise get from sheet
  const value2 = !Number.isNaN(Number(val2))
    ? Number(val2)
    : this.sheet.get(val2) || 0

  // Return the sum of the two operand values
  return value1 + value2
}
