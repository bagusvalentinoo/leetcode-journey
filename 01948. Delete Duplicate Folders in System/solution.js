/**
 * Problem: 1949. Delete Duplicate Folders in System
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 131 ms (Beats 100%)
 */

/**
 * Deletes duplicate folder structures from file system paths.
 *
 * @param {string[][]} paths - Array of folder paths
 *
 * @returns {string[][]} - Paths with duplicate folder structures removed
 */
const deleteDuplicateFolder = function (paths) {
  /**
   * Trie node class to represent each folder in the file system tree
   */
  class Trie {
    constructor() {
      // Serialized string representation of this subtree structure
      this.serial = ''
      // Map to store child folders (folder name -> Trie node)
      this.children = new Map()
    }
  }

  // Initialize root node of the trie (represents file system root)
  const root = new Trie()

  // Build a trie tree from all given paths
  for (const path of paths) {
    // Start from root for each path
    let currentNode = root

    // Traverse each folder in the current path
    for (const folderName of path) {
      // Create new trie node if folder doesn't exist in current level
      if (!currentNode.children.has(folderName)) {
        currentNode.children.set(folderName, new Trie())
      }
      // Move to the child node
      currentNode = currentNode.children.get(folderName)
    }
  }

  // Map to count frequency of each unique folder structure
  const structureFrequency = new Map()

  // Recursive function to construct serialized representation of each subtree
  const constructSerializedStructure = (node) => {
    // Base case: leaf node has no children to process
    if (node.children.size === 0) return

    // Array to store serialized child structures
    const childStructures = []

    // Process each child folder and its subtree
    for (const [folderName, childNode] of node.children) {
      // Recursively process child subtree first
      constructSerializedStructure(childNode)
      // Create serialized representation: folderName(childSerial)
      childStructures.push(`${folderName}(${childNode.serial})`)
    }

    // Sort to ensure consistent serialization regardless of insertion order
    childStructures.sort()

    // Create unique serial string for this node's structure
    node.serial = childStructures.join('')

    // Count frequency of this structure pattern
    structureFrequency.set(
      node.serial,
      (structureFrequency.get(node.serial) || 0) + 1
    )
  }

  // Start construction from root
  constructSerializedStructure(root)

  // Result array to store non-duplicate paths
  const resultPaths = []
  // Current path being built during traversal
  const currentPath = []

  // Recursive function to collect paths that don't have duplicate structures
  const collectNonDuplicatePaths = (node) => {
    // Skip if this structure appears more than once (is duplicate)
    if ((structureFrequency.get(node.serial) || 0) > 1) return

    // Add current path to results if it's not empty (skip root)
    if (currentPath.length > 0) resultPaths.push([...currentPath])

    // Recursively process all child folders
    for (const [folderName, childNode] of node.children) {
      // Add current folder to path
      currentPath.push(folderName)

      // Recursively process child
      collectNonDuplicatePaths(childNode)

      // Backtrack: remove current folder from path
      currentPath.pop()
    }
  }

  // Start collection from root
  collectNonDuplicatePaths(root)

  // Return all paths without duplicate folder structures
  return resultPaths
}
