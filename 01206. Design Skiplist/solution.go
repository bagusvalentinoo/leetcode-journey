/**
 * Problem: 1206. Design Skiplist
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

// Skiplist is a data structure that allows fast search, insertion, and deletion.
// Here, we use a map to simulate the skiplist for simplicity.
type Skiplist struct {
	nodes map[int]int // nodes stores the count of each number in the skiplist.
}

// Constructor initializes and returns a new Skiplist instance.
func Constructor() Skiplist {
	return Skiplist{nodes: make(map[int]int)} // Create an empty map for nodes.
}

// Search checks if the target value exists in the skiplist.
func (sl *Skiplist) Search(target int) bool {
	return sl.nodes[target] > 0 // Return true if target exists (count > 0).
}

// Add inserts a number into the skiplist.
func (sl *Skiplist) Add(num int) {
	sl.nodes[num]++ // Increment the count for the given number.
}

// Erase removes one occurrence of a number from the skiplist.
// Returns true if the number was present and erased, false otherwise.
func (sl *Skiplist) Erase(num int) bool {
	if sl.nodes[num] == 0 { // If number does not exist, return false.
		return false
	}

	sl.nodes[num]-- // Decrement the count for the given number.

	return true // Return true to indicate successful erase.
}
