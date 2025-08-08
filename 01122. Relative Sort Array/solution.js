/**
 * Problem: 1122. Relative Sort Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts arr1 by the order of arr2; extras in ascending order
 *
 * @param {number[]} arr1 - Array to sort
 * @param {number[]} arr2 - Reference order
 *
 * @returns {number[]} - Sorted array
 */
const relativeSortArray = (arr1, arr2) => {
  // Create a mapping object to store the index of each element in arr2
  const orderMap = {}

  // Populate the mapping object with arr2 values and their indices (offset by 1 to avoid 0 as falsy)
  for (let i = 0; i < arr2.length; i++) orderMap[arr2[i]] = i + 1

  // Sort arr1 based on the custom order defined in arr2
  return arr1.sort((a, b) => {
    // If both elements exist in arr2, sort by their mapped order
    if (orderMap[a] && orderMap[b]) return orderMap[a] - orderMap[b]
    // If neither element exists in arr2, sort numerically in ascending order
    if (!orderMap[a] && !orderMap[b]) return a - b
    // If only 'a' does not exist in arr2, place it after 'b'
    if (!orderMap[a]) return 1

    // If only 'b' does not exist in arr2, place 'a' before 'b'
    return -1
  })
}
