/**
 * Problem: 1146. Snapshot Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 88 ms (Beats 100%)
 */

/**
 * SnapshotArray class simulates an array that supports snapshot functionality.
 */
class SnapshotArray {
  /**
   * Creates a SnapshotArray
   *
   * @param {number} length - Array length (unused)
   *
   * @returns {void}
   */
  constructor(length) {
    // Stores the current state of elements as key-value pairs (index: value).
    this.elements = {}
    // Stores snapshots of the array at different points in time.
    this.snapshots = []
    // Tracks the current snapshot ID (not used in current implementation).
    this.snapId = -1
    // Flag to indicate if there are changes since the last snapshot.
    this.hasChanges = false
  }

  /**
   * Sets the value at the specified index
   *
   * @param {number} index - The index to set
   * @param {number} val - The value to set at the index
   *
   * @returns {void}
   */
  set(index, val) {
    // Update the value at the given index.
    this.elements[index] = val
    // Mark that changes have been made since the last snapshot.
    this.hasChanges = true
  }

  /**
   * Takes a snapshot of the current array state
   *
   * @returns {number} - The ID of the taken snapshot
   */
  snap() {
    // If there are changes or no snapshots exist, store a copy of the current elements.
    if (this.hasChanges || this.snapshots.length === 0)
      this.snapshots.push({ ...this.elements })
    // If no changes, duplicate the last snapshot.
    else this.snapshots.push(this.snapshots[this.snapshots.length - 1])

    // Reset the change flag after taking a snapshot.
    this.hasChanges = false

    // Return the snapshot ID (index of the last snapshot).
    return this.snapshots.length - 1
  }

  /**
   * Returns the value at index from the given snapshot
   *
   * @param {number} index - Array index
   * @param {number} snap_id - Snapshot ID
   *
   * @returns {number} - Value at index, or 0 if unset
   */
  get(index, snap_id) {
    // Return the value at the index from the specified snapshot, defaulting to 0 if undefined.
    return this.snapshots[snap_id][index] || 0
  }
}
