/**
 * Problem: 1751. Maximum Number of Events That Can Be Attended II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

// Event represents a single event with start time, end time, and value
type Event struct {
	start, end, value int
}

// NewEvent creates a new Event from a slice of integers [start, end, value]
func NewEvent(v []int) Event {
	return Event{
		start: v[0], // Start time of the event
		end:   v[1], // End time of the event
		value: v[2], // Value gained from attending this event
	}
}

// maxValue finds the maximum value that can be obtained by attending at most k non-overlapping events
func maxValue(events [][]int, k int) int {
	// Get the number of events
	n := len(events)
	
	// Convert input events to Event structs for easier handling
	es := make([]Event, n)
	for i, e := range events {
		es[i] = NewEvent(e)
	}

	// Sort events by end time to enable dynamic programming approach
	// This allows us to process events in chronological order of their completion
	sort.Slice(es, func(i, j int) bool {
		return es[i].end < es[j].end
	})

	// Precompute binary search links for efficient lookup of non-overlapping events
	// link[i] stores the index where we can start searching for compatible previous events
	link := make([]int, n)
	for i := 0; i < n; i++ {
		// Find the largest index j < i such that es[j].end < es[i].start
		// This gives us the rightmost event that doesn't overlap with event i
		l, r := 0, i

		for l < r {
			m := (l + r) / 2

			if es[m].end < es[i].start {
				l = m + 1 // Move right to find a larger valid index
			} else {
				r = m // Move left as current event overlaps
			}
		}

		link[i] = l // Store the boundary index for non-overlapping events
	}

	// Initialize DP array where dp[i] represents the best value using event i as the last event
	dp := make([]int, n)
	for i := 0; i < n; i++ {
		dp[i] = es[i].value // Initially, each event's value is just its own value
	}

	// Iterate through each possible number of events (2 to k)
	for it := 1; it < k; it++ {
		// Step 1: Compute maximum prefix values
		// dp[i] now represents the maximum value achievable using at most (it+1) events
		// ending at or before event i
		for i := 1; i < n; i++ {
			if dp[i] < dp[i-1] {
				dp[i] = dp[i-1] // Propagate the best value seen so far
			}
		}
		
		// Step 2: Try to improve each event's value by combining with previous non-overlapping events
		// Process in reverse order to avoid using updated values from current iteration
		for i := n - 1; i >= 0; i-- {
			j := link[i] // Get the boundary for non-overlapping events
			
			if j > 0 {
				// Calculate value by taking the best result from non-overlapping events + current event's value
				val := dp[j-1] + es[i].value

				if dp[i] < val {
					dp[i] = val // Update if this combination gives better value
				}
			}
		}
	}

	// Find the maximum value among all possible ending events
	ans := 0
	for _, v := range dp {
		if v > ans {
			ans = v // Track the maximum value found
		}
	}

	return ans // Return the maximum value achievable with at most k events
}
