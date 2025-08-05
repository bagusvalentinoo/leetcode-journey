/**
 * Problem: 1095. Find in Mountain Array
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 26 ms (Beats 100%)
 */

/**
 * Returns the index of target in mountainArr, or -1 if not found
 *
 * @param {number} target - Value to search for
 * @param {MountainArray} mountainArr - Mountain array instance
 *
 * @returns {number} - Index of target or -1
 */
const findInMountainArray = (target, mountainArr) => {
  // Find the peak index in the mountain array using binary search
  const peak = findPeak(mountainArr)

  // Check if the target is at the peak index
  if (target === mountainArr.get(peak)) return peak

  // Search for the target in the ascending part of the mountain array
  const ascVal = findAscVal(target, mountainArr, peak)

  // If found in ascending part, return its index
  if (ascVal !== -1) return ascVal

  // Otherwise, search for the target in the descending part and return its index (or -1 if not found)
  return findDescVal(target, mountainArr, peak)
}

/**
 * Finds the index of target in the descending part of the mountain array
 *
 * @param {number} target - Value to search for
 * @param {MountainArray} mountainArr - Mountain array instance
 * @param {number} peak - Index of the peak in the mountain array
 *
 * @returns {number} - Index of target in descending part or -1 if not found
 */
const findDescVal = (target, mountainArr, peak) => {
  // Initialize start to the index right after the peak, and end to the last index of the mountain array
  let start = peak + 1
  let end = mountainArr.length() - 1

  // Perform binary search in the descending part of the mountain array
  while (start <= end) {
    // Calculate the middle index between start and end
    const mid = Math.floor(start + (end - start) / 2)

    // If the target is less than the value at mid (descending order), move start to mid + 1
    if (target < mountainArr.get(mid)) start = mid + 1
    // If the target is greater than the value at mid, move end to mid - 1
    else if (target > mountainArr.get(mid)) end = mid - 1
    // If the target is found at mid, return mid as the index
    else return mid
  }

  // If the target is not found in the descending part, return -1
  return -1
}

/**
 * Finds the index of target in the ascending part of the mountain array
 *
 * @param {number} target - Value to search for
 * @param {MountainArray} mountainArr - Mountain array instance
 * @param {number} peak - Index of the peak in the mountain array
 *
 * @returns {number} - Index of target in ascending part or -1 if not found
 */
const findAscVal = (target, mountainArr, peak) => {
  // Initialize the start index to the beginning of the array
  let start = 0
  // Initialize the end index to one before the peak index
  let end = peak - 1

  // Perform binary search in the ascending part of the mountain array
  while (start <= end) {
    // Calculate the middle index between start and end
    const mid = Math.floor(start + (end - start) / 2)

    // If the target is less than the value at mid (ascending order), move end to mid - 1
    if (target < mountainArr.get(mid)) end = mid - 1
    // If the target is greater than the value at mid, move start to mid + 1
    else if (target > mountainArr.get(mid)) start = mid + 1
    // If the target is found at mid, return mid as the index
    else return mid
  }

  // If the target is not found in the ascending part, return -1
  return -1
}

/**
 * Finds the peak index in the mountain array using binary search
 *
 * @param {MountainArray} mountainArr - Mountain array instance
 *
 * @returns {number} - Index of the peak in the mountain array
 */
const findPeak = (mountainArr) => {
  // Initialize the start index to the beginning of the array
  let start = 0
  // Initialize the end index to the last index of the mountain array
  let end = mountainArr.length() - 1

  // Perform binary search to find the peak index
  while (start <= end) {
    // Calculate the middle index between start and end
    const mid = Math.floor(start + (end - start) / 2)

    // If the value at mid is less than the value at mid + 1, the peak is to the right
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) start = mid + 1
    // Otherwise, the peak is at mid or to the left
    else end = mid - 1
  }

  // Return the index of the peak element
  return start
}
