/**
 * Problem: 2163. Minimum Difference in Sums After Removal of Elements
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 122 ms (Beats 100%)
 */

// minimumDifference finds the minimum difference between the sum of n smallest elements
// from the left part and n largest elements from the right part after removing n elements
func minimumDifference(nums []int) int64 {
	// Calculate n as one-third of the array length
	n := len(nums) / 3

	// Precompute the sum of n smallest elements for each possible left boundary
	nSmallestSumL := computeNSmallestSumL(nums)
	
	// Initialize sum of n largest elements from the rightmost part
	nLargestSumR := int64(0)
	
	// Create a min heap to maintain n largest elements (using negative values)
	nLargestR := make(minHeap, n)

	// Initialize the rightmost n elements as the initial n largest elements
	for j := 2 * n; j < 3*n; j++ {
		nLargestR[j-2*n] = nums[j]
		nLargestSumR += int64(nums[j])
	}

	// Convert slice to heap structure
	heap.Init(&nLargestR)

	// Calculate initial result using precomputed left sum and initial right sum
	result := nSmallestSumL[n] - nLargestSumR

	// Iterate backwards through the middle section to find minimum difference
	for i := n - 1; i >= 0; i-- {
		// Add current element to the heap of largest elements
		heap.Push(&nLargestR, nums[n+i])
		
		// Update sum by adding new element and removing the smallest of the largest
		nLargestSumR += int64(nums[n+i] - heap.Pop(&nLargestR).(int))
		
		// Update result with the minimum difference found so far
		result = min(result, nSmallestSumL[i]-nLargestSumR)
	}

	return result
}

// computeNSmallestSumL precomputes the sum of n smallest elements 
// for each possible left boundary from 0 to n
func computeNSmallestSumL(nums []int) []int64 {
	// Calculate n as one-third of the array length
	n := len(nums) / 3
	
	// Create result array to store cumulative sums
	result := make([]int64, n+1)
	
	// Create max heap to maintain n smallest elements (using negative values)
	nSmallestL := make(minHeap, n)

	// Initialize with the first n elements
	for j := range n {
		nSmallestL[j] = -nums[j] // Negative to simulate max heap with min heap
		result[0] += int64(nums[j])
	}

	// Convert slice to heap structure
	heap.Init(&nSmallestL)

	// Process each subsequent element to maintain n smallest elements
	for i := 1; i <= n; i++ {
		// Add current element to heap (negated for max heap behavior)
		heap.Push(&nSmallestL, -nums[n+i-1])
		
		// Update sum by adding new element and removing the largest of the smallest
		result[i] = result[i-1] + int64(nums[n+i-1]+heap.Pop(&nSmallestL).(int))
	}

	return result
}

// minHeap implements a min heap using the heap interface
type minHeap []int

// Len returns the number of elements in the heap
func (h minHeap) Len() int { return len(h) }

// Less defines the heap ordering (min heap: smaller elements have higher priority)
func (h minHeap) Less(i, j int) bool { return h[i] < h[j] }

// Swap exchanges two elements in the heap
func (h minHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

// Push adds an element to the heap
func (h *minHeap) Push(x any) {
	*h = append(*h, x.(int))
}

// Pop removes and returns the minimum element from the heap
func (h *minHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]

	return x
}
