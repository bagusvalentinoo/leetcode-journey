/**
 * Problem: 1146. Snapshot Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 53 ms (Beats 100%)
 */

// Snap represents a value at a specific snapshot id.
type Snap struct{
	Id  int // The snapshot id.
	Val int // The value at this snapshot.
}

// SnapshotArray is a data structure to support snapshot operations.
type SnapshotArray struct {
	SnapId int      // The current snapshot id.
	Snaps  [][]Snap // Stores the history of values for each index.
}

// Constructor initializes a SnapshotArray with the given length.
// Each index will have its own slice to store Snap history.
func Constructor(length int) SnapshotArray {
	return SnapshotArray{
		SnapId: 0,                  // Start with snapshot id 0.
		Snaps:  make([][]Snap, length), // Initialize slices for each index.
	}
}

// Set records a value at the given index for the current snapshot id.
// Appends a new Snap to the history of the specified index.
func (sa *SnapshotArray) Set(index int, val int)  {
	sa.Snaps[index] = append(sa.Snaps[index], Snap{sa.SnapId, val})
}

// Snap increments the snapshot id and returns the previous id.
// This marks a new snapshot point.
func (sa *SnapshotArray) Snap() int {
	sa.SnapId++ // Move to the next snapshot id.
	return sa.SnapId - 1 // Return the id of the snapshot just taken.
}

// Get retrieves the value at the given index for the specified snapshot id.
// Uses binary search to find the most recent value at or before snap_id.
func (sa *SnapshotArray) Get(index int, snapId int) int {
	result := 0 // Default value if no Snap is found.
	history := sa.Snaps[index] // Get the Snap history for the index.
	left, right := 0, len(history)-1

	// Binary search for the closest Snap with id <= snapId.
	for left <= right {
		mid := left + (right-left)/2

		if history[mid].Id <= snapId {
			result = history[mid].Val // Update result to this value.
			left = mid + 1 // Search right half.
		} else {
			right = mid - 1 // Search left half.
		}
	}

	// Return the most recent value found.
	return result
}
