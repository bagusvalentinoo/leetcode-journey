/**
 * Problem: 957. Prison Cells After N Days
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the next day's prison cell state based on rules
 *
 * @param {number[]} cell - Current cell state (0=inactive, 1=active)
 *
 * @returns {number[]} - Next day's cell state
 */
const getNextDayCell = (cell) => {
  // Create a new array of same length filled with zeros
  const nextDay = new Array(cell.length).fill(0)

  // Iterate through cells (excluding endpoints) and apply prison rules
  for (let i = 1; i < cell.length - 1; i++)
    // Cell becomes active (1) if neighbors match, inactive (0) if they differ
    if (cell[i - 1] === cell[i + 1]) nextDay[i] = 1
    else nextDay[i] = 0

  // Return the next day's cell configuration
  return nextDay
}

/**
 * Returns the prison cell state after n days
 *
 * @param {number[]} cells - Initial cell state (0=inactive, 1=active)
 * @param {number} n - Number of days to simulate
 *
 * @returns {number[]} - Cell state after n days
 */
const prisonAfterNDays = (cells, n) => {
  // Track unique cell states to detect cycles
  const seen = new Set()

  // Variables to track cycle detection
  let cycle = false,
    len = 0

  // Simulate prison evolution for up to n days
  for (let i = 0; i < n; i++) {
    // Calculate the next day's cell state
    const nextDay = getNextDayCell(cells)

    // If this is a new state, add it to our seen set
    if (!seen.has(nextDay.toString())) {
      seen.add(nextDay.toString())
      len++
    } else {
      // We found a cycle in the pattern
      cycle = true
      break
    }

    // Update cells to the next day's state
    cells = nextDay
  }

  // If a cycle was detected, use modulo to skip redundant calculations
  if (cycle) return prisonAfterNDays(cells, n % len)

  // Return final cell state after n days
  return cells
}
