/**
 * Problem: 1488. Avoid Flood in The City
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 121 ms (Beats 100%)
 */

/**
 * Node class for AVL Tree
 * Represents a single node in the AVL tree with value, left/right children, and height
 */
class Node {
  /**
   * Constructs a new Node with the given value
   *
   * @param {number} value - The value to store in the node
   */
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

/**
 * AVLTree class for balanced binary search tree operations
 * Supports insertion, removal, and lower bound search
 */
class AVLTree {
  /**
   * Initializes an empty AVL tree with root set to null
   */
  constructor() {
    this.root = null
  }

  /**
   * Returns the height of a given node, or 0 if node is null
   *
   * @param {Node|null} node - The node whose height is needed
   *
   * @returns {number} - Height of the node
   */
  getHeight(node) {
    return node ? node.height : 0
  }

  /**
   * Calculates the balance factor of a node
   *
   * @param {Node|null} node - The node to check balance for
   *
   * @returns {number} - Balance factor (left height - right height)
   */
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0
  }

  /**
   * Performs left rotation on the given node
   *
   * @param {Node} x - The node to rotate
   *
   * @returns {Node} - New root after rotation
   */
  leftRotation(x) {
    const y = x.right
    const child = y.left

    y.left = x
    x.right = child

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1

    return y
  }

  /**
   * Performs right rotation on the given node
   *
   * @param {Node} y - The node to rotate
   *
   * @returns {Node} - New root after rotation
   */
  rightRotation(y) {
    const x = y.left
    const child = x.right

    x.right = y
    y.left = child

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1

    return x
  }

  /**
   * Rebalances the AVL tree at the given node if needed
   *
   * @param {Node} node - The node to rebalance
   *
   * @returns {Node} - The balanced node
   */
  rebalance(node) {
    const balance = this.getBalance(node)

    if (balance > 1) {
      if (this.getBalance(node.left) >= 0) return this.rightRotation(node)

      node.left = this.leftRotation(node.left)

      return this.rightRotation(node)
    }

    if (balance < -1) {
      if (this.getBalance(node.right) <= 0) return this.leftRotation(node)

      node.right = this.rightRotation(node.right)

      return this.leftRotation(node)
    }

    return node
  }

  /**
   * Inserts a value into the AVL tree
   *
   * @param {number} value - The value to insert
   *
   * @returns {AVLTree} - The AVL tree instance
   */
  insert(value) {
    this.root = this._insert(this.root, value)

    return this
  }

  /**
   * Helper function to recursively insert a value into the tree
   *
   * @param {Node|null} node - Current node in recursion
   * @param {number} value - Value to insert
   *
   * @returns {Node} - Updated node after insertion
   */
  _insert(node, value) {
    if (!node) return new Node(value)

    if (value < node.val) node.left = this._insert(node.left, value)
    else if (value > node.val) node.right = this._insert(node.right, value)
    else return node

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1

    return this.rebalance(node)
  }

  /**
   * Removes a value from the AVL tree
   *
   * @param {number} value - The value to remove
   *
   * @returns {AVLTree} - The AVL tree instance
   */
  remove(value) {
    this.root = this._remove(this.root, value)

    return this
  }

  /**
   * Helper function to recursively remove a value from the tree
   *
   * @param {Node|null} node - Current node in recursion
   * @param {number} value - Value to remove
   *
   * @returns {Node|null} - Updated node after removal
   */
  _remove(node, value) {
    if (!node) return node

    if (value < node.val) node.left = this._remove(node.left, value)
    else if (value > node.val) node.right = this._remove(node.right, value)
    else {
      if (!node.left || !node.right) node = node.left || node.right
      else {
        const minLargeNode = this._minValueNode(node.right)

        node.val = minLargeNode.val
        node.right = this._remove(node.right, minLargeNode.val)
      }
    }

    if (!node) return node

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1

    return this.rebalance(node)
  }

  /**
   * Returns node with minimum value in subtree
   *
   * @param {Node} node - Subtree root
   *
   * @returns {Node} - Node with minimum value
   */
  _minValueNode(node) {
    let curr = node

    while (curr.left) curr = curr.left

    return curr
  }

  /**
   * Finds the smallest value in the tree greater than the given value
   *
   * @param {number} value - Value to compare
   *
   * @returns {number|null} - Lower bound value or null
   */
  searchLowerBound(value) {
    let result = null
    let node = this.root

    while (node) {
      if (node.val === value) return value
      else if (node.val > value) {
        result = node.val
        node = node.left
      } else node = node.right
    }

    return result
  }
}

/**
 * Determines dry days to avoid lake flooding
 *
 * @param {number[]} rains - Array of rain events
 *
 * @returns {number[]} - Array of actions per day
 */
const avoidFlood = (rains) => {
  // Initialize an AVLTree to keep track of available dry days (indices)
  const dryDays = new AVLTree()
  // Map to store the last day each lake was filled
  const lakeLastFilledDay = new Map()
  // Array to store the result actions for each day
  const resultActions = []

  // Iterate through each day in the rains array
  for (let dayIndex = 0; dayIndex < rains.length; dayIndex++) {
    // If the current day is a dry day (no rain)
    if (rains[dayIndex] === 0) {
      // Add the dry day index to the AVLTree
      dryDays.insert(dayIndex)
      // Assign a default value (1) for dry days in the result
      resultActions.push(1)
    } else {
      // If the lake has not been filled before
      if (!lakeLastFilledDay.has(rains[dayIndex])) {
        // Mark the lake as filled for this day
        resultActions.push(-1)
        // Record the day the lake was filled
        lakeLastFilledDay.set(rains[dayIndex], dayIndex)
      } else {
        // Find the earliest dry day after the last time this lake was filled
        const earliestDryDay = dryDays.searchLowerBound(
          lakeLastFilledDay.get(rains[dayIndex])
        )

        // If no suitable dry day is found, flooding cannot be avoided
        if (earliestDryDay === null) return []

        // Assign the lake number to the dry day in the result
        resultActions[earliestDryDay] = rains[dayIndex]
        // Mark the current day as a rain day in the result
        resultActions.push(-1)
        // Update the last filled day for the lake
        lakeLastFilledDay.set(rains[dayIndex], dayIndex)
        // Remove the used dry day from the AVLTree
        dryDays.remove(earliestDryDay)
      }
    }
  }

  // Return the array of actions for each day
  return resultActions
}
