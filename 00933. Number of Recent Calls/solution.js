/**
 * Problem: 933. Number of Recent Calls
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 25 ms (Beats 99.05%)
 */

/**
 * A class to count the number of requests in the last 3000ms
 */
const RecentCounter = function () {
  this.requests = []
}

/**
 * Counts requests in the last 3000ms
 *
 * @param {number} t - Current timestamp in ms
 * @returns {number} - Requests count in the last 3000ms
 */
RecentCounter.prototype.ping = function (t) {
  // Add the current timestamp to the requests array
  this.requests.push(t)

  // Remove timestamps older than 3000ms from the current timestamp
  while (this.requests[0] < t - 3000) this.requests.shift()

  // Return the count of requests in the last 3000ms
  return this.requests.length
}
