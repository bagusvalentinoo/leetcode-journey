/**
 * Problem: 165. Compare Version Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Compares two version strings
 *
 * @param {string} version1 - First version
 * @param {string} version2 - Second version
 *
 * @returns {number} - 1 if version1 < version2, 1 if version1 > version2, 0 if equal
 */
const compareVersion = (version1, version2) => {
  // Split the version strings by '.' and convert each segment to a number
  const versionParts1 = version1.split('.').map(Number),
    versionParts2 = version2.split('.').map(Number)

  // Determine the maximum length between the two version arrays
  const maxLength = Math.max(versionParts1.length, versionParts2.length)

  // Iterate through each segment of the version numbers
  for (let i = 0; i < maxLength; i++) {
    // Get the current segment or default to 0 if undefined
    const segment1 = versionParts1[i] || 0,
      segment2 = versionParts2[i] || 0

    // Compare the current segments
    if (segment1 < segment2) return -1 // version1 is less than version2
    if (segment1 > segment2) return 1 // version1 is greater than version2
  }

  // All segments are equal
  return 0
}
