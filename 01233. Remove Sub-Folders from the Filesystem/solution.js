/**
 * Problem: 1233. Remove Sub-Folders from the Filesystem
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 25 ms (Beats 100%)
 */

/**
 * Removes subfolders from an array of folder paths
 *
 * @param {string[]} folder - Array of folder paths
 *
 * @returns {string[]} - Array without subfolders
 */
const removeSubfolders = (folder) => {
  // Sort folders by length to process shorter paths first (parent folders before subfolders)
  folder.sort((a, b) => a.length - b.length)

  // Set to store valid parent folders for O(1) lookup
  const validParentFolders = new Set()
  // Array to store the final result of folders without subfolders
  const result = []

  // Iterate through each folder path
  for (const currentFolder of folder) {
    // Flag to track if current folder is valid (not a subfolder)
    let isValidFolder = true

    // Check all possible parent paths by iterating through each character
    for (let charIndex = 2; charIndex < currentFolder.length; charIndex++) {
      // Skip characters that are not path separators
      if (currentFolder[charIndex] !== '/') continue

      // Extract potential parent folder path up to current separator
      const potentialParent = currentFolder.slice(0, charIndex)

      // If this potential parent exists in our valid folders set, current folder is a subfolder
      if (validParentFolders.has(potentialParent)) {
        isValidFolder = false
        // Break early since we found a parent folder
        break
      }
    }

    // If folder is valid (not a subfolder), add it to results
    if (isValidFolder) {
      // Add to set for future parent folder lookups
      validParentFolders.add(currentFolder)
      // Add to result array
      result.push(currentFolder)
    }
  }

  // Return array of folders without any subfolders
  return result
}
