/**
 * Problem: 3408. Design Task Manager
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 71 ms (Beats 100%)
 */

// Task contains priority and taskId combined
type Task uint64 // Task is a 64-bit unsigned integer encoding priority and taskId

// TaskInfo holds the priority and userId for a task
type TaskInfo struct {
	priority int32 // Priority of the task
	userId   int32 // User ID who owns the task
}

// INFOS is a global array storing TaskInfo for each taskId
var INFOS [100001]TaskInfo

// TaskManager manages tasks using a heap
type TaskManager struct {
	heap *Heap // Pointer to the heap managing tasks
}

// Constructor initializes the TaskManager with the given tasks
func Constructor(tasks [][]int) TaskManager {
	heap := NewHeap(make([]Task, len(tasks))) // Create a new heap with capacity for all tasks

	for i, task := range tasks {
		priority, taskId, userId := task[2], task[1], task[0] // Extract userId, taskId, and priority from input
		INFOS[taskId].priority = int32(priority) // Store priority in global info
		INFOS[taskId].userId = int32(userId)     // Store userId in global info
		heap.arr[i] = Task(uint64(taskId | priority<<32)) // Encode priority and taskId into Task
	}

	heap.Init() // Initialize the heap property

	return TaskManager{heap} // Return the initialized TaskManager
}

// Add inserts a new task with userId, taskId, and priority
func (tm *TaskManager) Add(userId int, taskId int, priority int) {
	INFOS[taskId].priority = int32(priority) // Update priority in global info
	INFOS[taskId].userId = int32(userId)     // Update userId in global info
	tm.heap.Push(Task(uint64(taskId | priority<<32))) // Push encoded task into the heap
}

// Edit updates the priority of an existing task
func (tm *TaskManager) Edit(taskId int, newPriority int) {
	INFOS[taskId].priority = int32(newPriority) // Update priority in global info
	tm.heap.Push(Task(uint64(taskId | newPriority<<32))) // Push updated task into the heap
}

// Rmv marks a task as removed by setting its priority to -1
func (tm *TaskManager) Rmv(taskId int) {
	INFOS[taskId].priority = -1 // Mark task as removed
}

// ExecTop executes the highest priority valid task and returns its userId
func (tm *TaskManager) ExecTop() int {
	for tm.heap.Len() != 0 { // While heap is not empty
		task := tm.heap.Pop() // Pop the top task
		priority := int32(task >> 32) // Extract priority from Task
		taskId := task & 0xFFFFFFFF   // Extract taskId from Task

		if priority == INFOS[taskId].priority { // Check if task is valid (not removed/edited)
			INFOS[taskId].priority = -1 // Mark as executed
			return int(INFOS[taskId].userId) // Return userId of executed task
		}
	}

	return -1 // Return -1 if no valid task found
}

// Less returns true if element at i has higher priority than at j (max-heap)
func (h *Heap) Less(i, j int) bool {
	return h.arr[i] > h.arr[j] // Compare tasks by encoded value (priority first)
}

// Swap exchanges elements at indices i and j in the heap
func (h *Heap) Swap(i, j int) {
	h.arr[i], h.arr[j] = h.arr[j], h.arr[i]
}

// Push adds a new task to the heap and maintains heap property
func (h *Heap) Push(x Task) {
	n := len(h.arr)         // Get current length
	h.arr = append(h.arr, x) // Append new task
	h.up(n)                  // Restore heap property upwards
}

// Pop removes and returns the top task from the heap
func (h *Heap) Pop() Task {
	n := len(h.arr) - 1 // Index of last element
	h.Swap(0, n)        // Swap top with last
	h.down(0, n)        // Restore heap property downwards
	x := h.arr[n]       // Get the popped task
	h.arr = h.arr[0:n]  // Remove last element
	return x            // Return popped task
}

// Heap implements a max-heap for Task
type Heap struct {
	arr []Task // Underlying slice storing heap elements
}

// NewHeap creates a new Heap from a list of tasks
func NewHeap(list []Task) *Heap {
	return &Heap{list} // Return pointer to new Heap
}

// Len returns the number of elements in the heap
func (h *Heap) Len() int {
	return len(h.arr)
}

// Init builds the heap property from an arbitrary arrangement
func (h *Heap) Init() {
	n := len(h.arr)
	for i := n/2 - 1; i >= 0; i-- { // Start from last parent node
		h.down(i, n) // Heapify down
	}
}

// Fix restores the heap property at index i
func (h *Heap) Fix(i int) {
	if !h.down(i, len(h.arr)) { // Try heapify down
		h.up(i) // If not needed, try heapify up
	}
}

// up restores the heap property upwards from index j
func (h *Heap) up(j int) {
	for {
		i := (j - 1) / 2 // Parent index
		if i == j || !h.Less(j, i) { // If at root or heap property holds
			break
		}
		h.Swap(i, j) // Swap with parent
		j = i        // Move up
	}
}

// down restores the heap property downwards from index i0 up to n
func (h *Heap) down(i0, n int) bool {
	i := i0
	for {
		j1 := 2*i + 1 // Left child
		if j1 >= n || j1 < 0 { // If no children
			break
		}
		j := j1 // Assume left child is larger
		if j2 := j1 + 1; j2 < n && h.Less(j2, j1) { // If right child exists and is larger
			j = j2
		}
		if !h.Less(j, i) { // If heap property holds
			break
		}
		h.Swap(i, j) // Swap with larger child
		i = j        // Move down
	}
	return i > i0 // Return true if moved
}
