/**
 * Problem: 3321. Find X-Sum of All K-Long Subarrays II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 214 ms (Beats 100%)
 */

// Define a struct `item` to represent a value, its frequency, index in the heap,
// and whether it is part of the top `x` elements.
type item struct {
	val   int
	freq  int
	idx   int
	inTop bool
}

// Define a min-heap `hotHeap` for the top `x` elements.
type hotHeap []*item

// Return the length of the `hotHeap`.
func (h hotHeap) Len() int { return len(h) }

// Compare two items in the `hotHeap` based on frequency and value.
func (h hotHeap) Less(i, j int) bool {
	if h[i].freq != h[j].freq {
		return h[i].freq < h[j].freq
	}
	return h[i].val < h[j].val
}

// Swap two items in the `hotHeap` and update their indices.
func (h hotHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i]; h[i].idx, h[j].idx = i, j }

// Push a new item into the `hotHeap` and set its index.
func (h *hotHeap) Push(x interface{}) {
	it := x.(*item)
	it.idx = len(*h)
	*h = append(*h, it)
}

// Pop the top item from the `hotHeap` and return it.
func (h *hotHeap) Pop() interface{} {
	old := *h
	it := old[len(old)-1]
	*h = old[:len(old)-1]
	return it
}

// Define a max-heap `restHeap` for the remaining elements.
type restHeap []*item

// Return the length of the `restHeap`.
func (h restHeap) Len() int { return len(h) }

// Compare two items in the `restHeap` based on frequency and value.
func (h restHeap) Less(i, j int) bool {
	if h[i].freq != h[j].freq {
		return h[i].freq > h[j].freq
	}
	return h[i].val > h[j].val
}

// Swap two items in the `restHeap` and update their indices.
func (h restHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i]; h[i].idx, h[j].idx = i, j }

// Push a new item into the `restHeap` and set its index.
func (h *restHeap) Push(x interface{}) {
	it := x.(*item)
	it.idx = len(*h)
	*h = append(*h, it)
}

// Pop the top item from the `restHeap` and return it.
func (h *restHeap) Pop() interface{} {
	old := *h
	it := old[len(old)-1]
	*h = old[:len(old)-1]
	return it
}

// Function `findXSum` calculates the X-sum of all K-long subarrays.
func findXSum(nums []int, k int, x int) []int64 {
	// Initialize the length of the input array and result array.
	n := len(nums)
	ans := make([]int64, n-k+1)

	// Create a map to store frequency of values and initialize heaps.
	freq := map[int]*item{}
	hot := &hotHeap{}
	rest := &restHeap{}

	// Initialize the heaps.
	heap.Init(hot)
	heap.Init(rest)

	// Variable to store the sum of the top `x` elements.
	var sum int64 = 0

	// Function to remove an item from its current heap.
	removeFromCurrent := func(it *item) {
		if it.inTop {
			sum -= int64(it.val) * int64(it.freq)
			heap.Remove(hot, it.idx)
			it.inTop = false
		} else if it.freq > 0 && it.idx >= 0 && it.idx < rest.Len() && (*rest)[it.idx] == it {
			heap.Remove(rest, it.idx)
		}
	}

	// Function to promote items from `restHeap` to `hotHeap` if possible.
	promoteIfPossible := func() {
		for hot.Len() < x && rest.Len() > 0 {
			best := heap.Pop(rest).(*item)
			best.inTop = true
			sum += int64(best.val) * int64(best.freq)
			heap.Push(hot, best)
		}
	}

	// Function to insert a value into the heaps.
	insertVal := func(v int) {
		it, ok := freq[v]
		if !ok {
			it = &item{val: v, idx: -1}
			freq[v] = it
		} else {
			removeFromCurrent(it)
		}

		it.freq++
		it.inTop = true
		sum += int64(it.val) * int64(it.freq)
		heap.Push(hot, it)

		if hot.Len() > x {
			worst := heap.Pop(hot).(*item)
			sum -= int64(worst.val) * int64(worst.freq)
			worst.inTop = false
			heap.Push(rest, worst)
		}
	}

	// Function to erase a value from the heaps.
	eraseVal := func(v int) {
		it := freq[v]
		removeFromCurrent(it)

		it.freq--
		if it.freq == 0 {
			delete(freq, v)
			it.idx, it.inTop = -1, false
		} else {
			heap.Push(rest, it)
		}

		promoteIfPossible()
	}

	// Insert the first `k` elements into the heaps.
	for i := 0; i < k; i++ {
		insertVal(nums[i])
	}

	// Store the initial sum in the result array.
	ans[0] = sum

	// Slide the window over the array and update the result.
	for i := k; i < n; i++ {
		eraseVal(nums[i-k])
		insertVal(nums[i])
		ans[i-k+1] = sum
	}

	// Return the result array.
	return ans
}
