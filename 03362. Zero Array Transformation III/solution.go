/**
 * Problem: 3362. Zero Array Transformation III
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 49 ms (Beats 100%)
 */

func maxRemoval(nums []int, queries [][]int) int {
	// Sort queries by start index for processing in order
	slices.SortFunc(queries, func(a, b []int) int { return a[0] - b[0] })
	// Initialize priority queue for storing endpoints
	priorityQueue := hp{}
	// Array to track decrement operations
	decrementArray := make([]int, len(nums)+1)
	// Track current sum of decrements and query index
	currentSum, queryIndex := 0, 0

	for i, num := range nums {
		// Apply accumulated decrements at current position
		currentSum += decrementArray[i]

		// Process all queries that start at or before current position
		for ; queryIndex < len(queries) && queries[queryIndex][0] <= i; queryIndex++ {
			heap.Push(&priorityQueue, queries[queryIndex][1])
		}
		// Apply operations while needed and possible
		for currentSum < num && priorityQueue.Len() > 0 && priorityQueue.IntSlice[0] >= i {
			currentSum++
			decrementArray[heap.Pop(&priorityQueue).(int)+1]--
		}

		// If we can't reduce current position to zero
		if currentSum < num {
			return -1
		}
	}
	// Return number of remaining operations (optimal solution)
	return priorityQueue.Len()
}

// hp is a max heap implementation for query endpoints
type hp struct{ sort.IntSlice }

func (h hp) Less(i, j int) bool { return h.IntSlice[i] > h.IntSlice[j] }
func (h *hp) Push(v any)        { h.IntSlice = append(h.IntSlice, v.(int)) }
func (h *hp) Pop() any          { a := h.IntSlice; v := a[len(a)-1]; h.IntSlice = a[:len(a)-1]; return v }