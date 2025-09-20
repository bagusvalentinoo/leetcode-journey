/**
 * Problem: 3508. Implement Router
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 242 ms (Beats 100%)
 */

/**
 * Router simulates a packet router with a memory limit
 *
 * @param {number} memoryLimit - Max packets the router can hold
 */
const Router = function (memoryLimit) {
  // Store the memory limit for the router
  this.limit = memoryLimit
  // Queue to store packets as [source, destination, timestamp]
  this.q = []
  // Head pointer for the queue to efficiently remove forwarded packets
  this.qHead = 0
  // Set to keep track of seen packets to avoid duplicates
  this.seen = new Set()
  // Map to store packets by destination for efficient queries
  this.byDst = new Map()
}

/**
 * Gets or creates a bucket for a destination
 *
 * @param {number} d - Destination ID
 *
 * @returns {object} - Bucket with timestamps and head pointer
 */
Router.prototype._bucket = function (d) {
  // If bucket for destination does not exist, create it
  if (!this.byDst.has(d)) this.byDst.set(d, { arr: [], head: 0 })

  // Return the bucket for the destination
  return this.byDst.get(d)
}

/**
 * Finds first index where arr[index] >= x
 *
 * @param {number[]} arr - Array to search
 * @param {number} l - Left index (inclusive)
 * @param {number} x - Value to find
 *
 * @returns {number} Lower bound index
 */
const lb = (arr, l, x) => {
  let r = arr.length - 1, // Right boundary
    ans = arr.length // Default answer if not found

  // Binary search loop
  while (l <= r) {
    const m = (l + r) >> 1 // Middle index

    if (arr[m] >= x) (ans = m), (r = m - 1) // Move left if condition met
    else l = m + 1 // Move right otherwise
  }

  return ans
}

/**
 * Upper bound binary search: finds the first index where arr[index] > x
 *
 * @param {number[]} arr - Array to search
 * @param {number} l - Left boundary (inclusive)
 * @param {number} x - Value to search for
 *
 * @returns {number} - Index of the upper bound
 */
const ub = (arr, l, x) => {
  let r = arr.length - 1, // Right boundary
    ans = arr.length // Default answer if not found

  // Binary search loop
  while (l <= r) {
    const m = (l + r) >> 1 // Middle index

    if (arr[m] > x) (ans = m), (r = m - 1) // Move left if condition met
    else l = m + 1 // Move right otherwise
  }

  return ans
}

/**
 * Adds a packet if not duplicate and within memory limit
 *
 * @param {number} source - Packet source
 * @param {number} destination - Packet destination
 * @param {number} timestamp - Packet timestamp
 *
 * @returns {boolean} True if added, false if duplicate
 */
Router.prototype.addPacket = function (source, destination, timestamp) {
  // Create a unique key for the packet
  const key = source + '#' + destination + '#' + timestamp

  // If packet already seen, do not add
  if (this.seen.has(key)) return false
  // If memory limit reached, forward the oldest packet
  if (this.q.length - this.qHead === this.limit) this.forwardPacket()

  // Add packet to the queue
  this.q.push([source, destination, timestamp])
  // Mark packet as seen
  this.seen.add(key)

  // Add timestamp to the destination bucket
  const b = this._bucket(destination)
  b.arr.push(timestamp)

  return true
}

/**
 * Forwards (removes) the oldest packet from the router.
 * @returns {number[]} - The forwarded packet as [source, destination, timestamp], or [] if none.
 */
Router.prototype.forwardPacket = function () {
  // If no packets to forward, return empty array
  if (this.qHead >= this.q.length) return []

  // Get the oldest packet
  const [s, d, t] = this.q[this.qHead++]

  // Remove packet from seen set
  this.seen.delete(s + '#' + d + '#' + t)

  // Update the destination bucket
  const b = this.byDst.get(d)

  if (b) {
    b.head++ // Move head pointer forward

    // If all timestamps are forwarded, remove the bucket
    if (b.head >= b.arr.length) this.byDst.delete(d)
    // If head pointer is large, compact the array to save memory
    else if (b.head > 4096 && b.head * 2 > b.arr.length) {
      b.arr = b.arr.slice(b.head)
      b.head = 0
    }
  }

  // Compact the main queue if head pointer is large
  if (this.qHead > 4096 && this.qHead * 2 > this.q.length) {
    this.q = this.q.slice(this.qHead)
    this.qHead = 0
  }

  // Return the forwarded packet
  return [s, d, t]
}

/**
 * Returns the number of packets for a destination in [startTime, endTime]
 *
 * @param {number} destination - Destination ID
 * @param {number} startTime - Start time (inclusive)
 * @param {number} endTime - End time (inclusive)
 *
 * @returns {number} - Packet count in range
 */
Router.prototype.getCount = function (destination, startTime, endTime) {
  // If invalid time range, return 0
  if (startTime > endTime) return 0

  // Get the bucket for the destination
  const b = this.byDst.get(destination)

  // If no packets for destination, return 0
  if (!b) return 0

  const { arr, head } = b

  // Find lower and upper bounds for the time range
  const L = lb(arr, head, startTime)
  const R = ub(arr, head, endTime)

  // Return the count of packets in the range
  return Math.max(0, R - L)
}
