/**
 * Problem: 1046. Last Stone Weight
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// MaxHeap defines a type for a max-heap of integers.
type MaxHeap []int

// Len returns the number of elements in the heap.
func (h MaxHeap) Len() int { return len(h) }

// Less compares two elements and returns true if the first is greater than the second (max-heap property).
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }

// Swap exchanges the elements at indices i and j.
func (h MaxHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

// Push adds a new element to the heap.
func (h *MaxHeap) Push(x interface{}) { *h = append(*h, x.(int)) }

// Pop removes and returns the last element from the heap.
func (h *MaxHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1] // Get the last element.

	*h = old[:n-1] // Remove the last element.

	return x // Return the removed element.
}

// lastStoneWeight returns the weight of the last remaining stone after repeatedly smashing the two heaviest stones together.
func lastStoneWeight(stones []int) int {
	h := &MaxHeap{} // Initialize a new max-heap.
	heap.Init(h)    // Initialize the heap structure.

	for _, stone := range stones {
		heap.Push(h, stone) // Push each stone onto the heap.
	}

	for h.Len() > 1 {
		y := heap.Pop(h).(int) // Remove the heaviest stone.
		x := heap.Pop(h).(int) // Remove the second heaviest stone.

		if y != x {
			heap.Push(h, y-x) // If they are not equal, push the difference back onto the heap.
		}
	}

	if h.Len() == 0 {
		return 0 // If no stones are left, return 0.
	}

	return heap.Pop(h).(int) // Return the weight of the last remaining stone.
}
