/**
 * Problem: 919. Complete Binary Tree Inserter
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Initialize a CBTInserter with the root of the tree
 */
class CBTInserter {
  /**
   * CBTInserter constructor
   *
   * @param {TreeNode} root - Root of the tree
   */
  constructor(root) {
    // Initialize root and queue
    this.root = root
    this.queue = []

    // Initialize queue
    const q = [root]

    // Populate queue with nodes that have at least one child
    while (q.length) {
      // Get current node
      const node = q.shift()

      // Add node to queue if it has at least one child
      if (!node.left || !node.right) this.queue.push(node)
      // Add left child to queue
      if (node.left) q.push(node.left)
      // Add right child to queue
      if (node.right) q.push(node.right)
    }
  }

  /**
   * Insert a new node with the given value into the tree
   *
   * @param {number} val - Value to insert
   *
   * @returns {number} - Value of the parent node
   */
  insert(val) {
    // Create new node
    const newNode = new TreeNode(val)
    const parent = this.queue[0]

    // Add new node to left or right
    if (!parent.left) parent.left = newNode
    else {
      parent.right = newNode
      this.queue.shift()
    }

    // Add new node to queue as it has no children
    this.queue.push(newNode)

    return parent.val
  }

  /**
   * Get the root of the tree
   *
   * @returns {TreeNode} - Root of the tree
   */
  get_root() {
    return this.root
  }
}
