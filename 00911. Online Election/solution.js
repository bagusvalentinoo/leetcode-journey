/**
 * Problem: 911. Online Election
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 53 ms (Beats 100%)
 */

/**
 * Initializes a new instance of the TopVotedCandidate class
 *
 * @param {string[]} persons - The array of persons
 * @param {number[]} times - The array of times
 */
const TopVotedCandidate = function (persons, times) {
  this.times = times // The array of times
  this.leaders = [] // The array of leaders
  const histogram = {} // The histogram of votes
  let curLeader = -1 // The current leader
  let curMax = 0 // The current maximum votes

  // Compute the leaders
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i] // The current person

    // Update the histogram
    histogram[person] = (histogram[person] || 0) + 1

    // Update the current leader
    if (histogram[person] >= curMax) {
      curMax = histogram[person] // Update the current maximum votes
      curLeader = person // Update the current leader
    }

    // Add the current leader to the array of leaders
    this.leaders.push(curLeader)
  }

  // Helper function to compute the lower bound index
  this.lowerBoundIndex = (arr, q) => {
    let l = 0, // The left bound
      r = arr.length // The right bound

    // If q is less than the first element, return -1
    if (q < arr[0]) return -1
    // If q is greater than or equal to the last element, return the last index
    if (q >= arr[arr.length - 1]) return arr.length - 1

    // Compute the lower bound index
    while (r - l > 1) {
      // Compute the middle index
      const m = Math.floor((r + l) / 2)

      // If the middle element is less than or equal to q, move the left bound
      if (arr[m] <= q) l = m
      // Otherwise, move the right bound
      else r = m
    }

    return l
  }
}

/**
 * Returns the leader at the given time
 *
 * @param {number} t - The time
 *
 * @returns {string} - The leader at the given time
 */
TopVotedCandidate.prototype.q = function (t) {
  const idx = this.lowerBoundIndex(this.times, t) // Compute the lower bound index

  return this.leaders[idx] // Return the leader at the computed index
}
