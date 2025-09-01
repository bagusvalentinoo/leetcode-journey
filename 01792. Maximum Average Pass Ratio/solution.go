/**
 * Problem: 1792. Maximum Average Pass Ratio
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 236 ms (Beats 100%)
 */

func maxAverageRatio(classes [][]int, extraStudents int) float64 {
	mh := minHeap{} // Initialize a minHeap to store class info and gain.

	// Populate the heap with initial class info and gain for each class.
	for _, class := range classes {
		mh = append(mh, classGain{
			info: class,
			gain: (float64(class[0]+1))/(float64(class[1]+1)) - float64(class[0])/float64(class[1]),
		})
	}

	heap.Init(&mh) // Initialize the heap structure.

	// Assign each extra student to the class with the highest gain.
	for i := 0; i < extraStudents; i++ {
		mh[0].info[0]++ // Increment passed students for the top class.
		mh[0].info[1]++ // Increment total students for the top class.

		// Recalculate gain after adding a student.
		mh[0].gain = (float64(mh[0].info[0]+1))/(float64(mh[0].info[1]+1)) -
			float64(mh[0].info[0])/float64(mh[0].info[1])

		heap.Fix(&mh, 0) // Restore heap property after update.
	}

	var totalRatio float64 = 0 // Accumulate total pass ratio.

	// Sum up the pass ratios for all classes.
	for _, class := range mh {
		totalRatio += float64(class.info[0]) / float64(class.info[1])
	}

	return totalRatio / float64(len(mh)) // Return the average pass ratio.
}

// classGain stores class info and the gain of adding an extra student.
type classGain struct {
	info []int    // info[0]: passed, info[1]: total students
	gain float64  // Gain in pass ratio by adding one student
}

// minHeap implements heap.Interface for classGain, sorted by gain descending.
type minHeap []classGain

// Len returns the number of elements in the heap.
func (h minHeap) Len() int {
	return len(h)
}

// Swap exchanges elements at indices i and j.
func (h minHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

// Less compares gain values, sorts heap by highest gain first.
func (h minHeap) Less(i, j int) bool {
	return h[i].gain > h[j].gain
}

// Push adds a new element to the heap.
func (h *minHeap) Push(x any) {
	*h = append(*h, x.(classGain))
}

// Pop removes and returns the last element from the heap.
func (h *minHeap) Pop() any {
	x := (*h)[len(*h)-1]
	*h = (*h)[0 : len(*h)-1]
	return x
}
