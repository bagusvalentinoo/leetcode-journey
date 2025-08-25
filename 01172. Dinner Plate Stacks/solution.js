/**
 * Problem: 1172. Dinner Plate Stacks
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 175 ms (Beats 100%)
 */

/**
 * DinnerPlates manages stacks of plates with fixed capacity
 *
 * @param {number} capacity - Plates per stack
 *
 * @returns {void}
 */
const DinnerPlates = function (capacity) {
  // Store the maximum capacity for each stack
  this.capacity = capacity
  // Track the total number of plates currently in all stacks
  this.occupied = 0
  // Array to hold all stacks (each stack is an array)
  this.stacks = []

  // Helper function to calculate total capacity across all stacks
  this.getTotalCapacity = () => this.stacks.length * this.capacity
  // Helper function to check if all stacks are full
  this.isFull = () => this.getTotalCapacity() === this.occupied
}

/**
 * Pushes a plate with value 'val' onto the leftmost stack with available space
 *
 * @param {number} val - Value to push onto a stack
 *
 * @returns {void}
 */
DinnerPlates.prototype.push = function (val) {
  // If all stacks are full, create a new stack and push the value
  if (this.isFull()) {
    this.stacks.push([])
    this.stacks[this.stacks.length - 1].push(val)
    this.occupied++
    return
  }

  // Start searching from the last stack
  let index = this.stacks.length - 1

  // If the last stack is full, find the first stack with available space
  if (
    this.occupied !==
    (this.stacks.length - 1) * this.capacity + this.stacks[index].length
  ) {
    for (let i = 0; i < this.stacks.length; i++) {
      // Find the first stack that is not full
      if (this.stacks[i].length !== this.capacity) {
        index = i
        break
      }
    }
  }

  // Push the value onto the selected stack
  this.stacks[index].push(val)
  // Increment the total occupied count
  this.occupied++
}

/**
 * Pops a plate from the rightmost non-empty stack
 *
 * @returns {number} - Value popped, or -1 if all stacks are empty
 */
DinnerPlates.prototype.pop = function () {
  // If there are no plates, return -1
  if (!this.occupied) return -1

  // Start from the last stack
  let i = this.stacks.length - 1

  // Remove empty stacks from the end
  while (i && !this.stacks[i].length) {
    this.stacks.pop()
    i--
  }

  // Pop the value from the last non-empty stack
  const lastStack = this.stacks[this.stacks.length - 1]
  const res = lastStack.pop()
  // Decrement the total occupied count
  this.occupied--

  // Remove the stack if it becomes empty after popping
  if (!lastStack.length) this.stacks.pop()

  // Return the popped value
  return res
}

/**
 * Pops a plate from stack at given index
 *
 * @param {number} index - Stack index
 *
 * @returns {number} Popped value or -1 if invalid/empty
 */
DinnerPlates.prototype.popAtStack = function (index) {
  // If index is out of bounds or stack is empty, return -1
  if (index >= this.stacks.length || this.stacks[index].length === 0) return -1

  // Decrement the total occupied count
  this.occupied--

  // Pop and return the value from the specified stack
  return this.stacks[index].pop()
}
