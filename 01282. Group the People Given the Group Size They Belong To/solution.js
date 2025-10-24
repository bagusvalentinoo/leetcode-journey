/**
 * Problem: 1282. Group the People Given the Group Size They Belong To
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Splits an array into chunks of a given size
 *
 * @param {Array} a - The array to split
 * @param {number} s - Chunk size
 *
 * @returns {Array} - Array of chunks
 */
const sliceGroups = (a, s) => {
  // Initialize an empty array to store the resulting chunks
  const r = []

  // Loop through the array in steps of the given chunk size
  for (let i = 0; i < a.length; i += s)
    // Slice the array from the current index to the current index + chunk size
    // and push the resulting chunk into the result array
    r.push(a.slice(i, i + s))

  // Return the array containing all the chunks
  return r
}

/**
 * Groups people by their group sizes
 *
 * @param {number[]} groupSizes - Array of group sizes
 *
 * @returns {number[][]} - 2D array of grouped people
 */
const groupThePeople = (groupSizes) => {
  // Initialize an object to store indices grouped by their group size
  const bucket = {}

  // Iterate over the groupSizes array to populate the bucket object
  groupSizes.forEach((group, index) => {
    // If the group size is not already a key in the bucket, initialize it
    if (!(group in bucket)) bucket[group] = [index]
    // Otherwise, append the current index to the existing group
    else bucket[group].push(index)
  })

  // Initialize an array to store the final grouped people
  const chunked = []

  // Iterate over the keys of the bucket object
  Object.keys(bucket).forEach((key) => {
    // Convert the current key to a number representing the group size
    const group = Number(key)

    // If the group size does not match the length of the indices array
    if (group !== bucket[key].length)
      // Split the indices into smaller chunks of the group size
      chunked.push(...sliceGroups(bucket[key], group))
    // Otherwise, add the entire indices array as a group
    else chunked.push(bucket[key])
  })

  // Return the final array of grouped people
  return chunked
}
