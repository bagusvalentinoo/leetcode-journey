/**
 * Problem: 1298. Maximum Candies You Can Get from Boxes
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Calculate maximum candies obtainable from boxes
 *
 * @param {number[]} status - Box status (1=open, 0=closed)
 * @param {number[]} candies - Candies in each box
 * @param {number[][]} keys - Keys in each box
 * @param {number[][]} containedBoxes - Boxes inside each box
 * @param {number[]} initialBoxes - Starting boxes
 *
 * @returns {number} - Total candies collected
 */
const maxCandies = (status, candies, keys, containedBoxes, initialBoxes) => {
  // Track boxes that need keys to be opened
  const pendingBoxes = new Set()
  // Track which keys we've found (1 = found, 0 = not found)
  const collectedKeys = new Array(status.length).fill(0)
  // Queue of boxes we can currently open
  const boxQueue = []

  // Process initial boxes
  for (const box of initialBoxes) {
    if (status[box] === 1) boxQueue.push(box)
    else pendingBoxes.add(box)
  }

  // Total candies collected
  let totalCandies = 0

  // Function to process an open box
  const openBox = (box) => {
    totalCandies += candies[box]

    // Process keys found in this box
    for (const nextBox of keys[box]) {
      collectedKeys[nextBox] = 1

      if (pendingBoxes.has(nextBox)) {
        pendingBoxes.delete(nextBox)
        status[nextBox] = 1
        boxQueue.push(nextBox)
      }
    }

    // Process boxes found inside this box
    for (const nextBox of containedBoxes[box]) {
      if (status[nextBox] === 1) boxQueue.push(nextBox)
      else {
        if (collectedKeys[nextBox] === 1) {
          status[nextBox] = 1
          boxQueue.push(nextBox)
        } else {
          pendingBoxes.add(nextBox)
        }
      }
    }
  }

  // Process all available boxes until none remain
  while (boxQueue.length > 0) {
    const box = boxQueue.shift()
    openBox(box)
  }

  return totalCandies
}
