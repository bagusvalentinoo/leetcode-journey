/**
 * Problem: 1172. Dinner Plate Stacks
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 123 ms (Beats 100%)
 */

// IntHeap is a min-heap of integers, used to track available stack indices.
type IntHeap []int

// Len returns the number of elements in the heap.
func (h IntHeap) Len() int { 
	return len(h) 
}

// Less compares two elements in the heap to maintain min-heap property.
func (h IntHeap) Less(i, j int) bool { 
	return h[i] < h[j] 
}

// Swap exchanges two elements in the heap.
func (h IntHeap) Swap(i, j int) { 
	h[i], h[j] = h[j], h[i] 
}

// Push adds a new element to the heap.
// x must be of type int.
func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

// Pop removes and returns the smallest element from the heap.
func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

// DinnerPlates manages stacks of plates with a fixed capacity per stack.
type DinnerPlates struct {
	capacity  int      // Maximum number of plates per stack.
	stacks    [][]int  // List of stacks, each stack is a slice of ints.
	available *IntHeap // Min-heap storing indices of stacks with available space.
}

// Constructor initializes a DinnerPlates object with the given stack capacity.
func Constructor(capacity int) DinnerPlates {
	return DinnerPlates{
		capacity:  capacity,           // Set the stack capacity.
		stacks:    make([][]int, 0),   // Initialize the stacks slice.
		available: &IntHeap{},         // Initialize the available heap.
	}
}

func (this *DinnerPlates) Push(val int) {
	// Remove indices from heap that point to non-existent or full stacks
	// This ensures the top of the heap always points to a valid, available stack
	for this.available.Len() > 0 {
		idx := (*this.available)[0]
		
		// Check if the stack at 'idx' is valid and has available capacity
		if idx < len(this.stacks) && len(this.stacks[idx]) < this.capacity {
			break // Found a valid stack, stop cleaning
		}

		// Remove the invalid index from the heap
		heap.Pop(this.available)
	}

	if this.available.Len() == 0 {
		// No available stacks, create a new one
		newStackIndex := len(this.stacks)
		this.stacks = append(this.stacks, make([]int, 0, this.capacity))
		this.stacks[newStackIndex] = append(this.stacks[newStackIndex], val)

		// Add the new stack's index to the available heap if it can hold more elements
		if this.capacity > 1 {
			heap.Push(this.available, newStackIndex)
		}
	} else {
		// Push to the leftmost available stack (top of the min-heap)
		idx := (*this.available)[0]
		this.stacks[idx] = append(this.stacks[idx], val)

		// If the stack is now full, remove its index from the available heap
		if len(this.stacks[idx]) == this.capacity {
			heap.Pop(this.available)
		}
	}
}

func (this *DinnerPlates) Pop() int {
	// Find the rightmost non-empty stack by trimming empty stacks from the end
	// This ensures we always pop from the correct stack
	for len(this.stacks) > 0 && len(this.stacks[len(this.stacks)-1]) == 0 {
		this.stacks = this.stacks[:len(this.stacks)-1]
	}

	// If there are no stacks or all stacks are empty, return -1
	if len(this.stacks) == 0 {
		return -1
	}

	// Pop from the rightmost non-empty stack
	return this.popFromStack(len(this.stacks) - 1)
}

func (this *DinnerPlates) PopAtStack(index int) int {
	// Check if the index is valid and the stack at that index is not empty
	if index < 0 || index >= len(this.stacks) || len(this.stacks[index]) == 0 {
		return -1
	}

	// Pop from the specified stack
	return this.popFromStack(index)
}

// popFromStack is a helper function to pop from a specific stack and manage availability.
// It's not exported (private) because its first letter is lowercase.
func (this *DinnerPlates) popFromStack(index int) int {
	stack := this.stacks[index]
	// Get the top element of the stack
	val := stack[len(stack)-1]
	
	// Check if the stack was full before popping
	// This is important to know if we need to add its index back to the available heap
	wasFull := len(stack) == this.capacity

	// Remove the top element from the stack
	this.stacks[index] = stack[:len(stack)-1]

	// If the stack was full, it's now available for pushing
	// Add its index back to the available heap
	if wasFull {
		heap.Push(this.available, index)
	}

    // Trim empty stacks from the end to maintain a clean state
    // This is important for the Pop() operation to work correctly
	for len(this.stacks) > 0 && len(this.stacks[len(this.stacks)-1]) == 0 {
		this.stacks = this.stacks[:len(this.stacks)-1]
	}

	return val
}
